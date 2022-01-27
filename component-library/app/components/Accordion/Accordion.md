Used for showing a bar which can be toogled to expand or expand, can be used for e.g. FAQ

## Props
- __Title*__ - The heading of the accordian which will always be shown
- __Richtext*__ - The content of the accordian which can be expanded. Can be a string or HTML-code, uses the RawHtml component so it can render html code in the same way
- **Open** - A boolean where the default state of accordian should be expanded from start or not
- **Id** - Add id attribute to accordian for accessibility, should be unique

## Requirements
### Components
- **RawHTML** - Used in content of accordian since it is richtext

### Packages
- **velocity-react** - This example uses velocity react to transition the expandable area with an animation
