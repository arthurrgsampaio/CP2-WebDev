const btnClicar = document.getElementById('addToCart')
btnClicar.addEventListener('click', e =>{
    const wine = e.target.value;
    const test = localStorage.getItem(`${wine}`);
    if(test == "NaN"){
        localStorage.setItem(`${wine}`, 1);
    }else{
        const newQuant = parseInt(localStorage.getItem(`${wine}`)) + 1;
        localStorage.setItem(`${wine}`, newQuant);
    }
    console.log(`${wine}:` + localStorage.getItem(`${wine}`));
    localStorage.getItem(`${wine}`)
});