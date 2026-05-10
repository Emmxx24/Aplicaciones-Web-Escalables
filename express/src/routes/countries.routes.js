const { Router } = require("express");
const { getCountries, getCountryById, createCountry, updateCountry, deleteCountry } = require("../controllers/countries.controller");
const router = Router();

router.get("/", getCountries);

router.get("/:id", getCountryById);

router.post("/", createCountry);

router.put("/", updateCountry);

router.delete("/:id", deleteCountry);

module.exports = router;