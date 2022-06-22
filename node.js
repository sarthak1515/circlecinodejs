const express=require("express")
const path=require("path")
const app=express()
const file=path.join(__dirname,'barandpie.html')
const test2=require("./productController/control")
// const router=express.Router()
const ejs=require("ejs")
// const middleware=(req,res,next)=>{
// if(!req.query.id){
//     res.send("provide age")
// }
// else{
//     next()
// }
// }
// app.use("/",router)
// app.set("view engine","ejs")
app.use(express.json())
// app.use(express.static(__dirname))
app.use("/api/v1",test2)
// app.get("/", async (req,res)=>{
// try{
//  res.sendFile(file);
// }
// catch(e){

// }
// });
// app.get("/pie", async (req,res)=>{
//     try{
//      res.sendFile(path.join(__dirname,'pie.html'));
//     }
//     catch(e){
    
//     }
//     });
//     app.get("/csv", async (req,res)=>{
//         try{
//          res.sendFile(path.join(__dirname,'csv.html'));
//         }
//         catch(e){
        
//         }
//         });
//         app.get("/html",async (req,res)=>{
//             try{
//                 console.log(req.query.id)
//              res.sendFile(path.join(__dirname,'htmltable.html'));
//             }
//             catch(e){
            
//             }
//             });
//             app.get("/time", async (req,res)=>{
//                 try{
//                     const d=new Date();
//                     d.toLocaleString()
                   
//                     res.send([d, Math.floor(Math.random() * 100)])
//                 }
//                 catch(e){
                
//                 }
//                 });
//                 app.get("/sheet", async (req,res)=>{
//                     try{
//                      res.sendFile(path.join(__dirname,'spreadSheet.html'));
//                     }
//                     catch(e){
                    
//                     }
//                     });
//                     app.get("/test", async (req,res)=>{
//                         try{
//                             const arr={
//                                 name:"sarthak",
//                                 array:[1,2,3,4]
//                             }
//                          res.render("home",{arr})
//                         }
//                         catch(e){
                        
//                         }
//                         });

app.listen(8080);
