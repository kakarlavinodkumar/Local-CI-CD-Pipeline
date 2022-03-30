var app=require("./str-uppercase");
describe("String Uppercase",function(){
it("The function should return uppercase string",function() {
var value=app.stringUppercase("VinodKumar");
expect(value).toBe("VINODKUMAR");
expect(value.length).toBe(10);
});
});