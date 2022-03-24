const app=require("./index")

const connect=require("./configs/db");
app.listen(5555,async()=>{
    try {
        await connect();
        
    } catch (error) {
        console.log(error)
    }
    console.log("listening on port 5555")
});