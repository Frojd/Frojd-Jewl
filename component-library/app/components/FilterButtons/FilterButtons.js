import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/Button';
import s from './FilterButtons.module.scss';

const FilterButtons = ({filters}) => {
    return (
        <ul className={s.Root}>
            {filters.map((filter, i) => (
                <li className={s.Filter} key={i}>
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
    filters: PropTypes.array, 
};

FilterButtons.defaultProps = {
    filters: [], 
};

export default FilterButtons;
