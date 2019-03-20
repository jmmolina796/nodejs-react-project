const Connection = require('../connection');

module.exports.response = (res, tran = false, prom, ...values) => {
  const cn = new Connection(tran);
  prom(cn, ...values)
    .then(result => success(res, cn, result))
    .catch(error => fail(res, cn, error))
};

const success = (res, cn, result = []) => {
  cn.close();
  res.json({ isError: false, data: result });
};

const fail = (res, cn, error) => {
  cn.close();
  res.json({ isError: true, data: [] });
};
