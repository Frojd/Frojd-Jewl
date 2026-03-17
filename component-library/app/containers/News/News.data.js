import base from '../../layouts/Base/Base.data';
import image from '../../components/Image/Image.data';
import richtext from '../../components/Richtext/Richtext.data';
import moduleGridCardNews from '../../components/ModuleGridCardNews/ModuleGridCardNews.data';

const data = {
    ...base,
    title: 'A headline for an exciting news article',
    image: image,
    content: richtext,
    modules: {
        items: [
            {
                id: '123abc',
                blockType: 'ModuleGridCardNews',
                blockData: moduleGridCardNews,
            },
        ],
    },
};

export default data;
