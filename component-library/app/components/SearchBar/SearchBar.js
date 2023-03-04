import React, { useState, useEffect, useRef } from 'react';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import s from './SearchBar.module.scss';

//TODO: activate search on Enter and on Click 

const SearchBar = ({ title }) => {
    const {t} = useTranslation();

    const [searchInputValue, setSearchInputValue] = useState('');
    const [isFocused, setFocus] = useState(false);

    const searchInputField = useRef(null);

    useEffect(() => {
        if (!isFocused) return;

        function handleClick(e) {
            if (
                searchInputField.current &&
                !searchInputField.current.contains(e.target)
            ) {
                if (searchInputField.current.value === '') {
                    setFocus(false);
                }
            }
        }

        window.addEventListener('click', handleClick);

        return () => window.removeEventListener('click', handleClick);

    }, [isFocused]);

    const handleInput = (e) => {
        e.preventDefault();
        setSearchInputValue(e.target.value);
    };

    const handleOnBlur = () => {
        if (searchInputValue === '') {
            setFocus(false);
        }
    };

    return (
        <div role="search">
            <form className={s.Root}>
                <label className="sr-only">{t('searchBar.Label')}</label>
                <input
                    className={s.Input}
                    type="text"
                    value={searchInputValue}
                    placeholder={isFocused ? '' : title}
                    ref={searchInputField}
                    onChange={handleInput}
                    onBlur={handleOnBlur}
                    onClick={() => setFocus(true)}
                />
                <button
                    type="submit"
                    className={s.Submit}
                    onClick={handleInput}>{t('searchBar.Submit')}</button>
            </form>
        </div>
    );
};

SearchBar.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

SearchBar.defaultProps = {
    title: 'Search',
    value: '',
};

export default SearchBar;
