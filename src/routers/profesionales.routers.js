
const {Router} = require ("express")
const router = Router();
const actoresCtrl = require ("../controller/profesionales.controller")

router.get ("/", actoresCtrl.getActores);
router.post ("/profesional", actoresCtrl.postActores);
router.put ("/profesional", actoresCtrl.putActores);
router.delete ("/profesional", actoresCtrl.deleteActores);

module.exports = router;