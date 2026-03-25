import image from '../Image/Image.data';

const data = {
    title: 'Card longer&shy;title',
    url: 'www.google.se',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam adipiscing. Duis vel nibh at velit scelerisque suscipit.',
    image: image,
    size: 'Third',
};

export default data;

export const noImage = {
    ...data,
    image: null,
};

export const fullSize = {
    ...data,
    size: 'Full',
};
