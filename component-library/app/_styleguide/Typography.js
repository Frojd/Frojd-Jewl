import React from 'react';

const Typography = () => {
    return (
        <div className="styleguide">
            <div className="styleguide__wrap">
                <h1>Typography</h1>

                <h2>Headings</h2>

                <pre>@include textstyle(title);</pre>
                <div className="textstyle textstyle--title">Title</div>

                <pre>@include textstyle(module-title);</pre>
                <div className="textstyle textstyle--module-title">Module title</div>

                <pre>@include textstyle(card-title);</pre>
                <div className="textstyle textstyle--card-title">Card title</div>

                <h2>HTML headings</h2>

                <pre>@include textstyle(html-h2);</pre>
                <div className="textstyle textstyle--html-h2">Heading h2</div>

                <pre>@include textstyle(html-h3);</pre>
                <div className="textstyle textstyle--html-h3">Heading h3</div>

                <pre>@include textstyle(html-h4);</pre>
                <div className="textstyle textstyle--html-h4">Heading h4</div>

                <pre>@include textstyle(html-h5);</pre>
                <div className="textstyle textstyle--html-h5">Heading h5</div>

                <pre>@include textstyle(html-h6);</pre>
                <div className="textstyle textstyle--html-h6">Heading h6</div>

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
