var app=require("./Subtraction.js");
describe("Addition",function(){
it("The function should subtract 2 numbers",function() {
var value=app.SubtractNumber(6,5);
expect(value).toBe(1);
});
});