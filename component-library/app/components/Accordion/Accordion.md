Used for showing a bar which can be toogled to expand or expand, can be used for e.g. FAQ

[Accordion source code on Github](https://github.com/Frojd/Frojd-Jewl/tree/develop/component-library/app/components/Accordion)

## Props

-   **Title\*** - The heading of the accordian which will always be shown
-   **Richtext\*** - The content of the accordian which can be expanded. Can be a string or HTML-code, uses the Richtext component so it can render html code in the same way
-   **Open** - A boolean where the default state of accordian should be expanded from start or not
-   **Id** - Add id attribute to accordian for accessibility, should be unique

## Requirements

### Components

-   **Richtext** - Used in content of accordian since it is richtext

### Packages

-   **framer-motion** - This example uses framer-motion to transition the expandable area with an animation
