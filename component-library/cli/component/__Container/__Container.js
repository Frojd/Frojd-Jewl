import React from 'react';
import PropTypes from 'prop-types';
import Base from '../../layouts/Base';
import s from './__Container.module.scss';

const __Container = () => {
    return (
        <div className={s.Root}>
            __Container
        </div>
    );
};

__Container.propTypes = {
};

export default Base(__Container);
