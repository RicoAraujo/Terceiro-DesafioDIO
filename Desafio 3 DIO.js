
class ClasseDeHeroi {
    constructor(nomeDoHeroi, idadeDoHeroi, tipoHeroi, ataque) {
        this.nomeDoHeroi = nomeDoHeroi
        this.idadeDoHeroi = idadeDoHeroi
        this.tipoHeroi = tipoHeroi
        this.ataque = ataque
    }


    escrever() {

        console.log(`O ${this.tipoHeroi}atacou usando ${this.ataque}`)

    }

    descricao() {

        console.log(`Dados do Heroi: 
            Nome: ${this.nomeDoHeroi} 
            Idade: ${this.idadeDoHeroi} 
            Tipo: ${this.tipoHeroi} `
        )
    }

}


let MeuHeroi = new ClasseDeHeroi("Ryu", 30, "monge ", "Artes Marciais")

MeuHeroi.descricao()

MeuHeroi.escrever()