import React from 'react';
import PropTypes from 'prop-types';
import Base from '../../layouts/Base';
import Hero from '../../components/Hero';
import s from './Landing.module.scss';

const Landing = ({ hero = {} }) => {
    return (
        <div className={s.Root}>
            <Hero {...hero} />
        </div>
    );
};

Landing.propTypes = {
    hero: PropTypes.object,
};

export default Base(Landing);
