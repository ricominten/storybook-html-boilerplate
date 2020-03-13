import { storiesOf } from "@storybook/html";
import { useEffect } from "@storybook/client-api";

import './button.scss';
import button from './button.html';

storiesOf("Button", module).add("Standard", () => {
    useEffect(() => {
        import('./button.js');
    }, []);
    return button;
});