import React from 'react';
import PropTypes from 'prop-types';
import CardAccordion from '../CardAccordion';
import s from './ModuleListCardAccordion.module.scss';

const ModuleListCardAccordion = ({ title = '', items = [] }) => {
    return (
        <div className={s.Root}>
            {title && (
                <h2
                    className={s.Title}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            )}
            <div className={s.List}>
                {items.map((item, index) => (
                    <CardAccordion key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

ModuleListCardAccordion.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array.isRequired,
};

export default ModuleListCardAccordion;
