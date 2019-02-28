class CarrinhoService{

    getCarrinho(){
        this.produtos = JSON.parse(window.localStorage.getItem('carrinho'));
        this.carrinhoView = new CarrinhoView(document.querySelector('#carrinhoView'));
        this.carrinhoView.update(this.produtos);
    }
}