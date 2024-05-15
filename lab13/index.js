const express = require('express');
const bookRouter = require('./route/bookRouter');

const app = express();
app.use(express.json());
app.use("/books", bookRouter);

app.use((req, resp, next) => {
    resp.status(404).json(new ResponseDto(null, false, "Oops, the resource you've requested was not found"));
});
app.use((error, req, resp, next) => {
    resp.status(500).json(new ResponseDto(null, false, "Oops there was an error in processing your request. Please try again later"));
})

const port = process.env.PORT || 3300;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})