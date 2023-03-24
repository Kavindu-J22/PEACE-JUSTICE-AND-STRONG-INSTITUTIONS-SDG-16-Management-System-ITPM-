const router = require('express').Router()
const workCtrl = require('../controllers/workCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/products')
    .get(workCtrl.getProducts)
    .post(auth, authAdmin, workCtrl.createProduct)


router.route('/products/:id')
    .delete(auth, authAdmin, workCtrl.deleteProduct)
    .put(auth, authAdmin, workCtrl.updateProduct)



module.exports = router