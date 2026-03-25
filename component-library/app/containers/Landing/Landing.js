import React from 'react';
import PropTypes from 'prop-types';
import Base from '../../layouts/Base';
import Hero from '../../components/Hero';
import SectionListModule from '../../components/SectionListModule';
import s from './Landing.module.scss';

const Landing = ({ hero = {}, modules = {} }) => {
    return (
        <div className={s.Root}>
            <Hero {...hero} />
            <SectionListModule {...modules} />
        </div>
    );
};

Landing.propTypes = {
    hero: PropTypes.object,
    modules: PropTypes.object,
};

export default Base(Landing);
