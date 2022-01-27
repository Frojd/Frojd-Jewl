import React from 'react';
import PropTypes from 'prop-types';
import Image from 'Components/Image';
import s from './Card.module.scss';

const Card = ({ title, url, image, text }) => {
    return (
        <article className={s.Root}>
            <a className={s.Link} href={url}>
                <span className="sr-only">{title}</span>
            </a>

            <div className={s.Image}>
                <Image {...image} className={s.Img} />
            </div>

            <div className={s.Content}>
                <h2 className={s.Title}>{title}</h2>
                <p className={s.Text}>{text}</p>
            </div>
        </article>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.object,
};

Card.defaultProps = {
    title: '',
    url: '',
    text: '',
    image: {},
};

export default Card;
