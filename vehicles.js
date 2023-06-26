/**Crie uma classe chamada Veiculo com as propriedades marca (string) e ano (number).
Crie uma classe chamada Carro que herde da classe Veiculo. Adicione à classe Carro a propriedade adicional portas (number).
Crie um método na classe Veiculo chamado obterDetalhes, que retorna uma string com as informações do veículo (marca e ano).
Crie um método na classe Carro chamado obterDetalhes, que sobrescreve o método na classe Veiculo e retorna uma string com as informações do carro (marca, ano e número de portas).
Crie um objeto da classe Carro e exiba no console as informações detalhadas do carro utilizando o método obterDetalhes. */

class Vehicles{
    constructor(brand, year){
        this.brand = brand;
        this.year = year;
    }
    get getDetails(){
        return `
        Marca: ${this.brand} 
        Ano: ${this.year}`
    }
}

class Car extends Vehicles{
    constructor(brand, year, doors){
        super(brand, year)
        this.doors = doors;
    }
    get getDetails(){
        return `
        Marca: ${this.brand} 
        Ano: ${this.year} 
        Nº de portas: ${this.doors}`
    }
}

const car = new Car('Ford', 2005, 5)
console.log(car.getDetails);