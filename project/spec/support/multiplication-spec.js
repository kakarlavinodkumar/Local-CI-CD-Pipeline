var app=require("./Multiplication.js");
describe("Addition",function(){
it("The function should multiply 2 numbers",function() {
var value=app.MultiplicateNumber(5,6);
expect(value).toBe(30);
});
});