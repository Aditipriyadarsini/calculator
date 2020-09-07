function enter(num) {
    document.getElementById("text").value +=num ;
}
function result() {
    let a = document.getElementById("text").value ;
    let b = eval(a)
    document.getElementById("text").value = b ; 
}
function clr() {
    document.getElementById("text").value = ""
}