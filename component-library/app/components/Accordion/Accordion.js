import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import classNames from 'classnames';
import { VelocityComponent } from 'velocity-react';
import Richtext from '../Richtext';
import s from './Accordion.module.scss';

const Accordion = ({title, richtext, open, id}) => {
    const {t} = useTranslation();

    const [isExpanded, setIsExpanded] = useState(open);

    const clickHandler = () => setIsExpanded(!isExpanded);

    const headerId = `${id}-header`;

    const buttonText = isExpanded ? t('accordion.minimize') : t('accordion.expand');

    const classes = classNames(
        s.Root,
        { [s['Root--Expanded']] : isExpanded }
    );

    return (
        <div className={classes}>
            <div
                className={s.Header}
                onClick={clickHandler}
                aria-expanded={isExpanded}
                aria-controls={id}
                id={headerId}
            >
                <h3 className={s.Title}>{title}</h3>
                <button className={s.Button}>
                    <span className={s.Icon} />
                    <span className="sr-only">
                        {buttonText}
                    </span>
                </button>
            </div>
            <VelocityComponent
                animation={isExpanded ? 'slideDown' : 'slideUp'}
            >
                <div
                    className={s.RichText}
                    aria-hidden={!isExpanded}
                    aria-labelledby={headerId}
                    id={id}
                >
                    <Richtext html={richtext} />
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
    id: 'accordion',
};

export default Accordion;
