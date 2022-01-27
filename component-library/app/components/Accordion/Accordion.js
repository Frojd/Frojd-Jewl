import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { VelocityComponent } from 'velocity-react';
import RawHtml from '../RawHtml';
import s from './Accordion.module.scss';

const Accordion = ({title, richtext, open, id}) => {

    const [expanded, setExpanded] = useState(open);

    const clickHandler = () => setExpanded(!expanded);

    const classes = classNames(
        s.Root,
        { [s['Root--Expanded']] : expanded }
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
                <button className={s.Button}>
                    <span className="sr-only">
                        {expanded ? 'Minimize answer' : 'Expand answer'}
                    </span>
                </button>
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
};

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    richtext: PropTypes.string.isRequired,
    open: PropTypes.bool,
    id: PropTypes.string,
};

Accordion.defaultProps = {
    title: '',
    richtext: '',
    open: false,
    id: 'accordian',
};

export default Accordion;
