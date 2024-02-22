import React from 'react';
import PropTypes from 'prop-types';
import Base from 'Layouts/Base';
import FilterButtons from 'Components/FilterButtons';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';
import s from './SearchPage.module.scss';

const SearchPage = ({
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
                            modifier="SearchPage"
                        />
                    </div>
                </div>
            </div>
            <div className={s.Wrap}>
                <div className={s.Result}>
                    <FilterButtons {...filterButtons} />

                    <p className={s.Info}>
                        {searchResultLabel}
                        {searchterm}
                    </p>

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

SearchPage.propTypes = {
    title: PropTypes.string,
    filterButtons: PropTypes.array,
    searchterm: PropTypes.string,
    searchResultLabel: PropTypes.string,
    searchBar: PropTypes.object,
    resultlist: PropTypes.array,
};

export default Base(SearchPage);
