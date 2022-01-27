import React from 'react';
import PropTypes from 'prop-types';
import s from './Card.module.scss';

const Card = ({ title, link, image, text }) => {
    return (
        <article className={s.Root}>
            <a className={s.Link} href={link.href}>
                <span className={`sr-only`}>{link.title}</span>
            </a>
            <div
                className={s.Image}
                style={{
                    backgroundImage: `url(${image.src})`,
                }}
                title={image.alt}></div>
            <div className={s.Content}>
                <h2 className={s.Title}>{title}</h2>
                <p className={s.Text}>{text}</p>
            </div>
        </article>
    );
};

Card.propTypes = {
    tag: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    image: PropTypes.shape({
        alt: PropTypes.string,
        src: PropTypes.string,
    }),
    link: PropTypes.shape({
        href: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
    }),
};

Card.defaultProps = {
    tag: '',
    title: '',
    text: '',
    image: {},
    link: {},
};

export default Card;
