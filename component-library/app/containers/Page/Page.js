import React from 'react';
import PropTypes from 'prop-types';
import Base from 'Layouts/Base';
import Richtext from 'Components/Richtext';
import Submenu from 'Components/Submenu';
import s from './Page.module.scss';

const Page = ({ title = '', content = {}, submenu = {} }) => {
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

Page.propTypes = {
    title: PropTypes.string,
    content: PropTypes.object,
    submenu: PropTypes.object,
};

export default Base(Page);
