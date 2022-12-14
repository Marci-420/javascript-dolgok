
function dereke(){
    var a = parseInt(document.getElementById("a").value)
    var b = parseInt(document.getElementById("b").value)
    var c = parseInt(document.getElementById("c").value)
    if (a*a + b*b == c*c){
        alert("jooooooo ez derékszög")
    }
    else {
        alert("gyóó")
    }
}

function meterTo {
    var m = parseInt(document.getElementById("m").value)
    
    let ft = m *3.2808398950131
    let mile = m * 1609.344
    let km = m* 1000
    let y = m * 1.0936133
    let inch = m*39.3700787

    document.getElementById().value = ft + "láb:"+mile + "mérföld:"+ km + "kilométer:" + y + "yard:" + inch + "inch"

}
       