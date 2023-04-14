alert ( `Benvenuto nella biglietteria online piu conveniente inserire i dati richiesti:` )

let kmPercorsi = parseInt(prompt (`quanti km dovrai percorrere?`))
let eta = parseInt(prompt (`quanti anni hai?`))

let costoTotale   = (kmPercorsi * 0.21  )

if (isNaN(eta) || isNaN(kmPercorsi)  ) {
    alert ("i dati inseriti sono scorretti ricaricare la pagina e riprovare")
} else if (eta < 18) {
    let scontoMinori  = (costoTotale * 0.2  )
    let prezzoMinori  = (costoTotale - scontoMinori )
    alert ("il costo del tuo biglietto è: " + prezzoMinori.toFixed(2)  + "€" )    
} else if (eta > 60) {
    let scontoAnziani = (costoTotale * 0.40 )
    let prezzoAnziani = (costoTotale - scontoAnziani)
    alert ("il costo del tuo biglietto è: " + prezzoAnziani.toFixed(2) + "€" )  
} else {
    alert ("il costo del tuo biglietto è: " + costoTotale.toFixed(2)   + "€" )
}

