
function dereke(){
    var a = parseInt(document.getElementById("a").value)
    var b = parseInt(document.getElementById("b").value)
    var c = parseInt(document.getElementById("c").value)
    if (a*a + b*b == c*c){
        alert("jooooooo ez derékszög")
    }
    else {
        alert("jájj ez nem derékszögűű")
    }
}

function meterTo() {
    var m = document.getElementById("m").value;

    let ft = m *3.2808398950131
    let mile = m * 1609.344
    let km = m* 1000
    let y = m * 1.0936133
    let inch = m*39.3700787

    document.getElementById("ce").innerHTML = ft +" láb:";
    document.getElementById("cE").innerHTML = mile + " mérföld";
    document.getElementById("Ce").innerHTML = km + " kilométer";
    document.getElementById("CE").innerHTML = y + " yard";
    document.getElementById("ci").innerHTML = inch + " inch";
}

function secTo(){
    let sec = document.getElementById("sec").value;

    let h = Math.floor(sec / 3600);
    sec %= 3600;
    let min = Math.floor(sec / 60);
    let secs = sec % 60;

    document.getElementById("c").innerHTML = "Idő:"+h + ":" + min + ":" + secs;
}
       