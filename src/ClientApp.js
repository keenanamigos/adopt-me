import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AdoptionApp from './app';

// anything that should only happen in the browser should be placed in this file (analytics for example)

hydrate(
    <BrowserRouter>
        <AdoptionApp />
    </BrowserRouter>,
    document.getElementById("root")
);

