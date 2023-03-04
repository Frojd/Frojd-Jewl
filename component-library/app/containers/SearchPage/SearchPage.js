import React from 'react';
// import PropTypes from 'prop-types';
import Base from 'Layouts/Base';
import s from './SearchPage.module.scss';
// import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';

const SearchPage = () => {
    return (
        <div className={s.Root}>
            <div className={s.Wrap}>
                <div className={s.Content}>
                    <h2 className={s.Title}> Search Result list </h2>
                    <ul>
                        <li>
                            <Card title={'Result list item Card'}></Card>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

SearchPage.propTypes = {};

SearchPage.defaultProps = {};

export default Base(SearchPage);
