var obj = 
{
    "firstName":"Gevorg",
    "lastName" :"Panosyan",
    "age"      :14,
    "tumo_student":true
};
var newObj = JSON.stringify(obj);

var fs = require('fs');
function main(){
    fs.writeFileSync("obj.json",newObj);
}
main();