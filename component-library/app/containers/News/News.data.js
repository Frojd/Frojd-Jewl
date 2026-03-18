import base from '../../layouts/Base/Base.data';
import image from '../../components/Image/Image.data';
import richtext from '../../components/Richtext/Richtext.data';

const data = {
    ...base,
    title: 'A headline for an exciting news article',
    label: 'Label',
    dateString: '2022-02-03',
    dateFormatted: '3 februari 2022',
    image: image,
    content: richtext,
};

export default data;
