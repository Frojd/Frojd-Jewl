import React from 'react';
import ArticlePage from './ArticlePage';
import data from './ArticlePage.data';

export default { title: 'Containers/ArticlePage' };

export const ArticlePageDefault = () => (
    <ArticlePage {...data} />
);
