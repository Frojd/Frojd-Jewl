import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
    className,
}) => {
    const [useObjectFit, setUseObjectFit] = useState(true);

    useEffect(() => {
        // Fallback for object fit, e.g. ie11
        const styles = document.documentElement.style;
        if ('objectFit' in styles === false) {
            setUseObjectFit(false);
        }
    }, []);

    const hasFocal = !!focal?.x && !!focal?.y;
    const position = hasFocal ? `${focal.x} ${focal.y}` : 'center center';

    const classes = classNames(
        s.Root,
        { [s['Root--Fallback']]: !useObjectFit },
        { [s['Root--ObjectFit']]: useObjectFit },
        { [s['Root--Cover']]: useCover },
        { [s['Root--Contain']]: !useCover },
        className
    );

    if (!useObjectFit) {
        return (
            <div
                className={classes}
                style={{
                    backgroundImage: `url('${src}')`,
                    backgroundPosition: position,
                }}
                title={caption}
            />
        );
    }

    return (
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
    className: '',
};

export default Image;
