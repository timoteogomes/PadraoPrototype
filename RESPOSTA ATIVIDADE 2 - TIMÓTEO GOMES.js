// Classe abstrata Veiculo
function Veiculo(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
  }
  
  Veiculo.prototype.clone = function () {
    // Cria uma instância clonada usando o construtor e os atributos atuais
    return new this.constructor(this.modelo, this.marca, this.cor, this.numeroRodas);
  };
  
  Veiculo.prototype.represent = function () {
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
  };
  
  // Subclasse Carro
  function Carro(modelo, marca, cor, numeroRodas, ano, numeroPortas) {
    Veiculo.call(this, modelo, marca, cor, numeroRodas);
    this.ano = ano;
    this.numeroPortas = numeroPortas;
  }
  
  Carro.prototype = Object.create(Veiculo.prototype);
  Carro.prototype.constructor = Carro;
  
  // Subclasse Moto
  function Moto(modelo, marca, cor, numeroRodas, ano, numeroPortas) {
    Veiculo.call(this, modelo, marca, cor, numeroRodas);
    this.ano = ano;
    this.numeroPortas = numeroPortas;
  }
  
  Moto.prototype = Object.create(Veiculo.prototype);
  Moto.prototype.constructor = Moto;
  
  // Classe Aplicacao
  function Aplicacao() {
    this.veiculos = [];
  }
  
  Aplicacao.prototype.criarVeiculos = function () {
    // Criar uma variedade de veículos
    const carro1 = new Carro("Sedan", "Toyota", "Azul", 4, 2022, 4);
    const carro2 = new Carro("Hatchback", "Volkswagen", "Prata", 4, 2023, 5);
    const carro3 = new Carro("Sedan", "Volkswagen", "Azul", 4, 2024, 6);
    const moto1 = new Moto("Esportiva", "Yamaha", "Vermelho", 2, 2021, 0);
    const moto2 = new Moto("Cruiser", "Harley-Davidson", "Preto", 2, 2022, 0);
    const moto3 = new Moto("Esportiva", "Yamaha", "Verde", 2, 2023, 0);
  
    // Clonar os veículos e adicioná-los ao array veiculos
    this.veiculos.push(carro1.clone());
    this.veiculos.push(carro2.clone());
    this.veiculos.push(carro3.clone());
    this.veiculos.push(moto1.clone());
    this.veiculos.push(moto2.clone());
    this.veiculos.push(moto3.clone());
  };
  
  Aplicacao.prototype.clonarVeiculos = function () {
    // Clonar os veículos e retornar um novo array com clones
    const clones = this.veiculos.map((veiculo) => veiculo.clone());
    return clones;
  };
  
  Aplicacao.prototype.imprimirRepresentacoes = function (veiculos) {
    veiculos.forEach((veiculo) => {
      console.log(veiculo.represent());
    });
  };
  
  // Uso da aplicação
  const app = new Aplicacao();
  app.criarVeiculos();
  const clones = app.clonarVeiculos();
  app.imprimirRepresentacoes(clones);
  