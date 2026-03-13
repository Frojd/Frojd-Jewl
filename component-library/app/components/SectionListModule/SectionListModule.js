import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import s from './SectionListModule.module.scss';

export const Components = {
    ModuleGridCardNews: dynamic(() => import('../ModuleGridCardNews')),
};

const SectionListModule = ({ items = [] }) => {
    return (
        <div className={s['SectionListModule']}>
            <div className={s['SectionListModule__List']}>
                {items.map((item, index) => {
                    return <Item key={index} index={index} {...item} />;
                })}
            </div>
        </div>
    );
};

SectionListModule.propTypes = {
    items: PropTypes.array.isRequired,
};

const Item = ({ index = 0, blockType = '', blockData = {} }) => {
    const Component = Components[blockType];
    if (!Component) {
        return null;
    }

    const fallbackId = `modules-${index}-${blockType}`;

    const classes = classNames(
        [s['SectionListModule__Item']],
        [s[`SectionListModule__Item--${blockType}`]]
    );
    return (
        <div className={classes}>
            <Component id={fallbackId} {...blockData} isModule={true} />
        </div>
    );
};

Item.propTypes = {
    index: PropTypes.number.isRequired,
    blockType: PropTypes.string.isRequired,
    blockData: PropTypes.object.isRequired,
};

export default SectionListModule;
