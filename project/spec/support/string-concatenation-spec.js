var app=require("./string-concatenation");
describe("String Concatenation",function(){
it("The function should return concatenated string",function() {
var value=app.stringConcatenation("vancouver","city");
expect(value).toBe("vancouvercity");
expect(value.length).toBe(13);
});
});