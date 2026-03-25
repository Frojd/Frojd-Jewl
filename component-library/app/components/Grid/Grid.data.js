import card from '../Card/Card.data';

const Card = ({ size }) => {
    const title = `-- Card ${size} --`;
    return (
        <div
            style={{
                background: 'lightgrey',
                flex: '1 0 auto',
            }}
        >
            {title}
        </div>
    );
};

const data = {
    Card: Card,
    items: [
        { ...card, size: '' },
        { ...card, size: '' },
        { ...card, size: '' },
        { ...card, size: '' },
        { ...card, size: '' },
        { ...card, size: '' },
        { ...card, size: '' },
        { ...card, size: '' },
        { ...card, size: '' },
        { ...card, size: '' },
        { ...card, size: '' },
        { ...card, size: '' },
    ],
};

export default data;

export const autoItemSizes = {
    Card: Card,
    items: [
        { ...card, size: 'Full' },
        { ...card, size: 'Full' },
        { ...card, size: 'Half' },
        { ...card, size: 'Half' },
        { ...card, size: 'Third' },
        { ...card, size: 'Third' },
        { ...card, size: 'Third' },
        { ...card, size: 'Fourth' },
        { ...card, size: 'Fourth' },
        { ...card, size: 'Fourth' },
        { ...card, size: 'Fourth' },
    ],
};
