import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Button from '../Button';
import s from './SkipToContent.module.scss';

const SkipToContent = ({ skipTo = '#main-content' }) => {
    const { t } = useTranslation();
    return (
        <Button
            className={s.Root}
            modifier="Secondary"
            tabIndex="0"
            url={skipTo}
        >
            {t('skipToContent.buttonText')}
        </Button>
    );
};

SkipToContent.propTypes = {
    skipTo: PropTypes.string.isRequired,
};

export default SkipToContent;
