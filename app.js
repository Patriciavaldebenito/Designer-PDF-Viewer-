// Complete the designerPdfViewer function below.
let h1 = [1,3,1,3,1,4,1,3,2,5,5,5,1,5,5,5,5,5,5,5,5,5,5,5,5,1];
let word = "valdebeni";
// Constraints
/* 
- el largo de y = 26            condition_largeArray ok
- 1 <= h[i] <=7                 condition_height  ok
- string_lower.length <= 10     condition_largeWord
*/

function designerPdfViewer(h, word) {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let largeWord = word.length;
  let largeHeight = h.length;

  const condition_largeArray = () => {
      if( largeHeight === 26 ){
          return true;
      }
      else{
          console.log('ERROR,  La lista de alturas, debe contener un largo de 26 medidas');
      }
  }

  const condition_largeWord = () => {
    if( largeWord <= 10 ){
        return true;
    }
    else{
        console.log(`ERROR, largo del string. La cantidad de letras debe ser <= 10`);
    }
  }

  const condition_heightCaracter = () => {
      let condition = false;
      for(let i =0; i<=h.length ;i++){
          if(h[i]<1 && h[i]>7){
            console.log(`El número ${h[i]} no cumple el rango de alturas. 1<= h[i] <=7`);
            return false
            
          }else{
            condition = true;
          }
    }
    return condition;
  }

  let condition_1 = condition_largeArray();
  let condition_2 = condition_largeWord();
  let condition_3 = condition_heightCaracter();


  const maxHeight = () => {
    let heightWord = [];
    let array_word = word.split("");
    let mayor = 0;

    for (let i = 0; i <= alphabet.length; i++) {
      array_word.map((e) => {
        if (e === alphabet[i]) {
          heightWord.push(h[i]);
        }
      });
    }

    mayor = Math.max(...heightWord);
    //     console.log(mayor);
    return mayor;
  };
  let height = maxHeight();

  const  calculeArea = (width, height) => {
     return  width * height;
  }

  if(condition_1 && condition_2 && condition_3){
    let area = calculeArea(largeWord, height);

    return area; 
  }


}

let result = designerPdfViewer(h1, word);
console.log(result); // TERMINAL 
                     //  node app.js 

