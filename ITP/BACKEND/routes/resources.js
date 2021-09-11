const router = require("express").Router();
let Resource = require("../models/resource");
const upload = require("../middleware/upload")

router.route("/add", upload.single('file')).post((req,res)=>{

    const bookID = req.body.bookID;
    const subject = req.body.subject;
    const title = req.body.title;
    const auther = req.body.auther;
    const edition = Number(req.body.edition);


    const newResource = new Resource({

        bookID,
        subject,
        title,
        auther,
        edition,

        
    })

    if(req.file){
        Resource.file = req.file.path
    }


    newResource.save().then(()=>{
        res.json("Resource Added")
    }).catch((err)=>{

        console.log(err);

    })

})


router.route("/").get((req,res)=>{
    Resource.find().then((resources)=>{
        res.json(resources)

    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) =>{
    let resourceId = req.params.id;
    const {bookID, subject, title, auther,edition } = req.body;

    const updateResource = {
        bookID,
        subject, 
        title, 
        auther,
        edition 
    }

    const update = await Resource.findByIdAndUpdate(resourceId, updateResource)
    .then(()=>{

     res.status(200).send({status: "Resource Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let resourceId = req.params.id;

    await Resource.findByIdAndDelete(resourceId).then (()=> {
        res.status(200).send({status: "Resource Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting resource", error: err.message});
    })
})

router.route("/get/:id").get(async (req,res) => {
    let resourceId = req.params.id;
    const resource = await resource.findOne(subject).then(() => {
        res.status(200).send({status: "Resource fetched" , resource: resource})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get Resource", error: err.message});
    })
})



module.exports = router;
