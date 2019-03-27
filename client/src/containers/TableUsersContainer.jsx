import React, { Component } from "react";

import Table from "../components/Table"


class TableUsersContainer extends Component {

    state = {
        users: [],
        isFetching: true,
        didError: false,
    }

    componentDidMount() {
        this.setState({  isFetching: true, didError: false });
        fetch("api/users")
            .then((response) => {
                if(!response.ok) {
                    throw new Error("Error fetching");
                }
                return response.json()
            })
            .then((data) => {
                this.setState({ users: data, isFetching: false, didError: false });
            })
            .catch(err => {
                this.setState({ users: [], isFetching: false, didError: true });
            });
    }

    render() {

        const { users, isFetching, didError } = this.state;

        return (
            <Table users={users} isFetching={isFetching} didError={didError} />
        )
    }
}

export default TableUsersContainer;