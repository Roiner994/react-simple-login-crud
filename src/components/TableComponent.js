import React from 'react';
import {Spinner} from 'react-bootstrap';
import TableList from './TableList';
import PropTypes from 'prop-types';

const renderTable = (listObject, urlPath, attributes,tableHeader, isActions, showModal) => (
    listObject.length > 0 ?    
    <div>
        <TableList 
            listObject={listObject} 
            urlPath={urlPath} 
            attributes={attributes} 
            tableHeader={tableHeader}
            isActions={isActions}
            showModal={showModal}
            >
        </TableList>
    </div>
    : <Spinner animation="border" variant="primary" />
);

const TableComponent = ({listObject, urlPath, attributes, tableHeader , isActions, showModal }) => {
    return (
        <div>
            {renderTable(listObject,urlPath,attributes,tableHeader,isActions, showModal)}
        </div>
    );
};

TableComponent.propTypes = {
    listObject:PropTypes.array.isRequired,
    attributes:PropTypes.array.isRequired,
    tableHeader:PropTypes.array.isRequired,
    urlPath:PropTypes.string.isRequired,
};

export default TableComponent;