document.addEventListener("DOMContentLoaded",()=>{
    console.log("chargé")
    
    
    
    
    let warning = document.querySelector(".warning")
    let btn = document.getElementsByTagName("input")[2]
    let  ans = new Date().getFullYear()

    
btn.addEventListener("click",(e)=>{
    e.preventDefault()

    User()
});


User =()=>{

    age= document.getElementsByTagName("input")[0].value;
    prenom= document.getElementsByTagName("input")[1].value;
    if(age&&prenom&&!isNaN(age)){
    if(age>ans ){
      warning.innerText= "ce n'est pas possible "
      warning.style.display="block"
      warning.classList.remove("sucess")
      warning.classList.add("warning")
    }
    
else{
    warning.innerText=`Bonjour ${prenom} vous etes né(e) en ${Number(ans-age)}`
    warning.style.display="block"
    warning.classList.add("sucess")
    warning.classList.remove("warning")
    }

}else{
    warning.innerText="champs vide ou age doit etre un nombre"
    warning.style.display="block"
    warning.classList.remove("sucess")
    warning.classList.add("warning")
} 
}
})



    
      
