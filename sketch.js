//1

let testWord = "desordendepalabras";

function test(){

  const random = Math.random()
  if(random < 0.5){
    return - 1
  } else {
    return 1
  }
}

function Wcount(word) {

  let split = word.split('').sort(test)
  split.forEach(letter=>console.log(letter))
}
Wcount(testWord)

//2

let testA = "aguacate";
let testB = "arroz";
let testC = "Uva";
let testList = [
  "aguacate",
  "mandarina",
  "LIMON",
  "CoCo",
  "pera",
  "carne",
  "manzana",
];

function searcher(word) {

  return word.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace("0","o").toUpperCase();  
}
function searcherlist(word, wordList) {

  let currentWord = word;
  let normalizar = searcher(currentWord);
  const normalizarLista = [];
  for (let index = 0; index < wordList.length; index++) {
    normalizarLista.push(searcher(wordList[index]))
  }
  console.log(normalizarLista.includes(normalizar),'palabra: ${normalizar', normalizarLista)
}
searcherlist(testB, testList)

//3

let list = [
  "mango",
  "maiz",
  "uva",
  "arroz",
  "sancocho",
  "coco",
  "pera",
];

function LengthClassifier(words) {

  let total = 0;
  const wordsDiff = words.sort((wordA, wordB) => {
    if (wordA.length < wordB.length) {
     return -1;
    } else if (wordA.length > wordB.length) {
      return 1; 
    } else {
      return 0;
    }
});
wordsDiff.forEach(word => total += word.length);
const average = total / wordsDiff.length;
return {
  shortestWord: wordsDiff[0],
  longesWord: wordsDiff[wordsDiff.length - 1],
  average
};
}

console.log(LengthClassifier(list))

//4

let wordVerificationA = "arroz";
let wordVerificationB = "pera";
let wordVerificationC = "mango";
let wordVerificationD = "sandia";

function palindrome(word) {

  let palindomeWord = word.toLowerCase.split("").reverse.join("")
    if (palindomeWord === word.toLowerCase()){
        console.log(word + "is a palindromo")
    } else {
        console.log(word + "is not a palindromo")
    }
}

//5

let countobjects = {
  list:["maiz", "mango", "aguacate", "mandarina", "arroz", "uva"]
}

function lettersnumber(countobjects) {

  const list = countobjects.list;
  let vocals = 0;
  let consonant = 0;
  list.forEach(word => {
    word.split('').forEach(letter => {
      if (
        letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u'
      ) {
        vocals++;
       } else {
        consonant++;
       }       
    })
  })
  return [vocals, consonant];
}
console.log(lettersnumber(countobjects));

//6
let wordsA = ["pan", "con" ,"huevo", "lo", "mejor"];
let wordsB = ["aguacate", "con" ,"sal"];

function join(listA, listB) {

  newArray = [...listA, ...listB];
  return newArray
}
console.log(join(wordsA,wordsB));

//7

let wordxplorer = "amar";
let verfy = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(explorer, list) {

  result = []
  list.forEach((word, index) => {
      if(word.split("").every(letter => {
          return explorer.includes (letter);
      })) result.push(index)
  })
}

//8

let testObjMultiContainer = {
  listA : ["arroz", "perro", "gato", "mandarina", "salamandra", "huevo"],
  listB : ["uva", "jijijija", "sandia", "melon"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    
  let lista = objectMultiContainer.listA.concat(objectMultiContainer.listB); 
  lista.forEach(word => {
      let palActual = []
      let result = []
      word.split('').forEach(letter => {
          if (letra !== 'a'||
          letter !=='e'||
          letter !=='i'|| 
          letter !== 'o'|| 
          letter !=='u'){
              palActual.push(letter);
          }       
      }) 
      result.push(palActual.join(''))   
  }) 
  return {result}
}

//9

let someWordsToTest = ["mango", "arroz", "juanes", "sandia", "auto", "limon", "aguacate"];

function replaceX(words) {

  const replaced = words.map(word => {
      let wordchange;
      for(let i = word.length - 1; i >= 0; i--) {
          const letter = word.charAt(i);
          if(
              letter === 'a'||
              letter ==='e'||
              letter ==='i'|| 
              letter === 'o'|| 
              letter ==='u'
          ) {
            wordchange = word.substring(0, i) + 'X' +  word.substring(i+1 , word.length );
              break;
          }
      }
      return wordchange;
  })
  return replaced;
}

//10


let testListA = ["pera", "azucar", "arroz","radio", "mango"];
let testListB = ["arep", "racuza", "zora", "azul", "uva"];

function verify(listA, listB) {

  let numberongo = 0;
  let newB=[];
  for (let i = 0; i < listB.length; i++) {
      newB[i]=listB[i].split("").reverse().join("");
  }
  for (let i = 0; i < listA.length; i++) {
      for(let j = 0; j < newB.length; j++){
          if (newB[j] == listA[i]){

            numberongo++;

          }return numberongo;
      }
  }
  return {numberongo}
}
console.log(verify(testListA,testListB));
