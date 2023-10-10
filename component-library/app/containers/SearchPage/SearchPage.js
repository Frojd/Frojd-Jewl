import React from 'react';
import PropTypes from 'prop-types';
import Base from 'Layouts/Base';
import FilterButtons from 'Components/FilterButtons';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';
import s from './SearchPage.module.scss';

const SearchPage = ({
    title,
    resultlist,
    filters,
    searchResultLabel,
    searchterm,
    placeholder,
}) => {
    return (
        <div className={s.Root}>
            <div className={s.Hero}>
                <h1 className={s.Title}>{title}</h1>
                <div className={s.Searchbar}>
                    <SearchBar placeholder={placeholder} />
                </div>
            </div>
            <div className={s.Wrap}>
                <div className={s.Content}>
                    {/* TODO: Fix so that filterbuttons can be displayed with correct values */}
                    <FilterButtons filters={filters} />
                    <p className={s.ListInfo}>
                        {searchResultLabel}
                        {searchterm}
                    </p>
                    <ul className={s.ResultList}>
                        {resultlist.map((result, i) => (
                            <li key={i}>
                                <Card
                                    title={result.title}
                                    url={result.url}
                                    label={result.label}
                                    text={result.text}
                                    dateString={result.dateString}
                                    dateFormatted={result.dateFormatted}></Card>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

SearchPage.propTypes = {
    hero: PropTypes.object,
    title: PropTypes.string,
    content: PropTypes.object,
    filters: PropTypes.array,
    searchterm: PropTypes.string,
    searchResultLabel: PropTypes.string,
    placeholder: PropTypes.string,
    resultlist: PropTypes.array,
};

SearchPage.defaultProps = {
    hero: {},
    content: {},
    searchterm: '',
    searchResultLabel: '',
    placeholder: '',
    resultlist: [],
    filters: [],
    title: '',
};

export default Base(SearchPage);
