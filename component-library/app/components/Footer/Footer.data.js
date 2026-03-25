import follow from '../Follow/Follow.data';

const data = {
    follow: follow,
    columns: [
        {
            title: 'About us',
            items: [
                { id: '1', title: 'Link text', url: '#' },
                { id: '2', title: 'Link text &#038; more', url: '#' },
                { id: '3', title: 'External link', url: 'https://frojd.se' },
                { id: '4', title: 'Download PDF', url: 'test.pdf' },
            ],
        },
        {
            title: 'Address',
            richtext: {
                text: `
                    <p>Gatavägen 12<br />123 45 Stad</p>
                    <p><a href="mailto:info@frojd.se">info@frojd.se</a></p>
                    <p><a href="tel:0046701234567">070 - 123 45 67</a></p>
                `,
            },
        },
        {
            title: 'Get in touch',
            items: [
                {
                    id: '1',
                    title: 'info@frojd.se',
                    url: 'mailto:info@frojd.se',
                    icon: 'Email',
                },
                {
                    id: '2',
                    title: '+4676 123 45 67',
                    url: 'tel:0046761234567',
                    icon: 'Phone',
                },
            ],
        },
    ],
    service: {
        title: 'Policy links',
        items: [
            { id: '1', title: 'Cookie policy', url: '#' },
            { id: '2', title: 'Integrity policy', url: '#' },
            { id: '3', title: 'Accessability statement', url: '#' },
        ],
    },
};

export default data;
