import base from 'Layouts/Base/Base.data';
import searchForm from 'Components/SearchForm/SearchForm.data';
import searchResult from 'Components/SearchResult/SearchResult.data';
import filterButtons from 'Components/FilterButtons/FilterButtons.data';
import card, { noImage } from 'Components/Card/Card.data';

const data = {
    ...base,
    title: 'Sök på hemsidan',
    keyword: 'Testar sök',
    searchForm: searchForm,
    searchResult: searchResult,
};

export default data;
