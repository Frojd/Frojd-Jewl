import React from 'react';
import PropTypes from 'prop-types';
import Base from '../../layouts/Base';
import s from './__Container__.module.scss';

const __Container__ = () => {
    return <div className={s.Root}>__Container__</div>;
};

__Container__.propTypes = {};

export default Base(__Container__);
