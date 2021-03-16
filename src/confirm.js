document.addEventListener("DOMContentLoaded", () => {
    console.log("ok");


    let el=document.querySelector(".cadre")
    let warning=document.getElementById(".warning")
    let retrait = Number(prompt("Votre retrait svp "));
    let confirmer = confirm("Voulez-vous confirmer votre retrait ?");
    let initial=1000



    //tester retrait
    if (retrait >= 20 && retrait <= 100) {
        if (confirmer) {
            initial=initial-retrait
            console.log("merci d'avoir confirmé");
            el.innerHTML = `Votre retrait est de ${retrait}€<br> Votre nouveau solde est de ${initial}€ `
            el.classList.add("cadre")
            el.classList.remove("warning")
            

        } else {
            console.log("opération annulée");
            el.innerText= `opération annulée`;
            el.classList.remove("cadre")
            el.classList.add("warning")
           
        }
    } else if (!retrait) {
        alert("Attention, veuillez saisir une somme");
        document.location.reload();                  //rafraichir la page et reposer la question
    } else {
        alert("Votre retrait doit etre compris entre 20 et 100 euros ");
        document.location.reload();
    }
});

