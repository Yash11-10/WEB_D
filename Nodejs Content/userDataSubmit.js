const query = require("querystring");
function userDataSubmit(req,res){
     let dataBody = [];
          req.on("data", (chunk) => {
            dataBody.push(chunk);
          });
          req.on("end", () => {
            let rawData = Buffer.concat(dataBody).toString();
            let readableData = query.parse(rawData);
            let dataString ="My name is " + readableData.name +" and my email is " + readableData.Email;
            console.log(dataString)
            res.writeHead(200, { "content-type": "text/html" });
            res.write(dataString);
            res.end();
        })
}
module.exports = userDataSubmit;


