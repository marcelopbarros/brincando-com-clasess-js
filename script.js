var azul = 'blue'
var preto = 'black'
var vermelho = 'red'

class Caneta {

    constructor(marca, cor) {
        this.marca = marca
        this.cor = cor
        this.tinta = 10
        this.tampada = true
    }

    escrever(texto) {
        if (this.tampada) {
            alert('A caneta está tampada')
        } else {
            if (this.tinta > 0) {
                var papel = document.getElementById('papel')
                var frase = document.createElement('div')
                frase.style.color = this.cor
                this.tinta = this.tinta - 1
                frase.innerHTML = texto
                papel.appendChild(frase)
            } else {
                alert('A tinta da caneta acabou')
            }
        }
    }

    recarregar() {
        this.tinta = 10
    }

    destampar() {
        this.tampada = false
    }

    tampar() {
        this.tampada = true
    }
}

var canetaMurilo = new Caneta('Bic', vermelho)
var canetaFelipe = new Caneta('Compactor', azul)
var canetaMarcelo = new Caneta('SpringBest', preto)

canetaFelipe.destampar()
canetaFelipe.escrever('O que vamos fazer')
canetaFelipe. tampar()

canetaMurilo.destampar()
canetaMurilo.escrever('Cadê o Perry?')
canetaMurilo.tampar()

canetaMarcelo.destampar()
canetaMarcelo.escrever('E aí, o que acharam do exercício?')
canetaMarcelo.escrever('Gostaram?')
canetaMarcelo.tampar()

canetaMurilo.destampar()
canetaMurilo.escrever('Siiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiim!!!!!!!')
canetaMurilo.tampar()

console.log(canetaFelipe)
console.log(canetaMurilo)
console.log(canetaMarcelo)
