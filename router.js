const express = require("express");
const router = express.Router();
const Test = require("./model");

router.get("/list", async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/add", async (req, res) => {
  const alien = new Test({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const alien = await Test.findById(req.params.id);
    res.json(alien);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const alien = await Test.findByIdAndUpdate(req.params.id,req.body,{
    new: true,
    runValidators: true,
    context: 'query'
    });
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const alien = await Test.findByIdAndRemove(req.params.id);
    res.json(alien);
  } catch (err) {
    res.send("Error " + err);
  }
});

// router.put('/:id', async(req, res) => {
//     const user = await Test.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true,
//         context: 'query'
//        })
//        if (!user)
//         return next(new ErrorResponse(`No user with that id of ${req.params.id}`))
      
//        res.status(200).json({ success: true, data: user })
//     })


// router.patch('/:id',async(req,res)=> {
//     try{
//         const alien = await Test.findByIdAndUpdate(req.params.id,req.body) 
//         alien.sub = req.body.sub
//         const a1 = await alien.save()
//         res.json(a1)   
//     }catch(err){
//         res.send('Error')
//     }

// })

module.exports = router;
