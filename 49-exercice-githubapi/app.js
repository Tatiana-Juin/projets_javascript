// https://api.github.com/users/
//APPELLE DE L'API
const API = "https://api.github.com/users/";
//SELECTIONNE LES ELEMENTS 
const resultat = document.querySelector(".resultat");
const form = document.querySelector(".form-github-recherche");
const inp = document.querySelector(".inp-search");

//FUNCTION ASYNCHRONE PERMETANT DE RECUPERER LES DONNES D'UN UTILISATEUR 
async function dataGithub(utilisateur){
    const reponse = await fetch(`${API}${utilisateur}`);
    const data = await reponse.json();
    console.log(data);
    //APPELLLE DE LA FONCTION creationCarte
    creationCarte(data);
}


//dataGithub('Tatiana-Juin');

//FONCTION creationCarte avec pour paramatre user
function creationCarte(user){
    const carteHTML = `
        <div class="carte">
            <img src=${user.avatar_url} alt="avatar" class="avatar">
            <h2> ${user.login} </h2>
            <ul class="cont-infos">
                <li class="follow"> Followers : ${user.followers} </li>
                <li class="etoiles"> Repos : ${user.public_repos} </li>
                <li class="bio"> biographie : ${user.bio} </li>
                
            </ul>
        </div>
    `;
    resultat.innerHTML = carteHTML;
}

//FONCTION POUR LA RECHERCHE 
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    if(inp.value.length > 0){
        dataGithub(inp.value);
        inp.value = "";
    }
    
})