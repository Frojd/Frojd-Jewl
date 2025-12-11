import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import s from './Hero.module.scss';

const Hero = ({
    title = '',
    description = '',
    buttonText = '',
    buttonUrl = null,
    buttonIcon = 'Arrow',
    backgroundImage = '',
    photoCredit = '',
    className = null,
}) => {
    const classes = classNames(s.Root, className);

    return (
        <div className={classes}>
            {backgroundImage && (
                <img
                    src={backgroundImage}
                    alt=""
                    className={s.BackgroundImage}
                />
            )}
            <div className={s.Overlay} />
            <div className={s.Gradient} />

            <div className={s.Container}>
                <div className={s.Content}>
                    <div className={s.TextContent}>
                        <h1 className={s.Title}>{title}</h1>
                        {description && (
                            <p className={s.Description}>{description}</p>
                        )}
                    </div>
                    {buttonText && (
                        <Button
                            modifier="Primary"
                            size="Large"
                            icon={buttonIcon}
                            url={buttonUrl}
                        >
                            {buttonText}
                        </Button>
                    )}
                </div>
            </div>

            {photoCredit && <div className={s.PhotoCredit}>{photoCredit}</div>}
        </div>
    );
};

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonIcon: PropTypes.string,
    backgroundImage: PropTypes.string,
    photoCredit: PropTypes.string,
    className: PropTypes.string,
};

export default Hero;
