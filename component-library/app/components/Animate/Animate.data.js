import React from 'react';

const content = `
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et
    netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
    sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em>
    Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
    pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>,
    ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
    ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="https://frojd.se">Donec
    non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
    <h3>Lorem ipsum dolor sit amet</h3>
    <ul>\n<li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</li>\n<li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</li>\n<li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</li>\n</ul>
    <ol>\n<li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</li>\n<li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</li>\n<li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</li>\n</ol>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et
    netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
    sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em>
    Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
    pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>,
    ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
    ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="https://frojd.se">Donec
    non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
    <h4>Lorem ipsum dolor sit amet</h4>
    <blockquote\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n<p><cite>Citation text</cite></p></blockquote>
    <div class="factbox">
    <h2>Heading h2</h2>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    <ul>
    <li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</li>
    <li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</li>
    <li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</li>
    </ul>
    </div>
`;

const Component = () => {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

const data = {};

export const component = Component;

export default data;
