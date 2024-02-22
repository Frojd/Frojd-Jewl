import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import s from './Base.module.scss';

const Base = (Container) => {
    const { displayName } = Container;

    const Wrapper = ({
        containerName = '',
        header = {},
        footer = {},
        ...restProps
    }) => {
        const name = containerName ? containerName : displayName;
        const classes = classNames(s.Root, [s[`Root--${name}`]]);
        return (
            <div className={classes}>
                <Header {...header} />

                <div className={s.Document} role="document">
                    <main className={s.Main} id="mainContent">
                        <Container {...restProps} />
                    </main>
                </div>

                <Footer {...footer} />
            </div>
        );
    };

    Wrapper.propTypes = {
        containerName: PropTypes.string,
        header: PropTypes.object,
        footer: PropTypes.object,
    };

    return Wrapper;
};

Base.propTypes = {
    displayName: PropTypes.string,
};

export default Base;
