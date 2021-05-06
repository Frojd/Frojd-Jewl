import React from 'react';

const Typography = () => {
    return (
        <div className="styleguide">
            <div className="styleguide__wrap">
                <h1>Typography</h1>

                <h2>Headings</h2>

                <pre>@include textstyle(h1);</pre>
                <div className="textstyle textstyle--h1">Heading h1</div>

                <pre>@include textstyle(h2);</pre>
                <div className="textstyle textstyle--h2">Heading h2</div>

                <h2>Body</h2>

                <pre>@include textstyle(body);</pre>
                <div className="textstyle textstyle--body">Body</div>

                <pre>@include textstyle(preamble);</pre>
                <div className="textstyle textstyle--preamble">Preamble</div>
            </div>
        </div>
    );
};

Typography.propTypes = {
};

Typography.defaultProps = {
};

export default Typography;
