import base from 'Layouts/Base/Base.data';
import searchBar from 'Components/SearchBar/SearchBar.data';

export default {
    ...base, 
    title: 'Sök på hemsidan', 
    searchterm: 'Sökterm', 
    searchResultLabel: 'Visa sökresultat för: ',
    searchBar: searchBar,
    filters: [
        {
            label: 'Label 1',
            value: '', 
        },
        {
            label: 'Label 2',
            value: '', 
        },
        {
            label: 'Label 3',
            value: '', 
        },
    ],
    resultlist: [
        {
            title: 'Card title',
            url: 'www.google.se',
            label: 'Label',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam adipiscing. Duis vel nibh at velit scelerisque suscipit.',
            // TODO: figure out how to add image: image,
            dateString: '2022-02-03',
            dateFormatted: '3 februari 2022',
        },
        {
            title: 'Här testar vi en lite längre rubrik för ett nyhetskort',
            url: 'www.google.se',
            label: 'Label',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam adipiscing. Duis vel nibh at velit scelerisque suscipit.',
            // image: image,
            dateString: '2022-02-03',
            dateFormatted: '3 februari 2022',
        },
        {
            title: 'Card title',
            url: 'www.google.se',
            label: 'Label',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam adipiscing. Duis vel nibh at velit scelerisque suscipit.',
            dateString: '2022-02-03',
            dateFormatted: '3 februari 2022',
        },
        {
            title: 'Card title',
            url: 'www.google.se',
            label: 'Label',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam adipiscing. Duis vel nibh at velit scelerisque suscipit.',
            dateString: '2022-02-03',
            dateFormatted: '3 februari 2022',
        },
        {
            title: 'Här testar vi en lite längre rubrik för ett nyhetskort',
            url: 'www.google.se',
            label: 'Label',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam adipiscing. Duis vel nibh at velit scelerisque suscipit.',
            dateString: '2022-02-03',
            dateFormatted: '3 februari 2022',
        },
    ]
};