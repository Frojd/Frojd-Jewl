import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './Grid.module.scss';

const Grid = ({ Card = null, items = [], columns = 'auto' }) => {
    const columnsCount = columns === 'auto' ? items.length : columns;
    const columnSize =
        columnsCount >= 4
            ? 'Fourth'
            : columnsCount === 3
            ? 'Third'
            : columnsCount === 2
            ? 'Half'
            : 'Full';

    const classes = classNames(s.Root, [s[`Root--${columnSize}`]]);

    return (
        <div className={classes}>
            <ul className={s.List}>
                {items.map((item, index) => (
                    <Item
                        Card={Card}
                        columnSize={columnSize}
                        item={item}
                        key={index}
                    />
                ))}
            </ul>
        </div>
    );
};

Grid.propTypes = {
    Card: PropTypes.node.isRequired,
    items: PropTypes.array,
    columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const Item = ({ Card = null, columnSize = 'Third', item = {} }) => {
    const { size } = item;
    const itemSize = size ? size : columnSize;

    const classes = classNames(s.Item, [s[`Item--${itemSize}`]]);

    return (
        <li className={classes}>
            <Card {...item} size={itemSize} />
        </li>
    );
};

export default Grid;
