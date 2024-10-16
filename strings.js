// 1
var a="          snigdha";
var a1=a.trimStart(); 
console.log(a)
console.log(a1)
var b="reddy       ";
var b1=b.trimEnd()
console.log(b)
console.log(b1)
var c=a1.concat(b1);
console.log(c)
console.log(c.toUpperCase())

// 2
var str="METHOD";
var str1=str.slice(2,4)
console.log(str1)
var str2=str1.indexOf("H")
console.log(str2)
console.log(str1.toLowerCase())

// 3
var s="1";
var r="one";
var p=s.concat(r)
console.log(p)
var t=p.toUpperCase()
console.log(t)
console.log(t.slice(-2,-1))

// 4
var first="string";
var sec="method";
var one=first.slice(0,3)
console.log(one)
var two=sec.slice(-3)
console.log(two)
var thr=one.concat(two)
console.log(thr)
var four=thr.charAt(0).toUpperCase()+thr.slice(1,5)+thr.charAt(5).toUpperCase()
console.log(four)

// 5
var string="     hiii     "
console.log(string)
console.log(string.length)
var trim=string.trim()
console.log(trim)
console.log(trim.length)
var up=trim.charAt(0).toUpperCase()+trim.slice(1,3)+trim.charAt(3).toUpperCase()
console.log(up)
var ex=up.slice(0,2)
console.log(ex)
var con=" guys"
console.log(ex.concat(con))

// 6
var word="hello there , how are you "
var ind=word.indexOf("are")
console.log(ind)