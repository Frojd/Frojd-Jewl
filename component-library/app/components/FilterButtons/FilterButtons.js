import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/Button';
import s from './FilterButtons.module.scss';

const FilterButtons = ({ items = [] }) => {
    return (
        <ul className={s.Root}>
            {items.map((filter, i) => (
                <li className={s.Filter} key={i}>
                    {/* TODO: Should be checkbox or radio button instead */}
                    <Button
                        title={filter.label}
                        modifier={'Secondary'}
                        size={'Small'}
                    />
                </li>
            ))}
        </ul>
    );
};

FilterButtons.propTypes = {
    items: PropTypes.array,
};

export default FilterButtons;
