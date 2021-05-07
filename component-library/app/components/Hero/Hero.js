import React from 'react';
import PropTypes from 'prop-types';
import s from './Hero.module.scss';

const Hero = ({ title }) => (
    <div className={s.Root}>
        <h1 className={s.Title}>{title}</h1>
    </div>
);

Hero.propTypes = {
    title: PropTypes.string.isRequired,
};

Hero.defaultProps = {
    title: '',
};

export default Hero;
