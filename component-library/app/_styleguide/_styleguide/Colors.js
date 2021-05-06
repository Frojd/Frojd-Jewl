import React from 'react';

const Colors = () => {
    return (
        <div className="styleguide">
            <div className="styleguide__wrap">
                <h1>Colors</h1>

                <h2>Primary</h2>

                <pre>$purple</pre>
                <div className="color__box color__box--purple">Purple</div>

                <h2>Grey</h2>

                <pre>$grey</pre>
                <div className="color__box color__box--grey">Grey</div>

                <pre>$grey-60</pre>
                <div className="color__box color__box--grey-60">Grey 60</div>

                <pre>$grey-10</pre>
                <div className="color__box color__box--grey-10">Grey 10</div>
            </div>
        </div>
    );
};

Colors.propTypes = {
};

Colors.defaultProps = {
};

export default Colors;
