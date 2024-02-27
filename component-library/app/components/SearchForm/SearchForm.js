import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import s from './SearchForm.module.scss';

const SearchForm = ({
    id = '',
    action = '',
    modifier = '',
    keyword = '',
    triggerFocus = null,
    onSubmit = null,
}) => {
    const { t } = useTranslation();

    const inputRef = useRef(null);

    const [currentValue, setCurrentValue] = useState(keyword);

    useEffect(() => {
        if (inputRef && inputRef.current && triggerFocus) {
            setTimeout(() => {
                inputRef.current.focus();
            }, 1);
        }
    }, [triggerFocus]);

    useEffect(() => {
        setCurrentValue(keyword);
    }, [keyword]);

    const handleInput = (e) => {
        e.preventDefault();
        setCurrentValue(e.target.value);
    };

    const handleSubmit = (e) => {
        if (onSubmit) {
            e.preventDefault();
            onSubmit(currentValue);
        }
    };

    const classes = classNames(s.Root, { [s[`Root--${modifier}`]]: modifier });

    return (
        <div className={classes}>
            <form
                action={action}
                className={s.Form}
                role="search"
                onSubmit={(e) => handleSubmit(e)}
            >
                <label className="sr-only" htmlFor={id}>
                    {t('searchForm.label')}
                </label>
                <input
                    id={id}
                    className={s.Input}
                    type="text"
                    value={currentValue}
                    placeholder={t('searchForm.placeholder')}
                    ref={inputRef}
                    onChange={(e) => handleInput(e)}
                />
                <button
                    type="submit"
                    className={s.Submit}
                    aria-label={t('searchForm.submit')}
                />
            </form>
        </div>
    );
};

SearchForm.propTypes = {
    id: PropTypes.string.isRequired,
    action: PropTypes.string,
    modifier: PropTypes.string,
    value: PropTypes.string,
    triggerFocus: PropTypes.bool,
    onSubmit: PropTypes.func,
};

export default SearchForm;
