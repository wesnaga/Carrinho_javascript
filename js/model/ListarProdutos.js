class ListarProdutos {
    
    constructor() {
        
        this.listarProdutos = [];
        this.product = [];
        this.produto = [{qtd: Number}];
        this.carrinho = []; 
        this.qtdCart = Number;
        this.total = [];
        window.localStorage.clear();
    }

    
    onLoad(total){
        let carrinho = JSON.parse(window.localStorage.getItem('carrinho'));
        if(!carrinho == ''){
            this.qtdCart = document.getElementById("TotalCarrinho");
            this.qtdCart.innerHTML = total;
        }else{

        }
        
    }
    
    
    adiciona(model) {

        let carrinho = JSON.parse(window.localStorage.getItem('carrinho'));
        

        this.produto = [{id:model.id, qtd: 1, prod:model}];
            
        let prodCarrinho = false;
        let carrinhoIndex = Number;

        if(carrinho){            
            carrinho.forEach((product, index)=>{                
                let item = JSON.stringify(product);
                let obj = JSON.parse(item);  


                if(this.produto[0].id == obj[0].id){
                    this.produto[0].qtd = obj[0].qtd;                    
                    prodCarrinho = true;                
                    carrinhoIndex = index;
                    this.produto[0].qtd = 1;
                    
                }

                

            })

            
        }

        if(!prodCarrinho){     
            this.produto[0].qtd = 1;                         
            this.carrinho.push(this.produto);
            this.listarProdutos.push(this.produto);
            window.localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
            this.onLoad();   
        }else{
            carrinho.splice(carrinhoIndex, 1, [this.produto[0]]);            
            window.localStorage.setItem('carrinho', JSON.stringify(carrinho));        
        }                      
        
    }

    getQuantidade(){

        let carrinho = JSON.parse(window.localStorage.getItem('carrinho'));
        this.total = [];

        if(carrinho){         
            carrinho.forEach((product, index)=>{                
                var item = JSON.stringify(product);
                var obj = JSON.parse(item);   
                this.total.push(obj[0].qtd);
            }) 
            const reducer = (accumulator, currentValue) => accumulator + currentValue;

            this.total = this.total.reduce(reducer);
            this.onLoad(this.total);
        }

        
    }    
    
}