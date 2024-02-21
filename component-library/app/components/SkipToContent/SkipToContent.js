import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useTranslation} from 'react-i18next';
import Button from 'Components/Button'
import s from './SkipToContent.module.scss';

const SkipToContent = ({
    skipTo = '#main-content'
}) => {
    const {t} = useTranslation();
    return (
        <Button
            className={s.Root}
            modifier="Secondary"
            tabIndex="0"
            href={skipTo}
        >{t('skipToContent.buttonText')}</Button>
    );
};

SkipToContent.propTypes = {
    skipTo: PropTypes.string.isRequired,
};

export default SkipToContent;
