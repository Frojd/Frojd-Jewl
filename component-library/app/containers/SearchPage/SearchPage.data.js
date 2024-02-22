import base from 'Layouts/Base/Base.data';
import searchBar from 'Components/SearchBar/SearchBar.data';
import filterButtons from 'Components/FilterButtons/FilterButtons.data';
import card, { noImage } from 'Components/Card/Card.data';

const data = {
    ...base,
    title: 'Sök på hemsidan',
    searchterm: 'Sökterm',
    searchResultLabel: 'Visa sökresultat för: ',
    searchBar: searchBar,
    filterButtons: filterButtons,
    resultlist: [card, card, noImage, noImage, card, noImage, card],
};

export default data;
