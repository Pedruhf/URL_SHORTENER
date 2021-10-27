const { Router } = require("express");
const { URL } = require("../models/urls");
const { generateCode } = require("../utils/generateCode");

const routes = Router();

routes.get("/", async (req, res) => {
  const URLS = await URL.find();
  res.send(URLS);
});

routes.get("/:code", async (req, res) => {
  const { code } = req.params;

  const result = await URL.findOne({ code });
  if (!result) {
    return res.status(400).send({ error: `Error ao tentar buscar a URL com o código ${code}`});
  }

  const { url } = result;

  res.send({ url });
});

routes.post("/shorten-url", async (req, res) => {
  const { url } = req.body;
  const code = generateCode();

  try {
    const alreadyExists = await URL.findOne({ url });
    if (alreadyExists) {
      return res.send(alreadyExists);
    }

    const newURL = await URL.create({ url, code });
    
    return res.send(newURL);
  } catch {
    return res.status(400).send({ error: "Erro ao tentar cadastrar nova URL" });
  }
});

module.exports = { routes };