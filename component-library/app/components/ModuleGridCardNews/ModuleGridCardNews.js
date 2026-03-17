import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid';
import CardNews from '../CardNews';
import Button from '../Button';
import s from './ModuleGridCardNews.module.scss';

const ModuleGridCardNews = ({ title = '', items = [], button = null }) => {
    return (
        <div className={s.Root}>
            <div className={s.Wrap}>
                {title && (
                    <h2
                        className={s.Title}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                )}
                <Grid items={items} columns={3} Card={CardNews} />
                {button?.title && (
                    <div className={s.Button}>
                        <Button title={button.title} url={button.url} />
                    </div>
                )}
            </div>
        </div>
    );
};

ModuleGridCardNews.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array.isRequired,
    button: PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
    }),
};

export default ModuleGridCardNews;
