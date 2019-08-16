import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react';

import RawHtml from 'Components/RawHtml';

import './Accordian.scss';

const Accordian = ({title, richtext, open}) => {

    const [expanded, setExpanded] = useState(open);

    const classes = classNames(
        'Accordian',
        { 'Accordian--Expanded' : expanded }
    );

    const clickHandler = () => setExpanded(!expanded);

    return (
        <div className={classes}>
            <div className="Accordian__Header" onClick={clickHandler}>
                {title}
            </div>
            <VelocityComponent
                animation={expanded ? 'slideDown' : 'slideUp'}
            >
                <div className="Accordian__Content">
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
};

Accordian.defaultProps = {
    title: '',
    richtext: '',
    open: false,
};

export default Accordian;
