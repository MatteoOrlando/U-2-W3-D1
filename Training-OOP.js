// Richiamo input del form //

const firstName = document.getElementById('fistName')
const lastName = document.getElementById('lastName')
const age = document.getElementById('userAge')
const location = documnet.getElementById("userLocation")

const buttonPrevent = document.getElementById('saveButton')

// creo un array, che conterrá e memorizzerá i dati inseriti dall'utente 
const contatti = []


// creo una classe, per creare un oggetto una volta recuperati i dati
class Contatti {
    constructor(_name, _lastName, _age, _location){
        this.firstName = _name
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
}

const fillerCard = function() {
// qui prendo come riferimento la row che verrá riempita
    const row = document.getElementById('profile')
// svuoto i dati inseriti prima di creare una nuova card
    row.innerHTML = ""

    profiles.forEach((e) =>
     { const newCol = document.createElement('div')
        newCol.classList.add("col")

// riempio la card dopo aver ciclate l'array profilo
    newCol.innerHTML = ` <div class="card bg-secondary">
    <div class="card-body">
      <h5 class="card-title">>${e.firstName} ${e.lastName}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${e.age}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">${e.location}</h6>
    </div>
  </div>`
           
//  Il form si svuota ma senza aggiornare la pagina, e si evita di riempire la pagina di
//card non necessarie, in caso di spam sul button Salva
  row.appendChild(newCol) 
        })
        firstName.value = ''
        surname.value = ''
        age.value = ''
        location.value = ''
}


// La pagina non si aggiorna all'invio del form
const preventRefresh = document.getElementsByClassName("form")[0]
preventRefresh.addEventListener('submit', function(e){
    e.preventDefault()
    const profiles = new Contatti (
        firstName.value,
        surname.value, 
        age.value ,
        location.value ,
                                  )
console.log ('Profilo Creato, Grazie!', profiles)
// riempimento della rubrica, in modo progressivo
contatti.push(profiles)
// richiamo la funzione che fillerá la pagina dei dati inseriti 
fillerCard()
}
)
conaole.log(fillerCard())



