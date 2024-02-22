import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import s from './Pagination.module.scss';

const Pagination = ({
    current,
    total,
    nrOfMiddle,
    nrOfBeginEnd,
    setPageUrl,
    onClick,
}) => {
    const { t } = useTranslation();

    const beforeAfterCurrent = (nrOfMiddle - 1) / 2;
    const range = [...Array(total).keys()].map((i) => {
        const p = i + 1;
        const isFirstOrLast = p <= nrOfBeginEnd || p > total - nrOfBeginEnd;
        const isBeforeOrAfter =
            p >= current - beforeAfterCurrent &&
            p <= current + beforeAfterCurrent;
        if (isFirstOrLast || isBeforeOrAfter) {
            return p;
        } else {
            return null;
        }
    });
    const items = range.filter((p, i) => {
        return p !== null || range[i - 1] !== p;
    });

    const onClickHandler = (e, p) => {
        if (onClick) {
            e.preventDefault();
            onClick(p, e);
        }
    };

    const setUrl = (p) => {
        if (setPageUrl) {
            return setPageUrl(p);
        } else {
            return `?p=${p}`;
        }
    };

    const prevPage = current - 1 <= 1 ? null : current - 1;
    const prevUrl = prevPage !== null ? setUrl(prevPage) : null;
    const nextPage = current + 1 >= total ? null : current + 1;
    const nextUrl = nextPage !== null ? setUrl(nextPage) : null;

    return (
        <nav className={s.Root} aria-label={t('pagination.label')}>
            <ul className={s.List}>
                <li className={s.Item}>
                    <a
                        className={s.Previous}
                        href={prevUrl}
                        rel="prev"
                        disabled={prevPage === null}
                        aria-label={t('pagination.previous')}
                        onClick={(e) => onClickHandler(e, prevPage)}
                    />
                </li>

                {items.map((p, index) => (
                    <li className={s.Item} key={index}>
                        <Link
                            p={p}
                            isCurrent={current === p}
                            setUrl={setUrl}
                            onClickHandler={onClickHandler}
                        />
                    </li>
                ))}

                <li className={s.Item}>
                    <a
                        className={s.Next}
                        href={nextUrl}
                        rel="next"
                        disabled={nextPage === null}
                        aria-label={t('pagination.next')}
                        onClick={(e) => onClickHandler(e, nextPage)}
                    />
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    nrOfMiddle: PropTypes.number.isRequired,
    nrOfBeginEnd: PropTypes.number.isRequired,
    setPageUrl: PropTypes.func,
    onClick: PropTypes.func,
};

Pagination.defaultProps = {
    current: 1,
    total: 1,
    nrOfMiddle: 3,
    nrOfBeginEnd: 1,
    setPageUrl: null,
    onClick: null,
};

const Link = ({ p, isCurrent, setUrl, onClickHandler }) => {
    const { t } = useTranslation();

    const isEllipse = p === null;

    if (isEllipse) {
        return <span className={s.Ellipse}>...</span>;
    }

    const classes = classNames(s.Link, {
        [s['Root__Link--Current']]: isCurrent,
    });

    return (
        <a
            className={classes}
            href={setUrl(p)}
            aria-label={t('pagination.goTo', { p: p })}
            onClick={(e) => onClickHandler(e, p)}
        >
            {p}
        </a>
    );
};

Link.propTypes = {
    p: PropTypes.number.isRequired,
    isCurrent: PropTypes.bool,
    setUrl: PropTypes.func,
    onClickHandler: PropTypes.func,
};

Link.defaultProps = {
    p: 1,
    isCurrent: false,
    setPageUrl: null,
    onClick: null,
};

export default Pagination;
