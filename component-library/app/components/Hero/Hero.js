import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import Button from '../Button';
import s from './Hero.module.scss';

const Hero = ({ title = '', image = null, preamble = '', button = null }) => (
    <div className={s.Root}>
        {image?.src && <Image {...image} useCaption={false} />}
        <div className={s.Wrap}>
            <div className={s.Content}>
                <h1
                    className={s.Title}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                {preamble && <p className={s.Preamble}>{preamble}</p>}
                {button?.title && (
                    <Button
                        className={s.Button}
                        title={button.title}
                        url={button.url}
                    />
                )}
            </div>
        </div>
    </div>
);

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }),
    preamble: PropTypes.string,
    button: PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
    }),
};

export default Hero;
