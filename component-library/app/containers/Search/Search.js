import React from 'react';
import PropTypes from 'prop-types';
import Base from 'Layouts/Base';
import FilterButtons from 'Components/FilterButtons';
import SearchBar from 'Components/SearchBar';
import Card from 'Components/Card';
import s from './Search.module.scss';

const Search = ({
    title = '',
    resultlist = [],
    filterButtons = {},
    searchResultLabel = '',
    searchterm = '',
    searchBar = {},
}) => {
    return (
        <div className={s.Root}>
            <div className={s.Header}>
                <div className={s.Wrap}>
                    <h1
                        className={s.Title}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <div className={s.Searchbar}>
                        <SearchBar
                            {...searchBar}
                            id="search-input"
                            modifier="Search"
                        />
                    </div>
                </div>
            </div>
            <div className={s.Wrap}>
                <div className={s.Result}>
                    <FilterButtons {...filterButtons} />

                    <h2 className={s.Info}>
                        {searchResultLabel}
                        {searchterm}
                    </h2>

                    <ul className={s.List}>
                        {resultlist.map((item, index) => (
                            <li className={s.Item} key={index}>
                                <Card {...item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

Search.propTypes = {
    title: PropTypes.string,
    filterButtons: PropTypes.object,
    searchterm: PropTypes.string,
    searchResultLabel: PropTypes.string,
    searchBar: PropTypes.object,
    resultlist: PropTypes.array,
};

export default Base(Search);
