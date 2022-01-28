export default {
    src: 'dummy/test-original.jpg',
    alt: 'Test',
    width: 1600,
    height: 900,
    caption: 'Caption',
    focal: {
        x: '50%',
        y: '50%',
    },
    srcset: [
        'dummy/test-512.jpg 512w',
        'dummy/test-800.jpg 800w',
        'dummy/test-1600.jpg 1600w',
    ],
};

export const landscape = {
    src: 'https://via.placeholder.com/1600x900',
    alt: 'Test',
    width: 1600,
    height: 900,
    caption: 'Caption',
    focal: {
        x: '50%',
        y: '50%',
    },
    srcset: [
        'https://via.placeholder.com/512x288 512w',
        'https://via.placeholder.com/800x450 800w',
        'https://via.placeholder.com/1600x900 1600w',
    ],
};

export const portrait = {
    src: 'https://via.placeholder.com/1600x2400',
    alt: 'Test',
    width: 1600,
    height: 2400,
    caption: 'Caption',
    focal: {
        x: '50%',
        y: '50%',
    },
    srcset: [
        'https://via.placeholder.com/512x768 512w',
        'https://via.placeholder.com/800x1200 800w',
        'https://via.placeholder.com/1600x2400 1600w',
    ],
};
