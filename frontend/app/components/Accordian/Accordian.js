import React from 'react';
import PropTypes from 'prop-types';

import RawHtml from 'Components/RawHtml';

import './Accordian.scss';

const Accordian = ({title, richtext, open}) => (
    <div className="Accordian">
        <div className="Accordian__Header">
            {title}
        </div>
        <div className="Accordian__Content">
            <RawHtml html={richtext} />
        </div>
    </div>
);

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
