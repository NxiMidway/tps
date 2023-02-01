const express = require("express");
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: false }));
app.set("views", process.cwd() + "\\src\\views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("home", {
    title: "Gestionnaire de watchlist",
    message: "Hello Watchlist!",
  });
});

app.get("/form", (req, res) => {
  res.render("form", {
    title: "Exemple de formulaire",
  });
});

app.post("/resForm", (req, res) => {  
  res.render("resForm", {
    title: "Resultat du formulaire",
    message: `Bienvenue ${req.body.nom}`,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
