import image from '../Image/Image.data';

const data = {
    title: 'ContentCTA title',
    url: 'www.google.se',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam adipiscing. Duis vel nibh at velit scelerisque suscipit.',
    image: image,
};

export default data;

export const noImage = {
    ...data,
    image: null,
};
