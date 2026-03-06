import base from '../../layouts/Base/Base.data';
import searchForm from '../../components/SearchForm/SearchForm.data';
import searchResult from '../../components/SearchResult/SearchResult.data';

const data = {
    ...base,
    breadcrumbs: null,
    title: 'Sök på hemsidan',
    keyword: 'Testar sök',
    searchForm: searchForm,
    searchResult: searchResult,
};

export default data;
