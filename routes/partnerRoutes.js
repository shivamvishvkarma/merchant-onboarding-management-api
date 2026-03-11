const express = require("express");
const router = express.Router();
const controller = require("../controllers/partnerController");

router.post("/", controller.createPartner);
router.get("/", controller.getPartners);
router.get("/:id", controller.getPartnerById);
router.patch("/:id", controller.updatePartner);
router.delete("/:id", controller.deletePartner);

module.exports = router;