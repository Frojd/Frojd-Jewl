import React from 'react';
import PropTypes from 'prop-types';
import Base from '../../layouts/Base';
import Image from '../../components/Image';
import Richtext from '../../components/Richtext';
import SectionListModule from '../../components/SectionListModule';
import s from './News.module.scss';

const News = ({ title = '', image = {}, content = {}, modules = {} }) => {
    const hasFeatured = !!image;
    const imageSizes = [
        '(min-width: 1680px) 1440px',
        '(min-width: 1440px) 1280px',
        '100vw',
    ];

    return (
        <article className={s.Root}>
            <div className={s.Wrap}>
                <div className={s.HeaderWrap}>
                    <div className={s.Header}>
                        <h1
                            className={s.Title}
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                    </div>
                </div>

                {hasFeatured && (
                    <div className={s.Featured}>
                        <Image {...image} sizes={imageSizes} useCover={false} />
                    </div>
                )}

                <div className={s.Layout}>
                    <div className={s.Content}>
                        <Richtext {...content} />
                    </div>
                </div>
            </div>
            <SectionListModule {...modules} />
        </article>
    );
};

News.propTypes = {
    title: PropTypes.string,
    content: PropTypes.object,
};

export default Base(News);
