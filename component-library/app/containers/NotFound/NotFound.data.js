import base from '../../layouts/Base/Base.data';
import image from '../../components/Image/Image.data';
import button from '../../components/Button/Button.data';

const data = {
    ...base,
    breadcrumbs: null,
    title: 'Headline for 404',
    preamble:
        'You stumbled across a page that does not exist. You can navigate back to the start page below.',
    content: '',
    image: image,
    button: button,
};

export default data;
