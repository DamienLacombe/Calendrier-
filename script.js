window.onload = genAnnee;

function genAnnee(){
    const selectAnnee = document.getElementById("annee")
    for (i = 2020; i >= 1970; i--){
        const annee = document.createElement("option")
        annee.textContent = i.toString()
        selectAnnee.appendChild(annee)
    }
    chargementDuCalendrier()
}

const chargementDuCalendrier = () => {
    const anneeValue = document.getElementById("annee").value
    const moisValue = document.getElementById("mois").value
    const date = new Date(anneeValue,moisValue,1)

    const joursMax = () => {
        for (i = 31; i >= 28; i--){
            const dateMax = new Date(anneeValue,moisValue,i).getDate()
            if (dateMax >= 28) {
                return dateMax;
            }
        }   
    }
    let arret = joursMax()
    let jour = date.getDay()
    if (jour === 0) {
        jour = 7
    }
    const tableau = document.querySelectorAll("td");
    let c = 1
    for (i = 7; i < 7 + jour ; i++){
        tableau[i].textContent = ""
    }
    for (i = 6 + jour; i < tableau.length; i++){
        if (c <= arret) {
            tableau[i].textContent = c.toString();
            c++
        } 
        else {
            tableau[i].textContent = ""
        }
    }
const annee = document.getElementById("annee")
const mois = document.getElementById("mois")

annee.addEventListener("change", function (e) {chargementDuCalendrier()})
mois.addEventListener("change", function(e) {chargementDuCalendrier()})
}




