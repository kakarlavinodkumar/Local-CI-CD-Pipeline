var app=require("./str-lowercase");
describe("Addition",function(){
it("The function should return lowercase string",function() {
var value=app.stringLowercase("VinodKumar");
expect(value).toBe("vinodkumar");
expect(value.length).toBe(10);
});
});