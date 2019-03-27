import React from "react";
import _ from "lodash";
import shortid from "shortid";

import Wrapper from "./Wrapper";
import Thead from "./Thead";
import Tr from "./Tr";
import Th from "./Th";
import Tbody from "./Tbody";
import Td from "./Td";

const Table = ({ users, isFetching, didError }) => (
    didError ? (
        <div>An error has occurred</div> 
    ) : isFetching ? (
        <div>Loading...</div> 
    ) : _.isEmpty(users) ? (
        <div>Empty</div>
    ) : (
        <Wrapper>
            <Thead>
                <Tr>
                    {
                        _.keys(users[0]).map(k => <Th key={shortid.generate()}>{k}</Th>)
                    }
                </Tr>
            </Thead>
            <Tbody>
                {
                    _.map(users, (user) => (
                        <Tr key={shortid.generate()}>
                            {
                                _.map(user, detail => <Td key={shortid.generate()}>{detail}</Td>) 
                            }
                        </Tr>
                    ))
                }
            </Tbody>
        </Wrapper>
    )
);

export default Table;

