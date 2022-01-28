export default {
    id: 'horizontal',
    label: 'Horizontal menu',
    items: [
        {id: 'horizontal-1', title: 'Länktext', url: '#'},
        {id: 'horizontal-2', title: 'Länktext &#038; Länktext', url: '#', isActive: true},
        {id: 'horizontal-3', title: 'Extern länk', url: 'https://test.se'},
    ],
    orientation: 'Horizontal',
};

export const withChildren = {
    id: 'vertical',
    label: 'Vertical hierarchy menu',
    items: [
        {id: 'vertical-1', title: 'Länktext', url: '#'},
        {id: 'vertical-2', title: 'Länktext &#038; Länktext', url: '#', isActive: true, children: [
            {id: 'vertical-21', title: 'Länktext', url: '#'},
            {id: 'vertical-22', title: 'Länktext &#038; Länktext', url: '#', isActive: true},
            {id: 'vertical-23', title: 'Extern länk', url: 'https://test.se', children: [
                {id: 'vertical-231', title: 'Länktext', url: '#', children: [
                    {id: 'vertical-2311', title: 'Länktext', url: '#'},
                    {id: 'vertical-2312', title: 'Länktext &#038; Länktext', url: '#', isActive: true},
                    {id: 'vertical-2313', title: 'Extern länk', url: 'https://test.se'},
                ]},
                {id: 'vertical-232', title: 'Länktext &#038; Länktext', url: '#', isActive: true},
                {id: 'vertical-233', title: 'Extern länk', url: 'https://test.se'},
            ]},
        ]},
        {id: 'vertical-3', title: 'Extern länk', url: 'https://test.se', children: [
            {id: 'vertical-31', title: 'Länktext', url: '#'},
            {id: 'vertical-32', title: 'Länktext &#038; Länktext', url: '#', isActive: true},
            {id: 'vertical-33', title: 'Extern länk', url: 'https://test.se'},
        ]},
    ],
    orientation: 'Vertical',
};