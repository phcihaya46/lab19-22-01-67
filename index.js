// const a =[1,2,3,4,5]
// console.log("test1")

// const b = a.map((el)=>el*2)
// console.log(b)

// const testPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("HI");
//     },2000)
// })

// console.log("test1")
// testPromise.then((res)=>console.log(res))
// console.log("test2")


// const doAnything = (doSth) =>{
//     const num1 =5;
//     const num2 = 10;

//     const result = doSth(num1, num2)

//     return result
// }

// const muti = (numA,numB) => {
//     return numA * numB;
// };

// const newResult = doAnything(muti);
// console.log(newResult)


// const obj = require("./data")
// console.log(obj)


// const {a, testFunc} = require("./data")
// console.log(a)
// console.log(testFunc)

// const obj = require("./data")
// console.log(obj)


// const {testFunc} = require("./data")
// testFunc();


// const path = require("path")
// console.log(__dirname+"/"+"data.js")
// console.log(path.join(__dirname,"data.js"))

// const fs = require("fs/promises")
// const path = require("path")

// const run = async () =>{
//     const data = await fs.readFile(path.join(__dirname,"hello.txt"),{
//         encoding:"utf-8",
//     })
//     console.log(data)
// }
// run()


// const http = require("http")
// const server = http.createServer((req, res)=>{})
// server.listen("8000",()=>{
//     console.log("Server is running on port 8000")
// })
// const express = require("express")

// const app = express();

// app.get("/product/price/:price/discount/:discount",(req, res, next ) =>{
//     const {price, discount} = req.params;

//     res.json({price, discount});
// });

// app.listen("8000",()=>{
//     console.log("server id running on port 8000")
// })




///lab1
// app.get("/sum/:a/:b",(req ,res ,next)=>{
//     const {a,b} =req.params;
//     res.json({a,b});
// });


// app.post("/producr/:id",(req ,res ,next)=>{
//     const {id} =req.params;
//     res.json({id});
// });

// app.get("/users/:id/booking/:bId",(req ,res ,next)=>{
//     const {id, bId} =req.params;
//     res.json({id , bId});
// });

// app.listen("8000",()=>{
//     console.log("server id running on port 8000")
// })


///lab2
// app.patch("/post/:postId",(req ,res ,next)=>{
//     const {postId} =req.params;
//     res.json({postId});
// });

// app.delete("/post/:postId",(req ,res ,next)=>{
//     const {postId} =req.params;
//     res.json({postId});
// });

// app.get("/post/:postId",(req ,res ,next)=>{
//     const {postId} =req.params;
//     res.json({postId});
// });

// app.get("/auth/:userId",(req ,res ,next)=>{
//     const {postId} =req.params;
//     res.json({postId});
// });

// app.listen("8000",()=>{
//     console.log("server id running on port 8000")
// })


// app.get("/product",(req ,res ,next)=>{
//     const {order, page, limit }=req.params
//         // console.log(req.query)
//         res.json({order, page, limit });
//     });

// app.get("/product",(req ,res ,next)=>{
//     //const {order, page, limit }=req.params
//     console.log(req.body)
//     res.json({});
// });
    
/////////การรัน body โดยใช้ middleware
// const express = require("express")

// const app = express();

// app.use (express.json());

// app.get("/product",(req ,res ,next)=>{
//     const {username, password}=req.body;

//     res.json({username, password});
// });


////////
// const middlewareA = (req ,res ,next)=>{
//     const {message}=req.body;
//     req.myMessage = message;
//     next();
// };

// app.use(middlewareA);

// app.get("/",(req ,res ,next)=>{
//     console.log(req.myMessage)
//     res.json({});
// });

// app.patch("/",(req ,res ,next)=>{
//     console.log(req.myMessage)
//     res.json({});
// });


// app.listen("8000",()=>{
//     console.log("server id running on port 8000")
// })


///////////////
// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");

// const upload = multer({ dest: "uploads/" });
// const app = express();

// app.use(express.json());

// app.post("/", upload.single("image"), (req, res, next) => {
//   try {
//     console.log(req.file);
//     // upload ขึ้น cloud
//     // return url
//     // update url -> db server
//     // delete file -> fs.unlinkSync
//     res.json({});
//   } catch (err) {
//     next(err);
//   } finally {
//     setTimeout(() => {
//       fs.unlinkSync(req.file.path);
//     }, 3000);
//   }
// });

// app.listen("8000", () => {
//   console.log("Server is running on port 8000");
// });



////lab01
// const express = require("express")

// const app = express();

// app.use (express.json());

// app.get("/product",(req ,res ,next)=>{
//     const {page, limits, order }=req.query
//         // console.log(req.query)
//         res.json({page, limits, order });
// });


// app.post("/product",(req ,res ,next)=>{
//     const {name, price, description} =req.body;
//     res.json({name, price, description});
// });

// app.put("/product/:id",(req ,res ,next)=>{
//     const {name, price, description} =req.body;
//     const {id} = req.params;
//     res.json({name, price, description, id});
// });

// app.delete("/product/:id",(req ,res ,next)=>{
//     const {id} = req.params;
//     res.json({id});
// });


// app.listen("8000", () => {
//     console.log("Server is running on port 8000");
//   });
  


/////////////////
const express = require("express");
const productRoute = require("./routes/product-route");
const authRoute = require("./routes/auth.route")
const errorHandler = require("./middlewares/error");
const notFoundHandler = require("./middlewares/not-found");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());





app.use("/auth",authRoute)
app.use("/product", productRoute);


app.use(errorHandler)
app.use("*",notFoundHandler)

app.listen("8000", () => {
  console.log("Server is running on port 8000");
});