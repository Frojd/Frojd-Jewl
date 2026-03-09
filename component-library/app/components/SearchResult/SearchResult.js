"use client";

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import PillGroup from '../PillGroup';
import Grid from '../Grid';
import Card from '../Card';
import Pagination from '../Pagination';
import s from './SearchResult.module.scss';

const SearchResult = ({
    keyword = '',
    pillGroup = {},
    items = [],
    total = 0,
    page = 1,
    itemsPerPage = 12,
    fetchUrl = null,
}) => {
    const { t } = useTranslation();

    const [currentPills, setCurrentPills] = useState(null);
    const [currentItems, setCurrentItems] = useState(items);
    const [currentTotal, setCurrentTotal] = useState(total);
    const [currentPage, setCurrentPage] = useState(page);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const totalPages = Math.ceil(currentTotal / itemsPerPage);

    // Example: Fetch data when search parameters change
    useEffect(() => {
        if (!fetchUrl) {
            // No fetch URL provided, just log for demo
            console.log('fetch new items');
            return;
        }

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                // Build query parameters
                const params = new URLSearchParams({
                    keyword,
                    page: currentPage,
                    limit: itemsPerPage,
                });

                // Add filter pills if selected
                if (currentPills && currentPills.length > 0) {
                    params.append('filters', currentPills.join(','));
                }

                const response = await fetch(`${fetchUrl}?${params.toString()}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                // Update states after successful fetch
                setCurrentItems(data.items || []);
                setCurrentTotal(data.total || 0);
            } catch (err) {
                setError(err.message);
                console.error('Failed to fetch search results:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [keyword, currentPills, currentPage, fetchUrl, itemsPerPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className={s.Root}>
            <PillGroup
                {...pillGroup}
                showAll={true}
                selected={currentPills}
                changeHandler={(val) => {
                    setCurrentPills(val);
                    setCurrentPage(1); // Reset to first page on filter change
                }}
            />

            {error && (
                <div className={s.Error}>
                    <p>{t('searchResult.error')}</p>
                </div>
            )}

            <h2 className={s.Title}>
                {t('searchResult.title', {
                    total: currentTotal,
                    keyword: keyword,
                })}
            </h2>

            <div className={s.Grid}>
                {isLoading ? (
                    <div className={s.Loading}>{t('searchResult.loading')}</div>
                ) : (
                    <Grid items={currentItems} columns={3} Card={Card} />
                )}
            </div>

            {totalPages > 1 && (
                <div className={s.Pagination}>
                    <Pagination
                        current={currentPage}
                        total={totalPages}
                        onChange={handlePageChange}
                    />
                </div>
            )}
        </div>
    );
};

SearchResult.propTypes = {
    keyword: PropTypes.string,
    pillGroup: PropTypes.object,
    items: PropTypes.array,
    total: PropTypes.number,
    page: PropTypes.number,
    itemsPerPage: PropTypes.number,
    fetchUrl: PropTypes.string,
};

export default SearchResult;
