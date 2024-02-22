Used for showing a bar which can be toogled to close and save as session in local storage

## Props

-   **Title\***
-   **Id\*** - Unique id for the specific popup
-   **SessionName\*** - Unique name for the session to be stored
-   **Richtext** - The content of the accordian which can be expanded. Can be a string or HTML-code, uses the Richtext component so it can render html code in the same way
-   **ButtonText** - Text for dismiss button
-

## Requirements

### Components

-   **Richtext** - Used in content of accordian since it is richtext

### Packages

-   **local-storage** - For saving session when closing
-   **framer-motion** - This example uses framer-motion to transition the expandable area with an animation
