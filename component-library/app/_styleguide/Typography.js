import React from 'react';

const Typography = ({}) => {
    return (
        <div className="styleguide">
            <div className="styleguide__wrap">
                <h1>Typography</h1>

                <h2>Titles</h2>

                <pre>@include textstyle(page-title);</pre>
                <div className="textstyle textstyle--page-title">
                    Page title
                </div>

                <pre>@include textstyle(module-title);</pre>
                <div className="textstyle textstyle--module-title">
                    Module title
                </div>

                <pre>@include textstyle(card-title);</pre>
                <div className="textstyle textstyle--card-title">
                    Card title
                </div>

                <pre>@include textstyle(accordion-title);</pre>
                <div className="textstyle textstyle--accordion-title">
                    Accordion title
                </div>

                <pre>@include textstyle(footer-title);</pre>
                <div className="textstyle textstyle--footer-title">
                    Footer title
                </div>

                <h2>Richtext headings</h2>

                <pre>@include textstyle(richtext-h2);</pre>
                <div className="textstyle textstyle--richtext-h2">
                    Heading h2
                </div>

                <pre>@include textstyle(richtext-h3);</pre>
                <div className="textstyle textstyle--richtext-h3">
                    Heading h3
                </div>

                <pre>@include textstyle(richtext-h4);</pre>
                <div className="textstyle textstyle--richtext-h4">
                    Heading h4
                </div>

                <pre>@include textstyle(richtext-h5);</pre>
                <div className="textstyle textstyle--richtext-h5">
                    Heading h5
                </div>

                <pre>@include textstyle(richtext-h6);</pre>
                <div className="textstyle textstyle--richtext-h6">
                    Heading h6
                </div>

                <h2>Body</h2>

                <pre>@include textstyle(body);</pre>
                <div className="textstyle textstyle--body">Body</div>

                <pre>@include textstyle(preamble);</pre>
                <div className="textstyle textstyle--preamble">Preamble</div>

                <pre>@include textstyle(paragraph);</pre>
                <div className="textstyle textstyle--paragraph">Paragraph</div>

                <pre>@include textstyle(quote);</pre>
                <div className="textstyle textstyle--quote">Quote</div>

                <pre>@include textstyle(cite);</pre>
                <div className="textstyle textstyle--cite">Cite</div>

                <pre>@include textstyle(caption);</pre>
                <div className="textstyle textstyle--caption">Caption</div>

                <pre>@include textstyle(button);</pre>
                <div className="textstyle textstyle--button">Button</div>

                <pre>@include textstyle(textlink);</pre>
                <div className="textstyle textstyle--textlink">Textlink</div>

                <pre>@include textstyle(mainmenu);</pre>
                <div className="textstyle textstyle--mainmenu">Mainmenu</div>

                <pre>@include textstyle(servicemenu);</pre>
                <div className="textstyle textstyle--servicemenu">
                    Servicemenu
                </div>

                <pre>@include textstyle(initSubmenu);</pre>
                <div className="textstyle textstyle--submenu">Submenu</div>

                <pre>@include textstyle(breadcrumb);</pre>
                <div className="textstyle textstyle--breadcrumb">
                    Breadcrumb
                </div>

                <pre>@include textstyle(label);</pre>
                <div className="textstyle textstyle--label">Label</div>

                <pre>@include textstyle(label-card);</pre>
                <div className="textstyle textstyle--label-card">
                    Label card
                </div>

                <pre>@include textstyle(date);</pre>
                <div className="textstyle textstyle--date">Date</div>
            </div>
        </div>
    );
};

Typography.propTypes = {};


export default Typography;
