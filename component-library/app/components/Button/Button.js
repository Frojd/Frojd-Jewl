import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Arrow from 'SVG/arrow.svg';
import External from 'SVG/external.svg';
import Download from 'SVG/download.svg';
import s from './Button.module.scss';

const Button = ({
    children,
    title,
    className,
    modifier,
    size,
    icon,
    url,
    target,
    rel,
    attrTitle,
    type,
    disabled,
    onClick,
    atts,
}) => {
    const isButton = !url;
    const Tag = isButton ? 'button' : 'a';
    const defaultType = isButton ? (type ? type : 'button') : null;

    const classes = classNames(
        className,
        s.Root,
        [s[`Root--${modifier}`]],
        [s[`Root--${size}`]],
        {[s[`Root--${icon}`]]: icon},
        {[s['Root--Disabled']]: disabled},
    );

    console.log(url, isButton, Tag);

    return (
        <Tag
            className={classes}
            href={url}
            target={target}
            rel={rel}
            title={attrTitle}
            type={defaultType}
            aria-disabled={disabled}
            disabled={disabled}
            onClick={onClick}
            {...atts}
        >
            {title &&
                <span>{title}</span>
            }
            {children &&
                <span>{children}</span>
            }
            {icon &&
                <Icon icon={icon} />
            }
        </Tag>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.elementType,
    ]),
    className: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string,
    attrTitle: PropTypes.string,
    type: PropTypes.string,
    modifier: PropTypes.oneOf([
        'Primary', 'Secondary', 'Tertiary', 'TextLink', 'TextLinkWhite',
    ]),
    size: PropTypes.oneOf([
        null, '', 'Large',
    ]),
    icon: PropTypes.oneOf([
        'External', 'Arrow', 'Download',
    ]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    atts: PropTypes.object,
};

Button.defaultProps = {
    children: '',
    title: '',
    url: null,
    target: null,
    rel: null,
    attrTitle: null,
    type: null,
    modifier: 'Primary',
    size: 'Large',
    icon: null,
    disabled: null,
    onClick: null,
    atts: {},
};

const Icon = ({icon}) => {
    if(icon === 'External') {
        return (<External />);
    } else if(icon === 'Arrow') {
        return (<Arrow />);
    } else if(icon === 'Download') {
        return (<Download />);
    } else {
        return null;
    }
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
};

Icon.defaultProps = {
    icon: '',
};

export default Button;

