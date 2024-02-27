import dynamic from 'next/dynamic';

export default {
    Landing: dynamic(() => import('./Landing')),
    NotFound: dynamic(() => import('./NotFound')),
    Page: dynamic(() => import('./Page')),
    Search: dynamic(() => import('./Search')),
};
