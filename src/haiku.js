export class Haiku {
    constructor(line1, line2, line3){
     this.line1 = line1;
     this.line2 = line2;
     this.line3 = line3;   
     this.vowels = ["a","e","i","o","u","y"];
     this.numbers = ["0","1", "2", "3", "4", "5","6", "7", "8", "9"]
    }

    //checks for any numbers
    checksNumbers(string) {
        let res = false;
            if (this.numbers.includes(string)){
            res = true;
            }
        return res;
    }

    //splitters

    splitSentenceToArray(sentence){
        let sentenceArray = this.sentence.split(" ");
        return sentenceArray;
      }
    
    splitWordtoArray(word){
        let wordArray = word.split('');
        return wordArray;
    }

    //counters

    countVowels(stringArray){
    let count = 0;    
    for(let x = 0; x < stringArray.length; x++){
        if(this.vowels.includes(stringArray[x])) {
            count ++;
            }
     } return count;
    }

    areTwoVowelsTogether(stringArray){
     let count = 0;
     for(let x = 0; x < stringArray.length; x++){
        if(this.vowels.includes(stringArray[x]) && this.vowels.includes(stringArray[x + 1])) {
            count ++;
        }
     }
     return count;
    }

    endsInE(letterArray){
        let count = 0;
        let lastLetterIndex = letterArray.length;
        let lastLetter = letterArray[lastLetterIndex-1];
        if((lastLetter === "e"  && letterArray[lastLetterIndex - 2] != "l") || (lastLetter === "s"  && letterArray[lastLetterIndex - 2] === "e" && letterArray[lastLetterIndex - 3] !="l")){
          count = 1;
        }
        return count;
      }

    countSyllables(sentence) {
        let count = 0;
        let splitSentence = this.splitSentenceToArray(sentence);
        for(let x = 0; x < splitSentence.length; x++){
        let letterArray = this.splitWordtoArray(splitSentence[x]);
        let vowelCount = this.countVowels(letterArray);
        let exceptions = this.areTwoVowelsTogether(letterArray) + this.endsInE(letterArray);
        let total = vowelCount - exceptions;
        count += total;    
        }
        return count;
    }
   
}

// stringArray[x].match(/[AEOIUYaeiouy]/g)

// let test = new Haiku ("dry1", "world", "bye");

// let result = test.areTwoVowelsTogether(test.line1);

// console.log(result);

