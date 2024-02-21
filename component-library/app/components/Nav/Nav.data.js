export default {
    id: 'horizontal',
    label: 'Horizontal menu',
    items: [
        {id: '1', title: 'Länktext', url: '#'},
        {id: '2', title: 'Länktext &#038; Länktext', url: '#', isActive: true},
        {id: '3', title: 'Extern länk', url: 'https://frojd.se'},
    ],
};

export const withChildren = {
    id: 'vertical',
    label: 'Vertical hierarchy menu',
    currentId: '231',
    items: [
        {id: '1', title: 'Länktext', url: '#'},
        {id: '2', title: 'Länktext &#038; Länktext', url: '#', isParentActive: true, children: [
            {id: '21', title: 'Länktext', url: '#'},
            {id: '22', title: 'Länktext &#038; Länktext', url: '#'},
            {id: '23', title: 'Extern länk', url: 'https://frojd.se', isParentActive: true, children: [
                {id: '231', title: 'Länktext', url: '#', isParentActive: true, children: [
                    {id: '2311', title: 'Länktext', url: '#'},
                    {id: '2312', title: 'Länktext &#038; Länktext', url: '#', isActive: true},
                    {id: '2313', title: 'Extern länk', url: 'https://frojd.se'},
                ]},
                {id: '232', title: 'Länktext &#038; Länktext', url: '#'},
                {id: '233', title: 'Extern länk', url: 'https://frojd.se'},
            ]},
        ]},
        {id: '3', title: 'Extern länk', url: 'https://frojd.se', children: [
            {id: '31', title: 'Länktext', url: '#'},
            {id: '32', title: 'Länktext &#038; Länktext', url: '#'},
            {id: '33', title: 'Extern länk', url: 'https://frojd.se'},
        ]},
    ],
    orientation: 'Vertical',
};