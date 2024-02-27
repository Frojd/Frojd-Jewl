import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Base from 'Layouts/Base';
import SearchForm from 'Components/SearchForm';
import SearchResult from 'Components/SearchResult';
import s from './Search.module.scss';

const Search = ({
    title = '',
    keyword = '',
    searchForm = {},
    searchResult = {},
}) => {
    const [currentKeyword, setCurrentKeyword] = useState(keyword);

    return (
        <div className={s.Root}>
            <div className={s.Header}>
                <div className={s.Wrap}>
                    <h1
                        className={s.Title}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <div className={s.SearchForm}>
                        <SearchForm
                            {...searchForm}
                            keyword={currentKeyword}
                            id="search-form"
                            modifier="Search"
                            onSubmit={(s) => setCurrentKeyword(s)}
                        />
                    </div>
                </div>
            </div>
            <div className={s.Wrap}>
                <SearchResult
                    {...searchResult}
                    keyword={currentKeyword}
                />
            </div>
        </div>
    );
};

Search.propTypes = {
    title: PropTypes.string,
    keyword: PropTypes.string,
    searchForm: PropTypes.object,
    searchResult: PropTypes.object,
};

export default Base(Search);
