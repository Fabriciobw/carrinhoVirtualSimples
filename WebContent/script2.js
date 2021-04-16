





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



	atualizarCarrinho = () =>{
	   	var containerCarrinho = document.getElementById('carrinho');
	   	containerCarrinho.innerHTML = "";

	   	items.map((val)=>{
	   		if(val.quantidade >0){
	   			containerCarrinho.innerHTML += `
			<div class = "paragrafo-div"><p> `+val.nome+` | quantidade: `+val.quantidade+`</p></div><button name="`+val.btn+`" onclick= "window.location.reload()"type="button"class="btn btn-danger botao-position">Deletar</button>

	   			<hr>	


	   			`;

	   		}
	   		})

	   	}
	   	atualizarCarrinho();


	   	total = () =>{

	   		var total = 0
	   		items.map((val)=>{

	   			total+=val.valor*val.quantidade

	   		})
	   		var container = document.getElementById('carrinho');
	   		container.innerHTML += `
			<p class= "total"> Total: R$`+total+`,00 reais</p>
			`

	   	}
	   	total()
	

	 var button =  document.getElementsByTagName('button');
			for(var i = 0; i< button.length; i++){
	   			button[i].addEventListener("click", function(){
			 
	   		let key = this.getAttribute('name')

	   		sessionStorage.setItem(items[key].id,--items[key].quantidade);
	   			   		window.location.reload()
		})
	   		}
	   