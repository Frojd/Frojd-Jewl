import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react';

import RawHtml from 'Components/RawHtml';

import s from './Accordian.scss';

const Accordian = ({title, richtext, open, id}) => {

    const [expanded, setExpanded] = useState(open);

    const clickHandler = () => setExpanded(!expanded);

    const classes = classNames(
        s.Root,
        { [s.RootExpanded] : expanded }
    );
    const headerId = `${id}-header`;

    return (
        <div className={classes}>
            <div
                className={s.Header}
                onClick={clickHandler}
                aria-expanded={expanded}
                aria-controls={id}
                id={headerId}
            >
                {title}
            </div>
            <VelocityComponent
                animation={expanded ? 'slideDown' : 'slideUp'}
            >
                <div
                    className={s.RichText}
                    aria-hidden={!expanded}
                    aria-labelledby={headerId}
                    id={id}
                >
                    <RawHtml html={richtext} />
                </div>
            </VelocityComponent>
        </div>
    );
}

Accordian.propTypes = {
    title: PropTypes.string.isRequired,
    richtext: PropTypes.string.isRequired,
    open: PropTypes.bool,
    id: PropTypes.string,
};

Accordian.defaultProps = {
    title: '',
    richtext: '',
    open: false,
    id: 'accordian',
};

export default Accordian;
