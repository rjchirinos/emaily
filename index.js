const express = require("express");

const app = express();

app.get("/", () => {
    res.send({ hi: "there" });
});

const PORT = precess.env.PORT || 3000;
app.listen(PORT);
