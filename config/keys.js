if (process.env.NODE_ENV === "production") {
    // We are in production | return de prod set of keys
    module.exports = require("./prod.js");
} else {
    //  we are in development |  return de dev keys
    module.exports = require("./dev.js");
}
