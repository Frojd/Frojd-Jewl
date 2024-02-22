const data = {
    follow: {
        title: 'Follow us',
        items: [
            { type: 'Facebook', url: '#' },
            { type: 'Instagram', url: '#' },
            { type: 'LinkedIn', url: '#' },
        ],
    },
    primary: {
        title: 'About us',
        items: [
            { id: '1', title: 'Link text', url: '#' },
            { id: '2', title: 'Link text &#038; more', url: '#' },
            { id: '3', title: 'External link', url: 'https://frojd.se' },
            { id: '4', title: 'Download PDF', url: 'test.pdf' },
        ],
    },
    secondary: {
        title: 'Quick links',
        items: [
            { id: '1', title: 'Link text', url: '#' },
            { id: '2', title: 'Link text &#038; more', url: '#' },
        ],
    },
    tertiary: {
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
            {
                id: '3',
                title: 'Torsgatan 26, 113 21 Stockholm',
                url: 'https://maps.google.com',
                icon: 'Address',
            },
        ],
    },
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
