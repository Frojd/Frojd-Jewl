import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react';

import RawHtml from 'Components/RawHtml';

import './Accordian.scss';

const Accordian = ({title, richtext, open, id}) => {

    const [expanded, setExpanded] = useState(open);

    const classes = classNames(
        'Accordian',
        { 'Accordian--Expanded' : expanded }
    );

    const clickHandler = () => setExpanded(!expanded);

    const headerId = `${id}-header`;

    return (
        <div className={classes}>
            <div
                className="Accordian__Header"
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
                    className="Accordian__Content"
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
