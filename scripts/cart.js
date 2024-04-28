document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".comprarbtn");
    const itemsList = document.getElementById("items_do_carrinho");
    const rmvbtn = document.getElementById("rmvbtn");

    if (rmvbtn) {
        rmvbtn.addEventListener("click", function() {
            localStorage.removeItem("productList");
            if (itemsList) {
                itemsList.innerHTML = "";
            }
            calcularTotal();
        });
    }

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const productContainer = button.parentElement;
            const productName = productContainer.querySelector("h2").innerText;
            const productPrice = parseFloat(productContainer.querySelector("p").innerText.replace("R$", "").replace(",", "."));
            let productList = JSON.parse(localStorage.getItem("productList")) || [];
            const product = {
                name: productName,
                price: productPrice
            };
            productList.push(product);
            localStorage.setItem("productList", JSON.stringify(productList));
            
        });
    });

    function calcularTotal() {
        const totalSpan = document.getElementById("quantia-total");
        let total = 0;
        const productList = JSON.parse(localStorage.getItem("productList")) || [];
        itemsList.innerHTML = "";
        productList.forEach(product => {
            const newItem = document.createElement("li");
            newItem.textContent = `${product.name} - R$${product.price.toFixed(2)}`;
            itemsList.appendChild(newItem);
            total += product.price;
        });
        totalSpan.innerText = total.toFixed(2);
    }

    calcularTotal();

    function aplicarcupom() {
        console.log("Aplicar Cupom clicado");
        const cupom = document.getElementById('cupom').value;
        let custoTotal = parseFloat(document.getElementById('quantia-total').textContent);
    
        if (cupom === 'fiap2024') {
            const desconto = custoTotal * 0.1;
            custoTotal -= desconto;
            document.getElementById('quantia-total').textContent = custoTotal.toFixed(2);
            document.getElementById('accept_cupom').innerText = 'Cupom aplicado!';
            document.getElementById('error_cupom').innerText = '';
        } else {
            document.getElementById('error_cupom').innerText = 'Cupom inválido!';
            document.getElementById('accept_cupom').innerText = '';
        }
    }
    const aplicarCupomButton = document.getElementById("aplicar-cupom");
    if (aplicarCupomButton) {
        aplicarCupomButton.addEventListener("click", aplicarcupom);
    }
});
