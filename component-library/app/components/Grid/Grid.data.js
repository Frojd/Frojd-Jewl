import card from 'Components/Card/Card.data';

const Card = () => {
    return (
        <div style={{
            background: 'lightgrey',
            flex: '1 0 auto',
        }}>-- Card --</div>
    );
};

const data = {
    Card: Card,
    columns: 4,
    items: [
        card,
        card,
        card,
        card,
        card,
        card,
        card,
        card,
        card,
        card,
        card,
        card,
    ],
};

export default data;
