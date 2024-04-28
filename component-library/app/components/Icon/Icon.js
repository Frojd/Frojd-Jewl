import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Arrow from './inline-svg/arrow.svg';
import ArrowRight from './inline-svg/arrowRight.svg';
import Close from './inline-svg/close.svg';
import Download from './inline-svg/download.svg';
import External from './inline-svg/external.svg';
import Facebook from './inline-svg/facebook.svg';
import Hamburger from './inline-svg/hamburger.svg';
import Instagram from './inline-svg/instagram.svg';
import LinkedIn from './inline-svg/linkedin.svg';
import Mail from './inline-svg/mail.svg';
import Phone from './inline-svg/phone.svg';
import Pin from './inline-svg/pin.svg';
import Search from './inline-svg/search.svg';
import s from './Icon.module.scss';

const Icon = ({ name = '', id = '', className = '' }) => {
    const icons = {
        Arrow: Arrow,
        ArrowRight: ArrowRight,
        Download: Download,
        External: External,
        Facebook: Facebook,
        Hamburger: Hamburger,
        Instagram: Instagram,
        LinkedIn: LinkedIn,
        Mail: Mail,
        Phone: Phone,
        Pin: Pin,
        Search: Search,
    };
    const Svg = icons[name];
    if (!Svg) {
        console.warn(`SVG "${name}" is missing.`);
        return null;
    }

    const classes = classNames(s.Root, className);

    return <Svg className={classes} id={id} />;
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
};

export default Icon;
