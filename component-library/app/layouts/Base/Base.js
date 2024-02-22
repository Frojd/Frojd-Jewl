import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from 'Components/Header';
import s from './Base.module.scss';

const Base = (Container) => {
    const { displayName } = Container;

    const Wrapper = (props) => {
        const { containerName, header } = props;
        const name = containerName ? containerName : displayName;
        const classes = classNames(s.Root, [s[`Root--${name}`]]);
        return (
            <div className={classes}>
                <Header {...header} />

                <div className={s.Document} role="document">
                    <main className={s.Main} id="mainContent">
                        <Container {...props} />
                    </main>
                </div>
            </div>
        );
    };

    Wrapper.propTypes = {
        containerName: PropTypes.string,
        header: PropTypes.object,
        breadcrumbs: PropTypes.object,
    };

    Wrapper.defaultProps = {
        containerName: '',
        header: {},
        breadcrumbs: null,
    };

    return Wrapper;
};

Base.propTypes = {
    displayName: PropTypes.string,
};

Base.defaultProps = {
    displayName: '',
};

export default Base;
