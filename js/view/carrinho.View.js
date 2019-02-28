
class CarrinhoView {

    constructor(elemento){
        this._elemento = elemento;
        this.name = String;
    }
    
    template(model){
        return `            
           ${model.map((n) => {
               return `
               <div class="carrinhoProduct">
                <div class="carrinhoItem">
                    <h2>${n[0].prod.name}</h2>
                    <div class="b1">
                        <img src="${n[0].prod.pic}" alt="">
                        <p class="valor">R$ ${parseFloat(n[0].prod.priceInCentsPerKg/100).toFixed(2)} / un</p>                    
                        <p>${n[0].prod.kgPerUnit} kg /un</p>
                        <div class="qtdProdutos">
                            <button type="submit" onclick='carrinhoController.remove(${JSON.stringify(n[0])})'>-</button>
                            <p>${n[0].qtd}</p>
                            <button type="submit"  onclick='carrinhoController.adiciona(${JSON.stringify(n[0])})'>+</button>
                        </div>    

                    </div>
                    <div>
                        <p class="desc">${n[0].prod.description}</p>  
                    </div>
                        
                        
                                          
                        
                    </div>
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