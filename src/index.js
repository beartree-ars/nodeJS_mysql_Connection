const app = require("./config/server");
require("./app/routes/news") (app);

//starting the server
app.listen(app.get('port'),()=>{
    console.log("Server on port", app.get('port'));
});