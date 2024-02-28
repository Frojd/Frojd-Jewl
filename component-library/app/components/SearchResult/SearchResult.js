import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import FilterButtons from 'Components/FilterButtons';
import Grid from 'Components/Grid';
import Card from 'Components/Card';
import Pagination from 'Components/Pagination';
import s from './SearchResult.module.scss';

const SearchResult = ({
    keyword = '',
    filterButtons = {},
    items = [],
    total = 0,
    page = 1,
    itemsPerPage = 12,
}) => {
    const { t } = useTranslation();

    const [currentItems, setCurrentItems] = useState(items);
    const [currentTotal, setCurrentTotal] = useState(total);
    const [currentPage, setCurrentPage] = useState(page);

    const totalPages = Math.ceil(currentTotal / itemsPerPage);
    console.log('search', totalPages, currentTotal, currentPage);

    useEffect(() => {
        // Fetch new items and change states
    }, [keyword]);

    return (
        <div className={s.Root}>
            <FilterButtons {...filterButtons} />

            <h2 className={s.Title}>{t('searchResult.title', {
                total: currentTotal,
                keyword: keyword,
            })}</h2>

            <div className={s.Grid}>
                <Grid
                    items={currentItems}
                    columns={3}
                    Card={Card}
                />
            </div>

            {totalPages > 1 && (
                <div className={s.Pagination}>
                    <Pagination
                        current={currentPage}
                        total={totalPages}
                    />
                </div>
            )}
        </div>
    );
};

SearchResult.propTypes = {
};

export default SearchResult;
