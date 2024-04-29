import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Fieldset from '../Fieldset';
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
}) => {
    const { t } = useTranslation();

    const [currentPills, setCurrentPills] = useState(null);
    const [currentItems, setCurrentItems] = useState(items);
    const [currentTotal, setCurrentTotal] = useState(total);
    const [currentPage, setCurrentPage] = useState(page);

    const totalPages = Math.ceil(currentTotal / itemsPerPage);

    useEffect(() => {
        // Fetch new items and change states
        console.log('fetch new items');
    }, [keyword, currentPills, currentPage]);

    return (
        <div className={s.Root}>
            <PillGroup
                {...pillGroup}
                showAll={true}
                selected={currentPills}
                changeHandler={(val) => setCurrentPills(val)}
            />

            <h2 className={s.Title}>
                {t('searchResult.title', {
                    total: currentTotal,
                    keyword: keyword,
                })}
            </h2>

            <div className={s.Grid}>
                <Grid items={currentItems} columns={3} Card={Card} />
            </div>

            {totalPages > 1 && (
                <div className={s.Pagination}>
                    <Pagination current={currentPage} total={totalPages} />
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
};

export default SearchResult;
