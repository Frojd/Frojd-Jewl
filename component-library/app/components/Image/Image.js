import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NextImage from 'next/image';
import classNames from 'classnames';
import s from './Image.module.scss';

const Image = ({
    src,
    alt,
    width,
    height,
    caption,
    focal,
    srcset,
    sizes,
    useCover,
    useLazyLoad,
    useNextImage,
    className,
}) => {
    const hasFocal = !!focal?.x && !!focal?.y;
    const position = hasFocal ? `${focal.x} ${focal.y}` : 'center center';

    const classes = classNames(
        s.Root,
        { [s['Root--Cover']]: useCover },
        { [s['Root--Contain']]: !useCover },
        className
    );

    if (!useNextImage) {
        <img
            className={classes}
            src={src}
            alt={alt}
            width={width}
            height={height}
            title={caption}
            srcSet={srcset.join(', ')}
            sizes={sizes.join(', ')}
            style={{
                objectPosition: position,
            }}
            loading={useLazyLoad ? 'lazy' : null}
        />
    }

    return (
        <NextImage
            className={classes}
            src={src}
            width={useCover ? undefined : width}
            height={useCover ? undefined : height}
            alt={alt}
            title={caption}
            fill={useCover}
            sizes={sizes.join(', ')}
            loading={useLazyLoad ? 'lazy' : 'eager'}
            style={{
                objectPosition: position,
            }}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    caption: PropTypes.string,
    focal: PropTypes.object,
    srcset: PropTypes.array,
    sizes: PropTypes.array,
    useCover: PropTypes.bool,
    useLazyLoad: PropTypes.bool,
    useNextImage: PropTypes.bool,
    className: PropTypes.string,
};

Image.defaultProps = {
    src: '',
    alt: '',
    width: 0,
    height: 0,
    caption: '',
    focal: {},
    srcset: [],
    sizes: [],
    useCover: true,
    useLazyLoad: true,
    useNextImage: true,
    className: '',
};

export default Image;
