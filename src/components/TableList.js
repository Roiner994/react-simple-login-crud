import React from 'react';
import {Table} from 'react-bootstrap';
import TableItem from './TableItem';
import PropTypes from 'prop-types';

const TableList = ({listObject, urlPath, attributes, tableHeader, isActions, showModal}) => {
    return (
        <div className="customers-list">
            <Table>
                <thead>
                    <tr>
                        {
                            tableHeader.map(th => 
                            <th key={th}>{th}</th>)
                        }
                        { isActions && <th>&nbsp;</th>}
                    </tr>
                </thead>
                <tbody>
                    {
                        listObject.map( c => 
                            <TableItem
                                key={c.id}
                                object={c}
                                attributes={attributes}
                                urlPath={urlPath}
                                isActions={isActions}
                                showModal={showModal}>
                            </TableItem>)
                    }
                </tbody>
            </Table>
        </div> 
    );
};

TableList.prototypes = {
    listObject: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
    attributes: PropTypes.array.isRequired,
    tableHeader: PropTypes.array.isRequired,
};

export default TableList;