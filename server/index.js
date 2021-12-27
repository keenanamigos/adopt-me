import express from "express";
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import fs from 'fs';
import AdoptionApp from '../src/app';

const PORT = process.env.PORT || 3000;
const html = fs.readFileSync("dist/index.html").toString();
const parts = html.split("not rendered");

const app = express();

app.use("/dist", express.static("dist"));
app.use((request, response) => {
    const staticContext = {};
    const reactMarkup = (
        <StaticRouter url={request.url} context={staticContext}>
            <AdoptionApp />
        </StaticRouter>
    )

    response.status(staticContext.statusCode || 200);
    response.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
