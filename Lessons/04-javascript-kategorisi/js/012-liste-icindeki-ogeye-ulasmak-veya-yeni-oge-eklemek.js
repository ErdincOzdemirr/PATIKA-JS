// ********** liste icerisindeki son elemana ulasmak veya eleman eklemek **********

// let lastChild = document.querySelector("ul#list>li:last-child")
// lastChild.innerHTML = "son oge degisti..."

// let firstChild = document.querySelector("ul#list>li:first-child")
// firstChild.innerHTML = "ilk oge degisti..."

// let ulDOM = document.querySelector("ul#list")
// let liDOM = document.createElement('li')

// liDOM.innerHTML = "Kendi Olusturdugumuz Oge"

// ulDOM.append(liDOM) // en sona ekler
// ulDOM.prepend(liDOM)//en başa ekler

// let item = document.querySelector("ul#list>li:last-child")
// console.log(item)

//Document

var one = document.getElementById("walterwhite")
var two = document.getElementsByClassName("alternate")

for ( var i = 0; i<two.length; i++) {
    two[i].computedStyleMap.color = "red";
}