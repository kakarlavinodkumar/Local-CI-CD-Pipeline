var app=require("./Division.js");
describe("Addition",function(){
it("The function should divide 2 numbers",function() {
var value=app.DivideNumber(6,3);
expect(value).toBe(2);
});
});