import base from '../../layouts/Base/Base.data';
import image from '../../components/Image/Image.data';
import richtext from '../../components/Richtext/Richtext.data';
import submenu from '../../components/Submenu/Submenu.data';
import contentButtons from '../../components/ContentButtons/ContentButtons.data';
import contentEmphasis from '../../components/ContentEmphasis/ContentEmphasis.data';
import contentCta, {
    noImage as contentCtaNoImage,
} from '../../components/ContentCTA/ContentCTA.data';

const data = {
    ...base,
    title: 'A headline for an exciting news article',
    image: image,
    content: richtext,
    submenu: submenu,
    contentButtons: contentButtons,
    contentEmphasis: contentEmphasis,
    contentCta: [contentCta, { ...contentCtaNoImage }, { ...contentCta }],
};

export default data;
