import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './Animate.module.scss';
import { motion } from 'framer-motion';

const Animate = ({
    type = '',
    ...restProps
}) => {
    const types = {
        fade: AnimateInOut,
        expand: AnimateUpDown,
        slide: AnimateLeftRight,
    };
    const Component = types[type];
    if(!Component) {
        return null;
    }
    return (
        <Component {...restProps} />
    );
};

Animate.propTypes = {
    type: PropTypes.string.isRequired,
};

const AnimateInOut = ({
    children = null,
    defaultVisible = false,
    isVisible = false,
    className = '',
    duration = 500,
    delay = 0,
    displayVisible = 'block',
}) => {
    const classes = classNames(
        s.Root,
        s['Root--InOut'],
        { [s['Root--Visible']]: isVisible },
        { [s['Root--Hidden']]: !isVisible },
        className,
    );

    return (
        <motion.div
            layout
            className={classes}
            transition={{ duration: duration / 1000, delay: delay / 1000 }}
            initial={{
                opacity: defaultVisible ? 1 : 0,
                display: defaultVisible ? displayVisible : 'none',
            }}
            animate={{
                opacity: isVisible ? 1 : 0,
                display: displayVisible,
                transitionEnd: {
                    display: isVisible ? displayVisible : 'none',
                },
            }}
        >
            {children}
        </motion.div>
    );
};

AnimateInOut.propTypes = {
    children: PropTypes.node.isRequired,
    defaultVisible: PropTypes.bool,
    isVisible: PropTypes.bool,
    className: PropTypes.string,
    duration: PropTypes.number,
    delay: PropTypes.number,
    displayVisible: PropTypes.string,
};

const AnimateUpDown = ({
    children = null,
    defaultVisible = false,
    isVisible = false,
    className = '',
    duration = 500,
    delay = 0,
    displayVisible = 'block',
}) => {
    const classes = classNames(
        s.Root,
        s['Root--UpDown'],
        { [s['Root--Visible']]: isVisible },
        { [s['Root--Hidden']]: !isVisible },
        className,
    );

    return (
        <motion.div
            layout
            className={classes}
            transition={{ duration: duration / 1000, delay: delay / 1000 }}
            initial={{
                height: defaultVisible ? 'auto' : 0,
                display: defaultVisible ? displayVisible : 'none',
            }}
            animate={{
                height: isVisible ? 'auto' : 0,
                display: displayVisible,
                transitionEnd: {
                    display: isVisible ? displayVisible : 'none',
                },
            }}
        >
            {children}
        </motion.div>
    );
};

AnimateUpDown.propTypes = {
    children: PropTypes.node.isRequired,
    defaultVisible: PropTypes.bool,
    isVisible: PropTypes.bool,
    className: PropTypes.string,
    duration: PropTypes.number,
    delay: PropTypes.number,
    displayVisible: PropTypes.string,
};

const AnimateLeftRight = ({
    children = null,
    defaultVisible = false,
    isVisible = false,
    className = '',
    duration = 500,
    delay = 0,
    displayVisible = 'block',
}) => {
    const classes = classNames(
        s.Root,
        s['Root--LeftRight'],
        { [s['Root--Visible']]: isVisible },
        { [s['Root--Hidden']]: !isVisible },
        className,
    );

    return (
        <motion.div
            layout
            className={classes}
            transition={{ duration: duration / 1000, delay: delay / 1000 }}
            initial={{
                x: defaultVisible ? 0 : '100%',
                display: defaultVisible ? displayVisible : 'none',
            }}
            animate={{
                x: isVisible ? 0 : '100%',
                display: displayVisible,
                transitionEnd: {
                    display: isVisible ? displayVisible : 'none',
                },
            }}
        >
            {children}
        </motion.div>
    );
};

AnimateLeftRight.propTypes = {
    children: PropTypes.node.isRequired,
    defaultVisible: PropTypes.bool,
    isVisible: PropTypes.bool,
    className: PropTypes.string,
    duration: PropTypes.number,
    delay: PropTypes.number,
    displayVisible: PropTypes.string,
};

export default Animate;

export {
    AnimateInOut,
    AnimateUpDown,
    AnimateLeftRight,
};
