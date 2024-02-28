import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from 'Components/Grid';
import Card from 'Components/Card';
import Pagination from 'Components/Pagination';
import s from './ArchiveResult.module.scss';

const ArchiveResult = ({
    items = [],
    total = 0,
    page = 1,
    itemsPerPage = 12,
}) => {
    const [currentItems, setCurrentItems] = useState(items);
    const [currentTotal, setCurrentTotal] = useState(total);
    const [currentPage, setCurrentPage] = useState(page);

    const totalPages = Math.ceil(currentTotal / itemsPerPage);

    return (
        <div className={s.Root}>
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

ArchiveResult.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    page: PropTypes.number,
    itemsPerPage: PropTypes.number,
};

export default ArchiveResult;
