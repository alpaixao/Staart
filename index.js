// ARRAY - são utilizados para armazenar mais de um valor em uma única variável

//Quando falarmo de arrays estamos falando de vetores (identificado em um linha) e matriz (multidimensional)

const saldoGabriel = 1000;
const saldoVanessa = 105500;

const total = saldoGabriel + saldoVanessa;
console.log(total);

 
const saldoContas = [100, 200, 40, 1.9, 300, 1000, 9.99];

//funcao para soma de todos os itens do array (.reduce)

const total = saldoContas.reduce((acumulador, valor) => acumulador + valor);
console.log(total);

 
//podemos criar um array dentro de outro array - array multidimensional

const saldoContas = [["Banco 1", 100], [ "Banco 2", 200], ["Banco 3", 40], ["Banco 4", 1.9], ["Banco 5", 300], ["Banco 6", 1000], ["Banco 7", 9.99];


// vamos fazer uma matriz de 3 dimensoes
var bandeiras = [
  ['Brasil', ['Verde', 'Amarelo', 'Azul', 'Branco']],
  ['Canadá', ['Vermelho', 'Branco']],
  ['México', ['Verde', 'Branco', 'Vermelho']],
  ['EUA', ['Azul', 'Branco', 'Vermelho']],
];

console.log(bandeiras[0][1][0]);

let meuArray = ['Aldery', 'Paixao'];
let meuArray2 = new Array();
let meuArray3 = new Array('Aldery'); // posso adicionar o limite que eu quero, bem colocar o noome que desejo encontrar

console.log(meuArray);
console.log(meuArray2);
console.log(meuArray3);
//podemos usar ao inves do console.log o console.table, que ira mostar um formato tabular, sendo muito mai facil de vizualizar


console.table(meuArray);
console.table(meuArray2);
console.table(meuArray3);
 
// adicionar e remover itens do array

let frutas = new Array('Abacaxi');
// pusho acrescenta no INÍCIO do array
frutas.push('banana');
frutas.push('maca');
frutas.push('morango');
frutas.unshift('tangerina'); // a função UNSHIFIT vai incluir item no início do array

console.table(frutas);

console.log(frutas.length); // LENGTH mostra o tamanha total do array

frutas.pop(); // remove ítens do array - automaticamente ele remove o ultimo ítem do array

console.table(frutas);

frutas.shift();
console.table(frutas); // exclui o PRIMERIRO ítem do array

frutas.splice(2); //  exclui determinado item no meio do array, porém ele exclui do numero para baixo TUDO. Entretanto,  se colocar a virgula e inserir outro número ele vair excluir os proximos, na quantidade do número colocado.

console.table(frutas);

//se eu quiser saber qual fruta foi removida eu crio uma const para frutas.splie()

const frutaRemovida = frutas.splice(2, 1);
console.log(frutaRemovida);

// o splice tambem serve para substituir. ex.

const frutaRemovida = frutas.splice(2, 1, 'fruta do conde');
console.table(frutas);

const redesSociais = [
  'Instagram',
  'Youtube',
  'Facebook',
  'TikTok',
  'Twitter',
  'LinkedIn',
  'Pinterest',
];

 
const tiktok = redesSociais.indexOf('TikTok'); // indexOf serve para achar se determinado intem encontra-se no array
console.log(tiktok);

//para saber se determinado intem encontra-se no array usa o  INCLUDES, caso nao tenhoa retorna false, caso positivo true

console.log(redesSociais.includes('Tumblr'));

for (let i = 0; i < redesSociais.length; i++) {
  console.log(redesSociais[i]);
}
 
//temos tb o for in = mostra a lista e o indexador(numero)
 
for (const i in redesSociais) {
  console.log(`${i} : ${redesSociais[i]}`);
}
 
// temos tb o for of - mostra a lista dentro do array

for (const valor of redesSociais) {
  console.log(valor);
}
 

//temos o forEach

redesSociais.forEach(valor, Indice, redes) => {
  console.log(valor);
  console.log(indice);
  console.log(redes);
}  

// usando While

let i = 0;
while (i < redesSociais.length) {
  i++;
  console.log(redesSociais[i]);
}
 
// usando do while

let i = 0;

do {
  console.log(redesSociais[i]);
  i++;
} while (i < redesSociais.length);
 

//OPERAÇÕE DE ARRAYS USANDO CALLBACKS

//MAP

const aPAgarEmReais = [10, 20, 40, 100];
const cotaaoDolar = 5;
const aPagarEmDolar = aPAgarEmReais.map((valor) => valor * cotaaoDolar); // multiplica todos os mumero por 3, ao invés de usar o for(laço)
console.table(aPAgarEmReais);
console.table(aPagarEmDolar);
 

// FILTER

const aPAgarEmReais = [10, 20, 40, 100];
const cotaaoDolar = 5;
const aPagarVanessa = aPAgarEmReais.filter((valor) => valor > 30); // mostra os valores acima de 30 reais
console.table(aPAgarEmReais);
console.table(aPagarVanessa);
 
// FIND

const aPAgarEmReais = [10, 20, 40, 100];
const cotaaoDolar = 5;
const aPagarVanessa = aPAgarEmReais.findIndex((valor) => valor > 30); // mostra o primeiro valor enontrado e para, ele nao continua. Nesse caso ele não motra o índice, somente o valor,para mostra o indie, deve usar o findIndex
console.table(aPAgarEmReais);
console.table(aPagarVanessa);
 

// REDUCE -  usa o acumulador em todo array

const aPAgarEmReais = [10, 20, 40, 100];
const totalApagar = aPAgarEmReais.reduce(
  (acumulador, valor) => acumulador + valor,
  1000 // posso colocar 0 ou  colocar qq outro valor, ele acrescenta na soma.
);

// mostra o primeiro valor enontrado e para, ele nao continua. Nesse caso ele não motra o índice, somente o valor,para mostra o indie, deve usar o findIndex
console.table(aPAgarEmReais);
console.table(totalApagar);
 

//EVERY - ele testa se todos elementos do array estão na mesma condição.

const aPAgarEmReais = [10, 20, 40, 100];
const contasBaixas = aPAgarEmReais.every((valor) => valor < 1000); // todas as contas tem que atender ao critério (<10)
console.table(aPAgarEmReais);
console.table(contasBaixas);
//EVERY - ele testa se todos elementos do array estão na mesma condição.

const aPAgarEmReais = [10, 20, 40, 100];
const contasBaixas = aPAgarEmReais.every((valor) => valor < 1000); // todas as contas tem que atender ao critério (<10)
console.table(aPAgarEmReais);
console.table(contasBaixas);
 
//some- ele testa se todos elementos do array estão na mesma condição. Esse retorna verdadeiro se ao menos 1 condição for verdadeira

const aPAgarEmReais = [10, 20, 40, 100];
const temcontaalta = aPAgarEmReais.some((valor) => valor < 10); // todas as contas tem que atender ao critério (<10)
console.table(aPAgarEmReais);
console.table(temcontaalta);
 
//CONCAT -  concatena dois arrays

const contasVanessa = [10, 20, 30, 40];
const contasGabriel = [5, 6, 7, 8];
const contasCDFs = contasVanessa.concat(contasGabriel);

console.table(contasCDFs);


//FILL - PREENCHE TODOS OS VALORE DE UM ARRAY COM UM ÚNICO VALOR DE UMA SÓ VEZ

const contasVanessa = [10, 20, 30, 40];
const contasGabriel = [5, 6, 7, 8];
const contasCDFs = contasVanessa.concat(contasGabriel);

//FILL - PREENCHE TODOS OS VALORE DE UM ARRAY COM UM ÚNICO VALOR DE UMA SÓ VEZ

contasCDFs.fill(0);
console.table(contasCDFs);
 
// funcao FLET - cria um novo array com todos os elementos de um sub array concatenados nele.

const contasVanessa = [10, 20, 30, 40, [1, 2, 3, 4]];
const novasContasVanessa = contasVanessa.flat();
console.table(novasContasVanessa);


// funcao short - coloca os arrays em ordem crescente, porém números ele nao ordena corretamente.

const clientes = ['vanessa', 'Gabriel', 'Andreia', 'Juliana', 'Gilberto'];
console.table(clientes);
clientes.sort();
console.table(clientes);

const numeros = [10, 5, 1000, 500000, 1.99];

console.table(numeros);
numeros.sort();
console.table(numeros);
 
// para deixar em ordem é preciso fazer uma função de callback
const numeros = [10, 5, 1000, 500000, 1.99];

console.table(numeros);
numeros.sort((a, b) => b - a); // se quiser na forma desrescente coloca b - a.
console.table(numeros);
 
// - imaginemos que cada cliente possui estrelas, e quem tiver mais estrela vai ter  prioridade.

const clientes = [
  ['vanessa', 4],
  ['Gabriel', 1],
  ['Andreia', 3],
  ['Juliana', 5],
  ['Gilberto', 2],
];
console.table(clientes);
clientes.sort((a, b) => b[1] - a[1]); // [1] corresponde o segundo elemento do array que corresponde ao número, pois o [0] seria referente ao nome.
console.table(clientes);
 

//OBJETS E JSON

// objeto  - é uma coleção de propriedade.  A propriedade é uma associação entre um nome que chamamo de chave e um valor. esse valor pode ser uma função.

// o java script possui duas forms para criacao de objeto - OBJETO E JSON (java script objetive notacion)

const programador = {
  nome: 'Gabriel',
  nascimento: '04/07/1980',
  casado: true,
  linguagensFavortira: ['JavaScript', 'PHP', 'Python'],
  trabalhoDesde: 1996,
};
console.table(programador);
console.log(programador['nascimento']); // mostra o valor que esta em nascimento
 
//CLASSES - COM ELA É POSSÍVEL DEFINIR UMA ESTRATURA PADROINZADA DE COMO DEVE SER O OBJETO. TANTO NO STATUS QUE SAO AS PROPRIEDADES COMO NO TRATAMENTO QUE SAO OS METODOS

class programador {
  constructor( // é nele que se define as propriedades que vamos utilizar no objeto
    nome,
    nascimento,
    casado,
    linguagensFavoritas = [],
    trabalhoDesde = null
  ) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.casado = casado;
    this.linguagensFavoritas = linguagensFavoritas;
    this.trabalhoDesde = trabalhoDesde;
  }
}
// criando um objeto gabriel
const gabriel = new programador(
  'Gabriel Froes',
  '04/07/1980',
  true,
  ['JavaScript', 'PHP', 'Python'],
  1996
);
// criando um objeto vanessa
const vanessa = new programador(
  'Aldery Paixao',
  '07/03/1983',
  true,
  ['teste', 'JavaScript', 'PHP', 'Python'],
  1996
);

console.table(gabriel);
console.table(vanessa);

// posso acessar cada propeirdade de forma individual.ex.

console.table(gabriel.nome);
console.table(vanessa.linguagensFavoritas);

// USANDO O FOR in

for (const propriedade in vanessa) {
  console.log(`${propriedade}: ${vanessa[propriedade]}`);
}

// PILHAS (STACKS) - SÃO ESTRUTURAS DE DADOS LINEARES, SERVE PARA EXCLUSÃO E REMOÇÃO DE ÍTENS
//UMA PILHA SEGUE O PRINCIPIO LIFO- LAST IN FOR OUT - O ULTIMO ÍTEM A ENTRAR VAI SER O PRIMEIRO A SAIR. SÓ É POSSIVEL ACESSAR O ULTIMO ÍTEM DA PILHA
// PARA EU ACESSAR O PROXIMO ÍTEM, O ULTIMO TEM QUE SAIR. O FINAL DA PILHA É CONHEIDO COMO TOPO E O INÍCIO É CONHECIDO COMO BASE

// principais operações em pilhas
//push - inserir novos elementos
//pop - remorver elementos
//top/peek - retornar elementos
// isEmpty  - retorna um valo do tipo Boolean indicando se a pilha está ou não vazia
// isFull - retorna um valor do tipo Boolean indicando se a pilha está ou não cheia

class Pilha {
  constructor() {
    this.itens = [];
  }
  push(item) {
    // para acrescentar um ítem
    this.itens.push(item);
  }
  pop() {
    // para remover um ítem da lista
    this.itens.pop();
  }
  top() { // PARA SABER O ÍTEM QUE ESTA NO TOPO DA PILHA
    return this.itens[this.itens.length - 1];
  }
  isEmpty() {
    return this.itens.length == 0;
  }
}
const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.push(40);

pilha.pop();
console.table(pilha.isEmpty()); //  aqui, após o pilha. foi mudado para tetar o pop, push e isEmpty


//FILAS E DEQUES

//FILAS SAO ESTRUTRAS LINEARES PARECEIDAS COMO ARRAYS E LISTAS , PORÉM SAO MAIS RÍGIDAS PARA ENTRADA E SAÍDAS DE DADOS.
//AS REGRAS SEGUE O SISTEMA FIFO - FIRST IN FIRST OUT - O PRIEMEIRO ELEMENOA ENTRAR, SERÁ O PRIMEIRO A SAIR.

//PRINCIPAIS OPERAÇÕES EM FILAS
//ENQUEUE -  insere um novo elemento
//DEQUEUE -  remove o primeiro elemento
//FRONT/PEEK -  retorna o primeiro elemento
//isEmpty - retorna um valor do ipo boolean indicando se a ila etá ou não vazia
// isFull -  retorna um valor do tipo boolean indicando se a fila está ou não cheia
//rear - retorna ultimo elemento da fila (calda)


//  ENQUEUE

class Fila {
  constructor() {
    this.itens = [];
  }
  enqueue(item) { // inserir um novo elemento
    this.itens.push(item);
  }
  isEmpty() {
    // para saber se a fila esta vazia
    return this.itens.length == 0; // se for igual a zero a fila esta fazia
  }
}
const fila = new Fila();
console.log(fila.isEmpty()); // vai aparecer true, pois a fila ainda está vazia
fila.enqueue('ferrari');
fila.enqueue('fusca');
fila.enqueue('Del Rey');
fila.enqueue('HB20');

console.table(fila.itens);

//para saber se a fila esta vazia usamos o isEmpty
console.log(fila.isEmpty()); // vair aparecer false , pois a fila nao esta vazia
 

// DEQUEUE - remove o primeiro elemento

class Fila {
  constructor() {
    this.itens = [];
  }
  enqueue(item) {
    // inserir um novo elemento
    this.itens.push(item);
  }
  isEmpty() {
    // para saber se a fila esta vazia
    return this.itens.length == 0; // se for igual a zero a fila esta fazia
  }
  dequeue() {
    if (this.isEmpty()) return undefined; // se estiver fazio retorna undefined

    return this.itens.shift();
  }
  front() {// -  front (retorna o primeiro elemento) 
    return this.itens[0];
  }
  rear() { //e rear (retorna ultimo elemento da fila (calda))
    return this.itens[this.itens.length - 1];
  }
}
const fila = new Fila();
console.log(fila.isEmpty()); // vai aparecer true, pois a fila ainda está vazia
fila.enqueue('ferrari');
fila.enqueue('fusca');
fila.enqueue('Del Rey');
fila.enqueue('HB20');
fila.dequeue(); // retira o primeiro elemento da fila
console.table(fila.itens);
console.log(fila.isEmpty());

console.log(fila.front());
console.log(fila.rear());



// DEQUES -

// insertFront  - insere um elemento na frente
// insertLast - insere um elemeno na cauda
// deleteFront - remove o elemento que está na frente
// deleteLast -  remove o elemento que está na cauda
// front - retorna o elemento que está na frente
// rear - retorna o elemento que esta na cauda
//isEmpty -  retorna um valor do tipo Boolean indcando se o deque esta ou não vazio
//isFull -  retoanr um valot do tio Boolean indicando se o deque está ou não cheio.

class Deque {
  constructor() {
    this.itens = [];
  }
  insertFront(item) {
    return this.itens.unshift(item);
  }
  insertLast(item) {
    return this.itens.push(item);
  }
  deleteFront() {
    if (this.isEmpty()) return undefined;
    return this.itens.shift();
  }
  deleteLast() {
    if (this.isEmpty()) return undefined;
    return this.itens.pop();
  }
  isEmpty() {
    return this.itens.length == 0;
  }
  front() {
    return this.itens[0];
  }
  rear() {
    return this.itens[this.itens.length - 1];
  }
}

const deque = new Deque();
deque.insertFront('ferrari');
deque.insertFront('fusca');
deque.insertFront('Del Rey');
deque.insertLast('kombi');
deque.insertLast('vectra');

deque.deleteFront();
deque.deleteLast();

console.table(deque.itens);

console.log(deque.front());
console.log(deque.rear());


// listas encadeadas - listas ligadas -  ex. trem (cada vagao é um elemento e cada ligacao entre um deles é o ponteiro que indica o elemento)
// o primeiro elemento é chamado de head (cabeça)
// o ultimo elemento é conhecido como undefined

//princiais operações em lista
//insertion - adiciona elementos (insertFirt, insertLast, insertAt)
//deletion - remove elementos (deleteAt)
//traversal - percorre por cada elemento
//search - busca um elemento específico (searchAt)

// existe lista encadeadas simples,  duplamente encadeadas circular e ordenadas

// LISTA ENCADEADAS SIMPLES

class No {
  constructor(elemento) {
    this.elemento = elemento;
    this.proximo = undefined;
  }
}

class ListaEncadeada {
  constructor() {
    this.head = undefined;
  }

  insertFirst(elemento) {
    const novo = new No(elemento);
    let atual;
    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      novo.proximo = atual;
      this.head = novo;
    }
    return elemento;
  }
  insertLast(elemento) {
    const novo = new No(elemento);
    let atual;
    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novo;
    }
    return elemento;
  }
  searchAt(posicao) {
    let atual = this.head;
    for (let i = 0; i < posicao && atual; i++) {
      atual = atual.proximo;
    }
    return atual;
  }
  insertAt(elemento, posicao){
  const novo = new No(elemento)
  if (posicao == 0) {
    this.insertFirst(elemento)
  } else {
    const anterior = this.searchAt(posicao -1);
    const atual = anterior.proximo;
    novo.proximo = atual;
    anterior.proximo = novo;

  }
  return elemento;
  }
}
const trem = new ListaEncadeada();
console.log(trem.insertFirst('Locomotiva')); // insere um nó no início da lista
console.log(trem.insertLast('vagao1')); // insere um nó no final da lista
console.log(trem.insertLast('vagao2'));
console.log(trem.searchAt(2));
