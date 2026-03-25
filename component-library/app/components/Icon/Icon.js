import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../Image';
import s from './Icon.module.scss';
// Images
import Logo from './img/logo.svg';
import LogoWhite from './img/logo--white.svg';
import Arrow from './img/arrow.svg';
import Bullet from './img/bullet.svg';
import Chevron from './img/chevron.svg';
import Download from './img/download.svg';
import External from './img/external.svg';
import Search from './img/search.svg';
// Inline svgs
import SvgArrow from './inline-svg/arrow.svg';
import SvgArrowRight from './inline-svg/arrowRight.svg';
import SvgClose from './inline-svg/close.svg';
import SvgDownload from './inline-svg/download.svg';
import SvgExternal from './inline-svg/external.svg';
import SvgFacebook from './inline-svg/facebook.svg';
import SvgHamburger from './inline-svg/hamburger.svg';
import SvgInstagram from './inline-svg/instagram.svg';
import SvgLinkedIn from './inline-svg/linkedin.svg';
import SvgMail from './inline-svg/mail.svg';
import SvgPhone from './inline-svg/phone.svg';
import SvgPin from './inline-svg/pin.svg';
import SvgSearch from './inline-svg/search.svg';

const Icon = ({
    name = '',
    className = '',
    asImg = false,
    asBg = false,
    ...rest
}) => {
    const icons = {
        Logo: Logo,
        LogoWhite: LogoWhite,
        Arrow: asBg ? Arrow : SvgArrow,
        ArrowRight: SvgArrowRight,
        Bullet: asBg ? Bullet : null,
        Chevron: asBg ? Chevron : null,
        Close: SvgClose,
        Download: asBg ? Download : SvgDownload,
        External: asBg ? External : SvgExternal,
        Facebook: SvgFacebook,
        Hamburger: SvgHamburger,
        Instagram: SvgInstagram,
        LinkedIn: SvgLinkedIn,
        Mail: SvgMail,
        Phone: SvgPhone,
        Pin: SvgPin,
        Search: asBg ? Search : SvgSearch,
    };
    const Comp = icons[name];
    const type = asImg ? 'Img' : asBg ? 'Bg' : 'Svg';
    if (!Comp) {
        console.warn(`Icon ${type} "${name}" is missing.`);
        return null;
    }

    const classes = classNames(s.Root, [s[`Root--${type}`]], className);
    const style = { maskImage: `url('${Comp.src}')` };
    if (asImg) {
        return <Image {...Comp} {...rest} className={classes} />;
    } else if (asBg) {
        return <i {...rest} style={style} className={classes} />;
    } else {
        return <Comp {...rest} className={classes} />;
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    asImg: PropTypes.bool,
};

export default Icon;
