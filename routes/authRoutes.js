const passport = require("passport");

module.exports = app => {
    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: ["profile", "email", "name"]
        })
    );

    app.get("/auth/google/callback", passport.authenticate("google"));

    app.get("/api/current_user", (req, res) => {
        res.send(req.user || "There's no user signed in");
    });

    app.get("/api/logout", (req, res) => {
        req.logout();
        res.send(req.user || "There's no user signed in");
    });

    app.get("/xobiespato", (req, res) => {
        res.send(req.user.get("name") + " es patooooo");
    });
};
