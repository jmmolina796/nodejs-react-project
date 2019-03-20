const createConnection = require('mysql').createConnection;
const connectionDetails = require('./connectionDetails');

class Connection {
	constructor(transaction = false) {
		this.transaction = transaction;
		const config = connectionDetails;
		this.connection = createConnection(config);
		if (transaction) {
			this.connection.beginTransaction();
		}
	}
	query(sql, args) {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, args, (err, rows, fields) => {
				let result;
				if (fields) {
					result = Connection.prepare(err, rows, fields);
				} else {
					result = Connection.prepare(err, {}, rows);
				}
				if (err) {
					console.log(err);
					if (this.transaction) {
						this.connection.rollback();
					}
					return reject(result);
				}
				resolve(result);
				return undefined;
			});
		});
	}
	close() {
		if (this.transaction) {
			this.connection.commit();
		}
		this.connection.end();
	}
	static prepare(error, data = {}, info) {
		const isError = (error !== null);
		return {
			error,
			isError,
			data,
			info,
		};
	}
}

module.exports = Connection;
