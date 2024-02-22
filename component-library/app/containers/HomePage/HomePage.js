import React from 'react';
import PropTypes from 'prop-types';
import Base from 'Layouts/Base';
import Hero from 'Components/Hero';
import s from './HomePage.module.scss';

const HomePage = ({ hero = {} }) => {
    return (
        <div className={s.Root}>
            <Hero {...hero} />
        </div>
    );
};

HomePage.propTypes = {
    hero: PropTypes.object,
};

export default Base(HomePage);
