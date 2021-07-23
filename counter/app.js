var button = document.getElementById('button');
var clear = document.getElementById('clear');
var c = document.getElementById('char');
var w = document.getElementById('word');
var s = document.getElementById('sent');
var pa = document.getElementById('par');

clear.addEventListener("click", () => {
    document.getElementById('para').value = " ";
    c.innerText = 0;
    s.innerText = 0;
    w.innerText = 0;
    pa.innerText = 0;
})
button.addEventListener("click", () => {
    var countc = 0;
    var counts = 0;
    var p = document.getElementById('para').value;

    for (let i = 0; i < p.length; i++) {
        var char = p[i];
        if (char != " " && char != "." && char != "\n") {
            countc++;
        }
        if (char === ".") {
            counts++;
        }
    }
    c.innerText = countc;
    s.innerText = counts;
    w.innerText = p.match(/(\w+)/g).length;
    pa.innerText = p.split(/[\r\n]+/).length; //\n for enter.
});

//    \w+    between one and unlimited word characters
//    /g     greedy - don't stop after the first match

/*
.value takes the whole value in the specified id
.length should be used to .value of the desired id. This gives the total char length
.innerText is for normal id
.innerHTML is for textarea
*/
