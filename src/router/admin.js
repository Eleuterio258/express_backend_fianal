const express = require('express')
const router = express.Router();
const connection = require('../config/db');




router.get('/', (req, res) => {
    connection.query('SELECT * FROM category', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    })
});




// selrct sub_category where category_id = category_id
router.post('/subcategoria', (req, res) => {
    var id = req.body.id;
    connection.query('SELECT * FROM sub_category WHERE id_cat = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    })
}
);


//CREATE CATEGORY
//GET ALL CATEGORY
//GET CATEGORY BY ID
//UPDATE CATEGORY
//DELETE CATEGORY
//GET CATEGORY BY NAME
//SEARCH CATEGORY
//GET CATEGORY BY SHOP ID
//GET CATEGORY BY SHOP NAME
//GET PRODUCT BY SHOP NAME
//REACTIVATE/DEACTIVATE CATEGORY

//CREATE PRODUCT
//GET ALL PRODUCT
//GET PRODUCT BY ID
//UPDATE PRODUCT
//DELETE PRODUCT
//GET PRODUCT BY NAME
//SEARCH PRODUCT
//GET PRODUCT BY CATEGORY ID
//GET PRODUCT BY CATEGORY NAME
//GET PRODUCT BY SHOP ID
//GET PRODUCT BY SHOP NAME
//GET PRODUCT BY SHOP NAME
//REACTIVATE/DEACTIVATE PRODUCT

//CHECKOUT
//ORDER BY ID
//ORDER PENDING
//ORDER COMPLETE
//ORDER DETAIL
//ORDER PROCESSING
//ORDER DELIVERED
//ORDER CANCELLED
//PAYMENT
//ALL PRODUCT
//POPULAR PRODUCT
//GET PRODUCT BY ID

//CREATE SLIDER
//GET ALL SLIDER
//GET SLIDER BY ID
//UPDATE SLIDER
//DELETE SLIDER

//CREATE USER
//GET ALL USER
//GET USER BY ID
//UPDATE USER
//DELETE USER
//GET USER BY NAME SURNAME
//SEARCH USER
//REACTIVATE/DEACTIVATE USER











module.exports = router;