import React from 'react';
import Button from 'Components/Button';

const Buttons = () => {

    return (
        <div className="styleguide">
            <div className="styleguide__wrap">
                <h1>Buttons</h1>

                <h2>Primary</h2>

                <pre>{'<Button modifier="Primary" title="Primary Button" />'}</pre>
                <Button modifier="Primary" title="Primary Button" />

                <pre>{'<Button modifier="Primary" title="Primary Disabled" disabled={true} />'}</pre>
                <Button modifier="Primary" title="Primary Button Disabled" disabled={true} />

                <pre>{'<Button modifier="Primary" title="Primary External" icon="External" />'}</pre>
                <Button modifier="Primary" title="Primary Button External" icon="External" />

                <pre>{'<Button modifier="Primary" title="Primary Arrow" icon="Arrow" />'}</pre>
                <Button modifier="Primary" title="Primary Button Arrow" icon="Arrow" />

                <pre>{'<Button modifier="Primary" title="Primary External" icon="Download" />'}</pre>
                <Button modifier="Primary" title="Primary Button Download" icon="Download" />

                <h2>Secondary</h2>

                <pre>{'<Button modifier="Secondary" title="Secondary Button" />'}</pre>
                <Button modifier="Secondary" title="Secondary Button" />

                <pre>{'<Button modifier="Secondary" title="Secondary Disabled" disabled={true} />'}</pre>
                <Button modifier="Secondary" title="Secondary Button Disabled" disabled={true} />

                <pre>{'<Button modifier="Secondary" title="Secondary External" icon="External" />'}</pre>
                <Button modifier="Secondary" title="Secondary Button External" icon="External" />

                <pre>{'<Button modifier="Secondary" title="Secondary Arrow" icon="Arrow" />'}</pre>
                <Button modifier="Secondary" title="Secondary Button Arrow" icon="Arrow" />

                <pre>{'<Button modifier="Secondary" title="Secondary External" icon="Download" />'}</pre>
                <Button modifier="Secondary" title="Secondary Button Download" icon="Download" />

                <h2>Tertiary</h2>

                <pre>{'<Button modifier="Tertiary" title="Tertiary Button" />'}</pre>
                <Button modifier="Tertiary" title="Tertiary Button" />

                <pre>{'<Button modifier="Tertiary" title="Tertiary Disabled" disabled={true} />'}</pre>
                <Button modifier="Tertiary" title="Tertiary Button Disabled" disabled={true} />

                <pre>{'<Button modifier="Tertiary" title="Tertiary External" icon="External" />'}</pre>
                <Button modifier="Tertiary" title="Tertiary Button External" icon="External" />

                <pre>{'<Button modifier="Tertiary" title="Tertiary Arrow" icon="Arrow" />'}</pre>
                <Button modifier="Tertiary" title="Tertiary Button Arrow" icon="Arrow" />

                <pre>{'<Button modifier="Tertiary" title="Tertiary External" icon="Download" />'}</pre>
                <Button modifier="Tertiary" title="Tertiary Button Download" icon="Download" />

                <h2>TextLink</h2>

                <pre>{'<Button modifier="TextLink" title="TextLink Button" />'}</pre>
                <Button modifier="TextLink" title="TextLink Button" />

                <pre>{'<Button modifier="TextLink" title="TextLink Disabled" disabled={true} />'}</pre>
                <Button modifier="TextLink" title="TextLink Button Disabled" disabled={true} />

                <pre>{'<Button modifier="TextLink" title="TextLink External" icon="External" />'}</pre>
                <Button modifier="TextLink" title="TextLink Button External" icon="External" />

                <pre>{'<Button modifier="TextLink" title="TextLink Arrow" icon="Arrow" />'}</pre>
                <Button modifier="TextLink" title="TextLink Button Arrow" icon="Arrow" />

                <pre>{'<Button modifier="TextLink" title="TextLink External" icon="Download" />'}</pre>
                <Button modifier="TextLink" title="TextLink Button Download" icon="Download" />

                <h2>TextLinkWhite</h2>

                <div className="styleguide__bg styleguide__bg--purple">

                    <pre>{'<Button modifier="TextLinkWhite" title="TextLinkWhite Button" />'}</pre>
                    <Button modifier="TextLinkWhite" title="TextLinkWhite Button" />

                    <pre>{'<Button modifier="TextLinkWhite" title="TextLinkWhite Disabled" disabled={true} />'}</pre>
                    <Button modifier="TextLinkWhite" title="TextLinkWhite Button Disabled" disabled={true} />

                    <pre>{'<Button modifier="TextLinkWhite" title="TextLinkWhite External" icon="External" />'}</pre>
                    <Button modifier="TextLinkWhite" title="TextLinkWhite Button External" icon="External" />

                    <pre>{'<Button modifier="TextLinkWhite" title="TextLinkWhite Arrow" icon="Arrow" />'}</pre>
                    <Button modifier="TextLinkWhite" title="TextLinkWhite Button Arrow" icon="Arrow" />

                    <pre>{'<Button modifier="TextLinkWhite" title="TextLinkWhite External" icon="Download" />'}</pre>
                    <Button modifier="TextLinkWhite" title="TextLinkWhite Button Download" icon="Download" />

                </div>

                {/*<pre>@include button(primary full);</pre>
                <button className="button__primary button__primary--full">Primary full</button>

                <pre>@include button(primary exclude-icon);</pre>
                <button className="button__primary button__primary--exclude-arrow">Primary exclude arrow</button>

                <pre>@include button(primary);</pre>
                <button className="button__primary" disabled>Primary disabled</button>

                <pre>@include button(primary small exclude-icon);</pre>
                <button className="button__primary button__primary--small">Primary small</button>

                <h2>Secondary</h2>

                <pre>@include button(secondary);</pre>
                <button className="button__secondary">Secondary</button>

                <pre>@include button(secondary full);</pre>
                <button className="button__secondary button__secondary--full">Secondary full</button>

                <pre>@include button(secondary small);</pre>
                <button className="button__secondary button__secondary--small">Secondary small</button>

                <h2>Tertiary</h2>

                <pre>@include button(tertiary);</pre>
                <button className="button__tertiary">Tertiary</button>

                <pre>@include button(tertiary external);</pre>
                <button className="button__tertiary button__tertiary--external">Tertiary external</button>

                <pre>@include button(tertiary download);</pre>
                <button className="button__tertiary button__tertiary--download">Tertiary download</button>

                <h2>Quaternary</h2>

                <pre>@include button(quaternary);</pre>
                <button className="button__quaternary">Quaternary</button>

                <pre>@include button(quaternary full);</pre>
                <button className="button__quaternary button__quaternary--full">Quaternary full</button>

                <h2>Filter</h2>

                <pre>@include button(filter);</pre>
                <button className="button__filter">Filter</button>

                <pre>@include button(filter active);</pre>
                <button className="button__filter button__filter--active">Filter active</button>

                <h2>Link</h2>

                <pre>@include button(link);</pre>
                <button className="button__link">Link</button>*/}
            </div>
        </div>
    );
};

Buttons.propTypes = {
};

Buttons.defaultProps = {
};

export default Buttons;
