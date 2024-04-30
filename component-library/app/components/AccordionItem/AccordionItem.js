import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { AnimateUpDown } from '../Animate';
import Richtext from '../Richtext';
import s from './AccordionItem.module.scss';

const AccordionItem = ({
    title = '',
    text = '',
    open = false,
    id = 'accordion-item',
}) => {
    const { t } = useTranslation();

    const [isExpanded, setIsExpanded] = useState(open);

    const clickHandler = () => setIsExpanded(!isExpanded);

    const headerId = `${id}-header`;

    const buttonText = isExpanded
        ? t('accordionItem.minimize')
        : t('accordionItem.expand');

    const classes = classNames(s.Root, { [s['Root--Expanded']]: isExpanded });

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
                <button
                    className={s.Button}
                    type="button"
                    aria-label={buttonText}
                >
                    <span className={s.Icon} />
                </button>
            </div>
            <AnimateUpDown isVisible={isExpanded}>
                <div
                    className={s.RichText}
                    aria-hidden={!isExpanded}
                    aria-labelledby={headerId}
                    id={id}
                >
                    <Richtext text={text} />
                </div>
            </AnimateUpDown>
        </div>
    );
};

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    open: PropTypes.bool,
    id: PropTypes.string,
};

export default AccordionItem;
