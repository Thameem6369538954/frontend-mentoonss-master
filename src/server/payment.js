const express = require('express')
 
const app =express();

const port =5001;

app.get("/", (req,res)=>{
    res.send("it is working payment ")
})

app.post('/payment',(req,res)=>{
    console.log(req.body);
    res.send("Working Properly")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


//   dummypayment.app.addListener('cartpayment' ,(req,res)=>{
//     const paymentIncard = () =>{
//         fname : [""]
//         lname :[""]
//         phone :[""]
//         email : ['']
//     }
//   })