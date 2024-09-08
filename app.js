function pesquisar(){
        // Seleciona a seção onde os resultados da pesquisa serão exibidos
        let section = document.getElementById("resultados-pesquisa");

        let campoPesquisa = document.getElementById("campo-pesquisa").value
        console.log(campoPesquisa)
    
        //Se o campo de pesquisa estiver vazio ou só com espaço, não mostre nada
        if(campoPesquisa == "" || campoPesquisa == " "){
            section.innerHTML = "Nada foi encontrado"
            return
        }
    
        campoPesquisa = campoPesquisa.toLowerCase();
    
        console.log(section); // Loga o elemento no console para verificação
      
        // Cria uma string vazia para armazenar os resultados da pesquisa
        let resultados = "";
    
        let titulo = "";
        let descrição = "";
        let categoria = "";
        let tag = "";
        let local = "";
      
        // Itera sobre cada objeto no array 'dados'
        for (let dado of dados) {
    
            titulo = dado.titulo.toLowerCase()
            descrição = dado.descrição.toLowerCase()
            categoria = dado.categoria.toLowerCase()
            tag = dado.tags.toLowerCase()
            local = dado.local.toLowerCase()
            
            //se titulo, descrição ou categoria includes campoPesquisa
            if(titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || categoria.includes(campoPesquisa) || tag.includes(campoPesquisa) || local.includes()){
                // Cria um HTML para cada item da pesquisa
          resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <h3>${dado.categoria}</h3>
            <h4>${dado.local}</h4>
            <p class="descricao-meta">${dado.descrição}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        `
            } 
        }
     
        //Se não houver resultados, mostre a mensagem
        if (!resultados){
            section.innerHTML = "<p>Nada foi encontrado</p>"
            return
    
        }
    
        // Atribui a string com os resultados ao conteúdo HTML da seção
        section.innerHTML = resultados;
}