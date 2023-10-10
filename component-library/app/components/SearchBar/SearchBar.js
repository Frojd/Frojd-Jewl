import React, { useState, useEffect, useRef } from 'react';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import s from './SearchBar.module.scss';


const SearchBar = ({placeholder}) => {
    const {t} = useTranslation();

    const [searchInputValue, setSearchInputValue] = useState('');
    const [isFocused, setFocus] = useState(false);

    const searchInputField = useRef(null);

    useEffect(() => {
        if (!isFocused) return;
        window.addEventListener('click', handleClick);
        window.addEventListener('keypress', handleKeyPress);

        return () => {
            window.removeEventListener('click', handleClick);
            window.removeEventListener('keypress', handleClick);
        }; 

    }, [isFocused]);

    const handleClick = (e) => {
        e.preventDefault(); 
        console.log('Submit pressed', e); 
        if (
            searchInputField.current &&
            !searchInputField.current.contains(e.target)
        ) {
            if (searchInputField.current.value === '') {
                setFocus(false);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.keyCode == 13) {
            console.log('Enter key pressed!', e);
        }
    };

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
        <div>
            <form className={s.Root} role="search">
                <label className="sr-only">{t('searchBar.label')}</label>
                <input
                    className={s.Input}
                    type="text"
                    value={searchInputValue}
                    placeholder={placeholder}
                    ref={searchInputField}
                    onChange={handleInput}
                    onBlur={handleOnBlur}
                    onClick={() => setFocus(true)}
                />
                <button
                    type="submit"
                    className={s.Submit}
                    onClick={handleClick}>{t('searchBar.submit')}</button>
            </form>
        </div>
    );
};

SearchBar.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    submitUrl: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string, 
};


SearchBar.defaultProps = {
    title: '',
    value: '',
    placeholder: '', 
};

export default SearchBar;
