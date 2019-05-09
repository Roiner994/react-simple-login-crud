import React from 'react';
import TableItemAction from './TableItemAction';
import PropTypes from 'prop-types';

const TableItem = ({object, attributes, urlPath, isActions, showModal}) => {
    return (
        <tr>
            {
                attributes.map(attribute => <td key={`${attribute}_${object.id}`}>{object[attribute]}</td>)
            }
            { isActions && <TableItemAction urlPath={urlPath} id={object.id} showModal={showModal}/> }
        </tr>
    );
};

TableItem.propTypes = {
    object:PropTypes.object.isRequired,
    attributes:PropTypes.array.isRequired,
    urlPath:PropTypes.string.isRequired,
};

export default TableItem;

