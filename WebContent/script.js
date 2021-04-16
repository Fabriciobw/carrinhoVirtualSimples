	


	const items = [{id: 0, nome: 'Desktop', valor: 1600.00, img: 'imagens/imagem1.jpg', quantidade:0, btn: 0},
					{id: 1, nome: 'Mouse gamer',valor: 150.00, img: 'imagens/imagem2.jpg', quantidade:0, btn: 1},
					{id: 2, nome: 'Iphone x',valor: 4000.00, img: 'imagens/imagem3.jpg', quantidade:0, btn: 2},
					{id: 3, nome: 'Notebook',valor: 2000.00, img: 'imagens/imagem4.jpg', quantidade:0, btn: 3}]


		pegarDados = () =>{

				for(var i = 0; i< items.length; i++){
					if(sessionStorage.getItem(items[i].id)){
						let qtd = sessionStorage.getItem(items[i].id)
						items[i].quantidade = qtd;
					}
					
				}
			}
			pegarDados()

		 
		inicializarLoja=()=>{


		var containerProdutos = document.getElementById('produtos');
		items.map((val)=>{
			containerProdutos.innerHTML +=`
			<div class = "produto-single">
			<img src="`+val.img+`"/>
			<p> `+val.nome+`<p/>
			<p> Valor R$`+val.valor+`<p/>
			<a key="`+val.id+`" class="link btn btn-primary" href="#">Adicionar ao carrinho!<a/>

			</div>
			`;
	
		})
		}
		 		 inicializarLoja();
	  
		
			 var links = document.getElementsByTagName('a');

		 	
			for(var i = 0; i< links.length; i++){
	   			links[i].addEventListener("click", function(){
	   		let key = this.getAttribute('key');
	   		items[key].quantidade++;
	   		sessionStorage.setItem(items[key].id,items[key].quantidade);
	   		return false;


			  })
			  }
			


			


	   	

		


	   