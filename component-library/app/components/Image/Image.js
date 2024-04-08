import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NextImage from 'next/image';
import s from './Image.module.scss';

const Image = ({
    caption = '',
    useCaption = true,
    className = '',
    ...restProps
}) => {
    const { useCover = true } = restProps;

    const classes = classNames(
        s.Root,
        { [s['Root--Caption']]: useCaption && caption },
        { [s['Root--Cover']]: useCover },
        { [s['Root--Contain']]: !useCover },
        className
    );

    return (
        <figure className={classes}>
            <Img {...restProps} />

            {useCaption && caption && (
                <figcaption className={s.Caption}>{caption}</figcaption>
            )}
        </figure>
    );
};

Image.propTypes = {
    caption: PropTypes.string,
    useCover: PropTypes.bool,
    useCaption: PropTypes.bool,
    className: PropTypes.string,
};

const Img = ({
    src = '',
    alt = '',
    width = 0,
    height = 0,
    title = '',
    focal = {},
    srcset = [],
    sizes = [],
    useCover = true,
    useLazyLoad = true,
    useNextImage = true,
}) => {
    const hasFocal = !!focal?.x && !!focal?.y;
    const position = hasFocal ? `${focal.x} ${focal.y}` : 'center center';

    /* eslint-disable @next/next/no-img-element */
    if (!useNextImage) {
        <img
            className={s.Img}
            src={src}
            alt={alt}
            width={width}
            height={height}
            title={title}
            srcSet={srcset.join(', ')}
            sizes={sizes.join(', ')}
            style={{
                objectPosition: position,
            }}
            loading={useLazyLoad ? 'lazy' : null}
        />;
    }
    /* eslint-enable @next/next/no-img-element */

    return (
        <NextImage
            className={s.Img}
            src={src}
            width={useCover ? undefined : width}
            height={useCover ? undefined : height}
            alt={alt}
            title={title}
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
    title: PropTypes.string,
    focal: PropTypes.object,
    srcset: PropTypes.array,
    sizes: PropTypes.array,
    useCover: PropTypes.bool,
    useLazyLoad: PropTypes.bool,
    useNextImage: PropTypes.bool,
};

export default Image;
