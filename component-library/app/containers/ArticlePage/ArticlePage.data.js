import base from 'Layouts/Base/Base.data';
import hero from 'Components/Hero/Hero.data';
import rawHtml from 'Components/Richtext/Richtext.data';
import submenu from 'Components/Submenu/Submenu.data';

export default {
    ...base,
    hero: hero,
    content: rawHtml,
    submenu: submenu,
};
