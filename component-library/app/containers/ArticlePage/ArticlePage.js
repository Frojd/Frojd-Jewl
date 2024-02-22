import React from 'react';
import PropTypes from 'prop-types';
import Base from 'Layouts/Base';
import Hero from 'Components/Hero';
import Richtext from 'Components/Richtext';
import Submenu from 'Components/Submenu';
import s from './ArticlePage.module.scss';

const ArticlePage = ({ title = '', content = {}, submenu = {} }) => {
    return (
        <article className={s.Root}>
            <div className={s.Wrap}>
                <div className={s.Layout}>
                    <div className={s.Content}>
                        <h1
                            className={s.Title}
                            dangerouslySetInnerHTML={{ __html: title }}
                        />

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
    title: PropTypes.object,
    content: PropTypes.object,
    submenu: PropTypes.object,
};

export default Base(ArticlePage);
