# Accordian

Used for showing a bar which can be toogled to expand, can be used for e.g. FAQ

## Props
- Title - The heading of the accordian which will always be shown
- Richtext - The content of the accordian which can be expanded. Can be a string or HTML-code, uses the RawHtml component so it can render html code in the same way
- Open - A boolean where the default property if it is expanded from start or not

## Requirements
- velocity-react - This example uses velocity react to transition the expandable area with an animation
