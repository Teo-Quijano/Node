const { Router } = require("express");
const router = Router();
const profesionalCtrl = require("../controller/profesionales.controller");

router.get("/", profesionalCtrl.getCast);
router.get("/profesionales", profesionalCtrl.getActores);
router.post("/profesionales", profesionalCtrl.postActores);
router.put("/profesionales", profesionalCtrl.putActores);
router.delete("/profesionales", profesionalCtrl.deleteActores);

module.exports = router;
