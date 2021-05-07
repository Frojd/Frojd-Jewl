import React from 'react';
// import PropTypes from 'prop-types';
import Base from 'layouts/Base';
import s from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    return (
        <div className={s.Root}>
            <h1 className={s.Title}>NotFoundPage</h1>
        </div>
    );
};

export default Base(NotFoundPage);
