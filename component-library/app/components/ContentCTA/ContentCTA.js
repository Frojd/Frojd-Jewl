'use client';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../Image';
import Icon from '../Icon';
import s from './ContentCTA.module.scss';

const ContentCTA = ({ title = '', url = '', text = '', image = {} }) => {
    const hasImage = !!image?.src;

    const classes = classNames(s.Root);

    return (
        <article className={classes}>
            <a className={s.Link} href={url}>
                <span
                    className="sr-only"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            </a>

            {hasImage && (
                <div className={s.ImageContainer}>
                    <Image {...image} useCover={true} useCaption={false} />
                </div>
            )}

            <div className={s.Content}>
                <div className={s.ContentBody}>
                    <h3
                        className={s.Title}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />

                    {text && (
                        <p
                            className={s.Text}
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    )}
                </div>

                <div className={s.IconButton} aria-hidden={true}>
                    <Icon name="ArrowRight" />
                </div>
            </div>
        </article>
    );
};

ContentCTA.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.object,
};

export default ContentCTA;
