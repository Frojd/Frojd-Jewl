import React from 'react';
import PropTypes from 'prop-types';
import Base from 'Layouts/Base';
import s from './NotFoundPage.module.scss';

const NotFoundPage = ({ title = '' }) => {
    return (
        <div className={s.Root}>
            <h1 className={s.Title}>{title}</h1>
        </div>
    );
};

NotFoundPage.propTypes = {
    title: PropTypes.string,
};

export default Base(NotFoundPage);
