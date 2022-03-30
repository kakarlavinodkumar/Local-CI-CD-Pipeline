var app=require("./string.js");
describe("Addition",function(){
it("The function should return test string",function() {
var value=app.returnString();
expect(value).toBe("test string");
expect(value.length).toBe(11);
});
});