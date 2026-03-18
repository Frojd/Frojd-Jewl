import base from '../../layouts/Base/Base.data';
import image from '../../components/Image/Image.data';
import richtext from '../../components/Richtext/Richtext.data';
import moduleGridCardNews from '../../components/ModuleGridCardNews/ModuleGridCardNews.data';
import contentButtons from '../../components/ContentButtons/ContentButtons.data';
import contentEmphasis from '../../components/ContentEmphasis/ContentEmphasis.data';
import contentCta from '../../components/ContentCTA/ContentCTA.data';

const data = {
    ...base,
    title: 'A headline for an exciting news article',
    label: 'Label',
    dateString: '2022-02-03',
    dateFormatted: '3 februari 2022',
    image: image,
    content: richtext,
    contentButtons: contentButtons,
    contentEmphasis: contentEmphasis,
    contentCta: contentCta,
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
