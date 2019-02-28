class ListarCarrinho {
    
    constructor(){
        this.onLoad();
        this.listarProdutos = [];
        this.product = [];
        this.produto = [{qtd: 0}];
        this.carrinho = []; 
        this.qtdCart = Number;
        this.total = [];
    }

    onLoad(total){
        let carrinho = JSON.parse(window.localStorage.getItem('carrinho'));
        if(!carrinho == ''){
            this.qtdCart = document.getElementById("TotalCarrinho");
            this.qtdCart.innerHTML = total;
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

    adiciona(model) {

        let carrinho = JSON.parse(window.localStorage.getItem('carrinho'));

        this.produto = [model];
             
        let prodCarrinho = false;
        let carrinhoIndex = Number;

        if(carrinho){            
            carrinho.forEach((product, index)=>{                
                var item = JSON.stringify(product);
                var obj = JSON.parse(item);                
                if(this.produto[0].id == obj[0].id){
                    this.produto[0].qtd = obj[0].qtd;
                    prodCarrinho = true;                
                    carrinhoIndex = index;
                    this.produto[0].qtd += 1;
                    window.location.reload(true); 
                }

            })
        }

        
            carrinho.splice(carrinhoIndex, 1, [this.produto[0]]);            
            window.localStorage.setItem('carrinho', JSON.stringify(carrinho));   
            this.onLoad();      
                           
        
    }


    remove(model) {

        let carrinho = JSON.parse(window.localStorage.getItem('carrinho'));

        this.produto = [model];             
        let prodCarrinho = false;
        let carrinhoIndex = Number;

        if(carrinho){            
            carrinho.forEach((product, index)=>{                
                var item = JSON.stringify(product);
                var obj = JSON.parse(item);                
                if(this.produto[0].id == obj[0].id){
                    this.produto[0].qtd = obj[0].qtd;
                    prodCarrinho = true;                
                    carrinhoIndex = index;
                    this.produto[0].qtd -= 1;
                    window.location.reload(true); 
                }
                

            })
            if(this.produto[0].qtd == 0){
                prodCarrinho = false;  
                carrinho.splice(carrinhoIndex, 1);
                window.localStorage.setItem('carrinho', JSON.stringify(carrinho)); 
                window.location.reload(true); 
            }
        }

       
        
        if(prodCarrinho){     
            carrinho.splice(carrinhoIndex, 1, [this.produto[0]]);            
            window.localStorage.setItem('carrinho', JSON.stringify(carrinho)); 
            window.location.reload(true); 
            this.onLoad();   
        }   
        
    }
}