import base from '../../layouts/Base/Base.data';
import searchForm from '../../components/SearchForm/SearchForm.data';
import searchResult from '../../components/SearchResult/SearchResult.data';
import pillGroup from '../../components/PillGroup/PillGroup.data';
import card, { noImage } from '../../components/Card/Card.data';

const data = {
    ...base,
    breadcrumbs: null,
    title: 'Sök på hemsidan',
    keyword: 'Testar sök',
    searchForm: searchForm,
    searchResult: searchResult,
};

export default data;
