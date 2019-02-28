class ProdutosView {

    constructor(elemento){
        this._elemento = elemento;
    }
    
    template(model){
        return `            
           ${model.map((n) => {
               return `
               <div class="product">
                    <h2>${n.name}</h2>
                    <img src="${n.pic}" alt="">
                    <p class="desc">${n.description}</p>                    
                    <p class="valor">R$ ${parseFloat(n.priceInCentsPerKg/100).toFixed(2)}</p>                    
                    <p>${n.kgPerUnit} kg/un</p>
                    <button type="submit" onclick='produtosController.adiciona(${JSON.stringify(n)})'>Adicionar</button>
                </div>
               `
           }).join('')
           }
        `;
    }


    update(model){
        
        this._elemento.innerHTML = this.template(model);
    }
}