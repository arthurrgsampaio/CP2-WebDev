document.addEventListener("DOMContentLoaded", () => {
    const addbuttons = document.querySelectorAll(".likebtn");
    addbuttons.forEach(button => {
        button.addEventListener("click", () => {
            const productContainer = button.parentElement;
            const productName = productContainer.querySelector("h2").innerText;
            let favoritesList = JSON.parse(localStorage.getItem("favoritesList")) || [];
            if(favoritesList.length == 0){
                favoritesList.push(productName);
            }else{
                if(!favoritesList.includes(productName)){
                    favoritesList.push(productName);
                }
            }
            localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
            console.log(localStorage.getItem("favoritesList"));
        });
    });

    const favs = document.querySelector("#favs");
    const loadFavsPage = () => {
        let favoritesList = JSON.parse(localStorage.getItem("favoritesList")) || [];
        console.log(favoritesList.length)
        if(favoritesList.length == 0){
            const newH2 = document.createElement("h2");
            newH2.textContent = "Você ainda não possui nenhum favorito, adicione na página inicial!";
            favs.appendChild(newH2);
        }else{
            favoritesList.forEach(fav => {
                const newDiv = document.createElement("div")
                const newP = document.createElement("p");
                newDiv.className = "favDiv";
                newP.textContent = `- ${fav}`;
                newDiv.appendChild(newP);
                favs.appendChild(newDiv);
            });
        }
    }

    if(favs){
        loadFavsPage();
    }

    const excludeButton =  document.querySelector("#excluirFavs");
    excludeButton.addEventListener("click", () => {
        localStorage.clear();
        favs.innerHTML = "";
        loadFavsPage();
    })


})
