import { configure } from '@storybook/react';

configure(
    require.context('../app/components', true, /\.stories\.tsx$/),
    module
);
