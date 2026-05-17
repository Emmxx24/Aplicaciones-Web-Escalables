const { Router } = require("express");
const { getCountries, getCountryById, createCountry, updateCountry, deleteCountry } = require("../controllers/countries.controller");
const { verifyJWT } = require("../middlewares/verifyJWT");
const { verifyAdminRole } = require("../middlewares/verifyAdminRole");
const router = Router();

router.get("/", [verifyJWT], /*verifyAdminRole],*/ getCountries);

router.get("/:id", getCountryById);

router.post("/", createCountry);

router.put("/", updateCountry);

router.delete("/:id", deleteCountry);

module.exports = router;