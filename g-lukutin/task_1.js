//test
function secondIndex(text, symbol) {

    var b = text.indexOf(symbol);
    var d = -1;
    if (b  > d)
 {
     var c = text.indexOf(symbol, b+1)
    if ( c > 0) {
        return c
    }};
 }


console.log(secondIndex("aba", "b"))
