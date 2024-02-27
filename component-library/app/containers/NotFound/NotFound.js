import React from 'react';
import PropTypes from 'prop-types';
import Base from 'Layouts/Base';
import s from './NotFound.module.scss';

const NotFound = ({ title = '' }) => {
    return (
        <div className={s.Root}>
            <h1
                className={s.Title}
                dangerouslySetInnerHTML={{ __html: title }}
            />
        </div>
    );
};

NotFound.propTypes = {
    title: PropTypes.string,
};

export default Base(NotFound);
