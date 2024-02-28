import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Base from 'Layouts/Base';
import ArchiveResult from 'Components/ArchiveResult';
import s from './Archive.module.scss';

const Archive = ({
    title = '',
    text = '',
    archiveResult = {},
}) => {
    return (
        <div className={s.Root}>
            <div className={s.Header}>
                <div className={s.Wrap}>
                    <h1
                        className={s.Title}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <p
                        className={s.Text}
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </div>
            </div>
            <div className={s.Wrap}>
                <ArchiveResult
                    {...archiveResult}
                />
            </div>
        </div>
    );
};

Archive.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    archiveResult: PropTypes.object,
};

export default Base(Archive);
