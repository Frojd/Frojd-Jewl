import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './__Layout__.module.scss';

const __Layout__ = (Container) => {
    const { displayName } = Container;

    const Wrapper = ({ containerName = '', ...restProps }) => {
        const name = containerName ? containerName : displayName;
        const classes = classNames(s.Root, [s[`Root--${name}`]]);
        return (
            <div className={classes}>
                <div className={s.Document} role="document">
                    <main className={s.Main} id="mainContent">
                        <Container {...restProps} />
                    </main>
                </div>
            </div>
        );
    };

    Wrapper.propTypes = {
        containerName: PropTypes.string,
    };

    return Wrapper;
};

__Layout__.propTypes = {
    displayName: PropTypes.string,
};

export default __Layout__;
