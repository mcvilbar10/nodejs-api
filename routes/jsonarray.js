var express=require('express');
var router=express.Router();

let data = [
    { id: 1, title: 'Create a project',  order: 1, completed: true, author: 'Diego Laura' },
    { id: 2, title: 'Take a cofféé',     order: 2, completed: true, author: 'Laong-Laan' },
    { id: 3, title: 'Write new article', order: 3, completed: true, author: 'Agap-ito Bagumbayan' },
    { id: 4, title: 'Walk toward home', order: 4, completed: false, author: 'Taga-Ilog' },
    { id: 5, title: 'Have some dinner', order: 5, completed: false, author: 'Dimas-Ilaw' },
];

router.get("/:id",(req,res, next)=>{
    const {id}=req.params;
    res.send(data[id]);
});

router.post("/data",(req,res)=> {
    let dt={id: req.body.id,title: req.body.title,
        order: req.body.order,
        completed:req.body.completed,
        author:req.body.author
        };

    data.push(dt);
    res.send(dt);   
});

router.delete("/:id",(req,res)=>{
    const {id}=req.params;
    const result=data.filter(items=>{items.id!=number(id)});

    res.status(404).send(result.length>0? "Record " + result.id + " has been deleted.": result + " not found!");
    });

router.put("/:id",(req,res)=>{
    const {id}=req.params;
    let result=data.filter(items=>{items.id!=number(id)});
    data.title=req.body.title;
    data.order=req.body.order;
    data.completed=req.body.completed;
    data.author=req.body.author;
    res.status(404).send(result.length>0? "Record " + result.id + " has been updated.": result + " not found!");
});

module.exports=router;
