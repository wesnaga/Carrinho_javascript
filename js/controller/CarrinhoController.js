class CarrinhoController {

    constructor(){
        this.importarProdutos(); 
        this.listarCarrinho = new ListarCarrinho();
        this.getCarrinho();
        this.listarCarrinho.getQuantidade();
    }

    importarProdutos(){
        let service = new CarrinhoService();
        service.getCarrinho();        
    }

    getCarrinho(){
        this.listarCarrinho.onLoad();
    }

    limpar(){
        window.localStorage.clear();    
        window.location = "index.html";     
    }

    adiciona(model){
        this.listarCarrinho.adiciona(model);
        this.listarCarrinho.getQuantidade();
    }

    remove(model){
        this.listarCarrinho.remove(model);
        this.listarCarrinho.getQuantidade();
    }
}