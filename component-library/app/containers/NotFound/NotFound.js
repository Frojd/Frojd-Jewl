import React from 'react';
import PropTypes from 'prop-types';
import Base from '../../layouts/Base';
import Image from '../../components/Image';
import Richtext from '../../components/Richtext';
import Button from '../../components/Button';
import s from './NotFound.module.scss';

const NotFound = ({
    title = '',
    preamble = '',
    content = {},
    image = {},
    button = null,
}) => {
    const hasFeatured = !!image?.src;
    const imageSizes = [
        '(min-width: 1680px) 1440px',
        '(min-width: 1440px) 1280px',
        '100vw',
    ];

    return (
        <div className={s.Root}>
            <div className={s.Wrap}>
                <div className={s.Layout}>
                    <div className={s.Content}>
                        <h1
                            className={s.Title}
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        {preamble && (
                            <p
                                className={s.Preamble}
                                dangerouslySetInnerHTML={{ __html: preamble }}
                            />
                        )}
                        {button && <Button className={s.Button} {...button} />}
                        <Richtext {...content} />
                    </div>
                    {hasFeatured && (
                        <div className={s.Featured}>
                            <Image
                                {...image}
                                sizes={imageSizes}
                                useCover={false}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

NotFound.propTypes = {
    title: PropTypes.string,
    preamble: PropTypes.string,
    content: PropTypes.object,
    image: PropTypes.object,
    button: PropTypes.object,
};

export default Base(NotFound);
