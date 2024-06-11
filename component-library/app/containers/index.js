import dynamic from 'next/dynamic';

const Containers = {
    __Container__: dynamic(() => import('./__Container__')),
    Landing: dynamic(() => import('./Landing')),
    NotFound: dynamic(() => import('./NotFound')),
    Page: dynamic(() => import('./Page')),
    Search: dynamic(() => import('./Search')),
};

export default Containers;
