import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import s from './Button.module.scss';

const Button = ({
    children = '',
    title = '',
    className = null,
    modifier = 'Primary',
    size = 'Large',
    icon = null,
    url = null,
    target = null,
    rel = null,
    attrTitle = null,
    type = null,
    disabled = null,
    onClick = null,
    ...restProps
}) => {
    const isButton = !url;
    const Tag = isButton ? 'button' : 'a';
    const defaultType = isButton ? (type ? type : 'button') : null;

    const classes = classNames(
        className,
        s.Root,
        [s[`Root--${modifier}`]],
        [s[`Root--${size}`]],
        { [s[`Root--${icon}`]]: icon },
        { [s['Root--Disabled']]: disabled }
    );

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
            {...restProps}
        >
            {title && <span>{title}</span>}
            {children && <span>{children}</span>}
            {icon && <Icon name={icon} />}
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
        'Primary',
        'Secondary',
        'Tertiary',
        'TextLink',
        'TextLinkWhite',
    ]),
    size: PropTypes.oneOf([null, '', 'Small', 'Large']),
    icon: PropTypes.oneOf([null, '', 'External', 'Arrow', 'Download']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
