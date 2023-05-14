

var x = ['Pisang','Jeruk','Apel','Mangga']
console.log(x)


function Buah(){
   
     x.pop()
    return x

} console.log(Buah())
function panggilBuah(){
    var z = x
    z.shift()
    return z

} 
console.log(panggilBuah())