import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/Button';
import s from './PillGroup.module.scss';

const PillGroup = ({ items = [], multiple = false }) => {
    return (
        <ul className={s.Root}>
            {items.map((filter, i) => (
                <li className={s.Filter} key={i}>
                    {/* TODO: Should be checkbox if multiple, else radio button instead */}
                    <Button modifier="Secondary" size="Small">
                        {filter.label}
                    </Button>
                </li>
            ))}
        </ul>
    );
};

PillGroup.propTypes = {
    items: PropTypes.array,
    multiple: PropTypes.bool,
};

export default PillGroup;
