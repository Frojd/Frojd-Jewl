const data = {
    id: 'horizontal',
    label: 'Horizontal menu',
    items: [
        { id: '1', title: 'Link text', url: '#' },
        { id: '2', title: 'Link text &#038; more', url: '#', isActive: true },
        { id: '3', title: 'External link', url: 'https://frojd.se' },
        { id: '3', title: 'Download PDF', url: 'test.pdf' },
    ],
};

export default data;

export const withChildren = {
    id: 'vertical',
    label: 'Vertical hierarchy menu',
    currentId: '231',
    items: [
        { id: '1', title: 'Link text', url: '#' },
        {
            id: '2',
            title: 'Link text &#038; more',
            url: '#',
            isParentActive: true,
            children: [
                { id: '21', title: 'Link text', url: '#' },
                { id: '22', title: 'Link text &#038; more', url: '#' },
                {
                    id: '23',
                    title: 'External link',
                    url: 'https://frojd.se',
                    isParentActive: true,
                    children: [
                        {
                            id: '231',
                            title: 'Link text',
                            url: '#',
                            isParentActive: true,
                            children: [
                                { id: '2311', title: 'Link text', url: '#' },
                                {
                                    id: '2312',
                                    title: 'Link text &#038; more',
                                    url: '#',
                                    isActive: true,
                                },
                                {
                                    id: '2313',
                                    title: 'External link',
                                    url: 'https://frojd.se',
                                },
                            ],
                        },
                        { id: '232', title: 'Link text &#038; more', url: '#' },
                        {
                            id: '233',
                            title: 'External link',
                            url: 'https://frojd.se',
                        },
                    ],
                },
                { id: '24', title: 'Download PDF', url: 'test.pdf' },
            ],
        },
        {
            id: '3',
            title: 'External link',
            url: 'https://frojd.se',
            children: [
                { id: '31', title: 'Link text', url: '#' },
                { id: '32', title: 'Link text &#038; more', url: '#' },
                { id: '33', title: 'External link', url: 'https://frojd.se' },
            ],
        },
    ],
    orientation: 'Vertical',
};
