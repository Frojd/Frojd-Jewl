import React from 'react';
import PropTypes from 'prop-types';
import Base from 'Layouts/Base';
import Hero from 'Components/Hero';
import Richtext from 'Components/Richtext';
import Submenu from 'Components/Submenu';
import s from './ArticlePage.module.scss';

const ArticlePage = ({ hero, content, submenu }) => {
    return (
        <article className={s.Root}>
            <Hero {...hero} />

            <div className={s.Wrap}>
                <div className={s.Layout}>
                    <div className={s.Content}>
                        <Richtext {...content} />
                    </div>

                    <aside className={s.Sidebar}>
                        <Submenu {...submenu} />
                    </aside>
                </div>
            </div>
        </article>
    );
};

ArticlePage.propTypes = {
    hero: PropTypes.object,
    content: PropTypes.object,
    submenu: PropTypes.object,
};

ArticlePage.defaultProps = {
    hero: {},
    content: {},
    submenu: {},
};

export default Base(ArticlePage);
