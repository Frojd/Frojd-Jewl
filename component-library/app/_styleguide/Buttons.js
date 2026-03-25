import React from 'react';
import Button from '../components/Button';

const Buttons = () => {
    return (
        <div className="styleguide">
            <div className="styleguide__wrap">
                <h1>Buttons</h1>

                <h2>Primary</h2>

                <pre>
                    {'<Button variant="Primary" type="submit">Primary</Button>'}
                </pre>
                <Button variant="Primary" type="submit">
                    Primary
                </Button>

                <pre>
                    {
                        '<Button variant="Primary link" title="Primary" url="/url" />'
                    }
                </pre>
                <Button variant="Primary" title="Primary" url="/url" />

                <pre>
                    {
                        '<Button variant="Primary" title="Primary Disabled" disabled={true} aria-disabled={true} />'
                    }
                </pre>
                <Button
                    variant="Primary"
                    title="Primary Disabled"
                    disabled={true}
                />

                <pre>
                    {
                        '<Button variant="Primary" title="Primary External" icon="External" />'
                    }
                </pre>
                <Button
                    variant="Primary"
                    title="Primary External"
                    icon="External"
                />

                <pre>
                    {
                        '<Button variant="Primary" title="Primary Arrow" icon="Arrow" />'
                    }
                </pre>
                <Button variant="Primary" title="Primary Arrow" icon="Arrow" />

                <pre>
                    {
                        '<Button variant="Primary" title="Primary External" icon="Download" />'
                    }
                </pre>
                <Button
                    variant="Primary"
                    title="Primary Download"
                    icon="Download"
                />

                <h2>Secondary</h2>

                <pre>
                    {
                        '<Button variant="Secondary" type="submit">Secondary</Button>'
                    }
                </pre>
                <Button variant="Secondary" type="submit">
                    Secondary
                </Button>

                <pre>
                    {
                        '<Button variant="Secondary link" title="Secondary" url="/url" />'
                    }
                </pre>
                <Button variant="Secondary" title="Secondary" url="/url" />

                <pre>
                    {
                        '<Button variant="Secondary" title="Secondary Disabled" disabled={true} aria-disabled={true} />'
                    }
                </pre>
                <Button
                    variant="Secondary"
                    title="Secondary Disabled"
                    disabled={true}
                />

                <pre>
                    {
                        '<Button variant="Secondary" title="Secondary External" icon="External" />'
                    }
                </pre>
                <Button
                    variant="Secondary"
                    title="Secondary External"
                    icon="External"
                />

                <pre>
                    {
                        '<Button variant="Secondary" title="Secondary Arrow" icon="Arrow" />'
                    }
                </pre>
                <Button
                    variant="Secondary"
                    title="Secondary Arrow"
                    icon="Arrow"
                />

                <pre>
                    {
                        '<Button variant="Secondary" title="Secondary External" icon="Download" />'
                    }
                </pre>
                <Button
                    variant="Secondary"
                    title="Secondary Download"
                    icon="Download"
                />

                <h2>Tertiary</h2>

                <pre>
                    {
                        '<Button variant="Tertiary" type="submit">Tertiary</Button>'
                    }
                </pre>
                <Button variant="Tertiary" type="submit">
                    Tertiary
                </Button>

                <pre>
                    {
                        '<Button variant="Tertiary link" title="Tertiary" url="/url" />'
                    }
                </pre>
                <Button variant="Tertiary" title="Tertiary" url="/url" />

                <pre>
                    {
                        '<Button variant="Tertiary" title="Tertiary Disabled" disabled={true} aria-disabled={true} />'
                    }
                </pre>
                <Button
                    variant="Tertiary"
                    title="Tertiary Disabled"
                    disabled={true}
                />

                <pre>
                    {
                        '<Button variant="Tertiary" title="Tertiary External" icon="External" />'
                    }
                </pre>
                <Button
                    variant="Tertiary"
                    title="Tertiary External"
                    icon="External"
                />

                <pre>
                    {
                        '<Button variant="Tertiary" title="Tertiary Arrow" icon="Arrow" />'
                    }
                </pre>
                <Button
                    variant="Tertiary"
                    title="Tertiary Arrow"
                    icon="Arrow"
                />

                <pre>
                    {
                        '<Button variant="Tertiary" title="Tertiary External" icon="Download" />'
                    }
                </pre>
                <Button
                    variant="Tertiary"
                    title="Tertiary Download"
                    icon="Download"
                />

                <h2>TextLink</h2>

                <pre>
                    {
                        '<Button variant="TextLink" title="TextLink" url="/url" />'
                    }
                </pre>
                <Button variant="TextLink" title="TextLink" url="/url" />

                <pre>
                    {
                        '<Button variant="TextLink" title="TextLink Disabled" url="/url" disabled={true} aria-disabled={true} />'
                    }
                </pre>
                <Button
                    variant="TextLink"
                    title="TextLink Disabled"
                    url="/url"
                    disabled={true}
                />

                <pre>
                    {
                        '<Button variant="TextLink" title="TextLink External" url="/url" icon="External" />'
                    }
                </pre>
                <Button
                    variant="TextLink"
                    title="TextLink External"
                    url="/url"
                    icon="External"
                />

                <pre>
                    {
                        '<Button variant="TextLink" title="TextLink Arrow" url="/url" icon="Arrow" />'
                    }
                </pre>
                <Button
                    variant="TextLink"
                    title="TextLink Arrow"
                    url="/url"
                    icon="Arrow"
                />

                <pre>
                    {
                        '<Button variant="TextLink" title="TextLink Download" url="/url" icon="Download" />'
                    }
                </pre>
                <Button
                    variant="TextLink"
                    title="TextLink Download"
                    url="/url"
                    icon="Download"
                />

                <h2>TextLinkWhite</h2>

                <div className="styleguide__bg styleguide__bg--purple">
                    <pre>
                        {
                            '<Button variant="TextLinkWhite" title="TextLinkWhite" url="/url" />'
                        }
                    </pre>
                    <Button
                        variant="TextLinkWhite"
                        title="TextLinkWhite"
                        url="/url"
                    />

                    <pre>
                        {
                            '<Button variant="TextLinkWhite" title="TextLinkWhite Disabled" url="/url" disabled={true} aria-disabled={true} />'
                        }
                    </pre>
                    <Button
                        variant="TextLinkWhite"
                        title="TextLinkWhite Disabled"
                        url="/url"
                        disabled={true}
                    />

                    <pre>
                        {
                            '<Button variant="TextLinkWhite" title="TextLinkWhite External" url="/url" icon="External" />'
                        }
                    </pre>
                    <Button
                        variant="TextLinkWhite"
                        title="TextLinkWhite External"
                        url="/url"
                        icon="External"
                    />

                    <pre>
                        {
                            '<Button variant="TextLinkWhite" title="TextLinkWhite Arrow" url="/url" icon="Arrow" />'
                        }
                    </pre>
                    <Button
                        variant="TextLinkWhite"
                        title="TextLinkWhite Arrow"
                        url="/url"
                        icon="Arrow"
                    />

                    <pre>
                        {
                            '<Button variant="TextLinkWhite" title="TextLinkWhite Download" url="/url" icon="Download" />'
                        }
                    </pre>
                    <Button
                        variant="TextLinkWhite"
                        title="TextLinkWhite Download"
                        url="/url"
                        icon="Download"
                    />
                </div>
            </div>
        </div>
    );
};

Buttons.propTypes = {};

export default Buttons;
