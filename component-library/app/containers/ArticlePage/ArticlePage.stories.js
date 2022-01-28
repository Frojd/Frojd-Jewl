import React from 'react';
import ArticlePage from './ArticlePage';
import data from './ArticlePage.data';

export default {
    component: ArticlePage,
};

export const ArticlePageDefault = () => (
    <ArticlePage {...data} />
);
