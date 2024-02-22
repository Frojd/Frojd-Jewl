import image from 'Components/Image/Image.data';

const data = {
    title: 'Card longer&shy;title',
    url: 'www.google.se',
    label: 'Label',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam adipiscing. Duis vel nibh at velit scelerisque suscipit.',
    image: image,
    dateString: '2022-02-03',
    dateFormatted: '3 februari 2022',
};

export default data;

export const noImage = {
    ...data,
    image: null,
};
