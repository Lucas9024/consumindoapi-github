const ul = document.querySelector("ul");

//função que vai pegar a api do github

function getApiGitHub(){

    //fazendo um fetch para consumir a api do github

    fetch("https://api.github.com/users/Lucas9024/repos")
    .then(async res => {

    //verificando se a resposta da api é diferente de ok ou não

    if(!res.ok){

        //vai aparecer um erro na minha resposta, caso seja diferente de ok
        throw new error(res.status)
    }

    //criando uma variável para esperar os dados em json da resposta
    var data = await res.json()

        //criando um mapa que irá mapear o item dos meus elementos html
    data.map(item => {
        let li = document.createElement('li');

        //criando uma template string para pegar o item, que será os dados da minha api
        li.innerHTML = `
        <strong>${item.name.toUpperCase()}</strong>
        <span>URL: ${item.url}</span>
        <span>
        <!--para criar o formato de dia mes e ano-->
        ${Intl.DateTimeFormat('pt-br')
        .format(new Date(item.created_at))}
        </span>
        `
        ul.appendChild(li)
    })

    //retorno caso haja algum erro no fluxo do código acima

    }).catch(e => console.log(e))


}

getApiGitHub();