var app=require("./char-search");
describe("Char Search",function(){
it("The function should return index of character",function() {
var value=app.stringSearch("VinodKumar", 'x');
expect(value).toBe(-1);
});
});