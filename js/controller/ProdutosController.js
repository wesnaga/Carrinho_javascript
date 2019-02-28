class ProdutosController{

    constructor(){
        this.importarProdutos();
        this.listarProdutos = new ListarProdutos();
        this.getCarrinho();
        this.listarProdutos.getQuantidade();
        
    }

    
    importarProdutos(){
        let service = new ProdutoService();
        service.getProdutos();        
    }
    
    getCarrinho(){
        this.listarProdutos.onLoad();
    }

    adiciona(model){
        this.listarProdutos.adiciona(model);
        this.listarProdutos.getQuantidade();
    }
    
    
}