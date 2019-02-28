class ProdutoService{
    
    getProdutos(){

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'mock/teste.json');

        xhr.onreadystatechange = () => {
            
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    this.produtos = JSON.parse(xhr.responseText);
                    this.produtosView = new ProdutosView(document.querySelector('#produtosView'));
                    this.produtosView.update(this.produtos);
                }else{
                    console.log('Não foi possivel obter os dados');
                    console.log(xhr.responseText);
                }
            };
        };        
        xhr.send();
    }
     
}

    


