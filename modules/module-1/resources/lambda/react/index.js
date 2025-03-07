var fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
let path = require("path");

exports.handler = async function(event) {
    
    console.log(path.resolve("./index.html"));
    var html = fs.readFileSync(__dirname +'/index.html', 'utf8');
    html = html.replace(/S3_BUCKET/g,  "https://production-blog-awsgoat-bucket-724772056834.s3.us-west-2.amazonaws.com/build");
    return {
          'statusCode': 200,
          'headers': {'Content-Type': 'text/html'},
          'body': html
    }
              
}