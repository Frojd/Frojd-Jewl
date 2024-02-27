import base from 'Layouts/Base/Base.data';
import searchForm from 'Components/SearchForm/SearchForm.data';
import filterButtons from 'Components/FilterButtons/FilterButtons.data';
import card, { noImage } from 'Components/Card/Card.data';

const data = {
    ...base,
    title: 'Sök på hemsidan',
    searchterm: 'Sökterm',
    searchResultLabel: 'Visa sökresultat för: ',
    searchForm: searchForm,
    filterButtons: filterButtons,
    resultlist: [card, card, noImage, noImage, card, noImage, card],
};

export default data;
