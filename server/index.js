import express from "express";
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import fs from 'fs';
import AdoptionApp from '../src/app';

const PORT = process.env.PORT || 3000;
const html = fs.readFileSync("dist/index.html").toString();
const parts = html.split("not rendered");

const app = express();

app.use("/dist", express.static("dist"));
app.use((request, response) => {
    response.write(parts[0]);
    const staticContext = {};
    const reactMarkup = (
        <StaticRouter url={request.url} context={staticContext}>
            <AdoptionApp />
        </StaticRouter>
    )
    
    const nodeStream = renderToNodeStream(reactMarkup);
    nodeStream.pipe(response, { end: false });
    nodeStream.on("end", () => {
        response.status(staticContext.statusCode || 200);
        response.write(parts[1]);
        response.end();
    });

});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
