const router = require("express").Router();
let order = require("../models/order");

router.route("/add").post((req,res)=>{

    const  name= req.body.name;
    const  batchID= Number(req.body.batchID);
    const  quantity= Number(req.body.quantity);

    const neworder = new order({
        name,
        batchID,
        quantity
    })

    neworder.save().then(()=>{
            res.json("order added")

        }).catch ((err)=>{
            console.log(err);
        })

})

router.route("/update/:id").put(async (req, res)=>{
    let orderId = req.params.id;
    const {name, batchID,quantity} = req.body;

    const updateorder = {
        name,
        batchID,
        quantity
    }

    const update = await order.findByIdAndUpdate(orderId, updateorder).then(()=>{
        res.status(200).send({status: "order updated"})
    }).catch((err)=>{
            console.log(err);
    })

})


module.exports = router;