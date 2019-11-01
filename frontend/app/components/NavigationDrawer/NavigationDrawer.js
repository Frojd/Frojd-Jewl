import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { VelocityComponent, velocityHelpers } from 'velocity-react';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

import s from './NavigationDrawer.scss';

const NavigationDrawer = ({ richtext, open, id }) => {

    const [expanded, setExpanded] = useState(open);

    const clickHandler = () => setExpanded(!expanded);

    const classes = classNames(
        s.Root,
        { [s.RootExpanded] : expanded }
    );
    const buttonId = `${id}-button`;

    const animation = {
        slideIn: velocityHelpers.registerEffect('slideIn', {
            defaultDuration: 500,
            calls: [
                [{ right: '0px' }],
            ],
        }),
        slideOut: velocityHelpers.registerEffect('slideOut', {
            defaultDuration: 500,
            calls: [
                [{ right: '-300px' }],
            ],
        })
    };

    return (
        <div className={s.Root}>
            <button
                className={s.Button}
                onClick={clickHandler}
                aria-expanded={expanded}
                aria-controls={id}
                id={buttonId}
            >
                <span className={s.srOnly}>
                    {expanded ? 'Close menu' : 'Open menu'}
                </span>
            </button>
            <VelocityComponent
                className={s.Navigation}
                animation={expanded ? animation.slideIn : animation.slideOut}
            >
                <div
                    className={s.Content}
                    aria-hidden={!expanded}
                    aria-labelledby={buttonId}
                    id={id}
                    dangerouslySetInnerHTML={{ __html: richtext }}
                />
            </VelocityComponent>
        </div>
    )
};

NavigationDrawer.propTypes = {
    richtext: PropTypes.string.isRequired,
    open: PropTypes.bool,
    id: PropTypes.string,
};

NavigationDrawer.defaultProps = {
    richtext: '',
    open: false,
    id: 'navigation-drawer',
};

export default NavigationDrawer;
