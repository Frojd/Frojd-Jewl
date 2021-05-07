import React from 'react';
import PropTypes from 'prop-types';
import Base from 'Layouts/Base';
import Hero from 'Components/Hero';
import RawHtml from 'Components/RawHtml';
import s from './ArticlePage.module.scss';

const ArticlePage = ({hero, content}) => {
    return (
        <div className={s.Root}>

            <Hero {...hero} />

            <div className={s.Wrap}>
                <div className={s.Content}>
                    <RawHtml {...content} />
                </div>
            </div>
        </div>
    );
};

ArticlePage.propTypes = {
    hero: PropTypes.object,
    content: PropTypes.object,
};

ArticlePage.defaultProps = {
    hero: {},
    content: {},
};

export default Base(ArticlePage);
