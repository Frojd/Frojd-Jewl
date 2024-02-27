import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './Grid.module.scss';

const Grid = ({
    Card = null,
    items = [],
    columns = 3,
}) => {
    const columnSize = columns >= 4 ? 'Fourth' : (
        columns === 3 ? 'Third' : (
            columns === 2 ? 'Half' : 'Full'
        )
    );

    const classes = classNames(
        s.Root,
        [s[`Root--${columnSize}`]],
    );

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
};

const Item = ({
    Card = null,
    columnSize = 'Third',
    item = {},
}) => {
    const { size } = item;
    const itemModifier = size ? size : columnSize;

    const classes = classNames(
        s.Item,
        [s[`Item--${itemModifier}`]],
    );

    return (
        <li className={classes}>
            <Card {...item} itemModifier={itemModifier} />
        </li>
    );
};

export default Grid;
