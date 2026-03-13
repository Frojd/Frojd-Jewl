import React from 'react';
import PropTypes from 'prop-types';
import s from './ModuleGridCardNews.module.scss';

const ModuleGridCardNews = ({ items = [] }) => {
    console.log(items);
    return <div className={s.Root}>ModuleGridCardNews</div>;
};

ModuleGridCardNews.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ModuleGridCardNews;
