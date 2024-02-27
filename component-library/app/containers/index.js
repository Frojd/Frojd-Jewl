import dynamic from 'next/dynamic';

const Containers = {
    Landing: dynamic(() => import('./Landing')),
    NotFound: dynamic(() => import('./NotFound')),
    Page: dynamic(() => import('./Page')),
    Search: dynamic(() => import('./Search')),
};

export default Containers;
