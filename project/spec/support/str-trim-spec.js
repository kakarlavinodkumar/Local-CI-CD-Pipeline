var app=require("./str-trim");
describe("String Trim",function(){
it("The function should return tim of string",function() {
var value=app.stringTrim("   VinodKumar  ");
expect(value).toEqual("VinodKumar");
expect(value.length).toBe(10);
});
});