let nomeCognome = (document.getElementById("nomeCognome").value)
let kmPercorsi = parseInt(document.getElementById("km").value);
let eta = (document.getElementById("eta").value)

var costoTotale   = (kmPercorsi * 0.21  )

const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    // blocchi il refresh della pagina
    event.preventDefault();
    // tutta la logica della generazione del biglietto  
    let nomeCognome = (document.getElementById("nomeCognome").value)
    let kmPercorsi = parseInt(document.getElementById("km").value);
    let eta = (document.getElementById("eta").value)
    if (eta == "Minorenne (-18)") {
        let scontoMinori  = (costoTotale * 0.2  )
        let prezzoMinori  = (costoTotale - scontoMinori )
        // alert ("il costo del tuo biglietto è: " + prezzoMinori.toFixed(2)  + "€" )    
    } else if (eta == "Senior (+60)") {
        let scontoAnziani = (costoTotale * 0.40 )
        let prezzoAnziani = (costoTotale - scontoAnziani)
        // alert ("il costo del tuo biglietto è: " + prezzoAnziani.toFixed(2) + "€" )  
    } else {
        // alert ("il costo del tuo biglietto è: " + costoTotale.toFixed(2)   + "€" )
    }
});




