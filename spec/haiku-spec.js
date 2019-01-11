import {Haiku} from './../src/haiku.js';

describe ('Haiku', function() {

    it('should count the amount of vowels in a string', function() {
        let haiku =  new Haiku("Hello world","Goodbye World", "End world");
        let stringArray = haiku.splitWordtoArray(haiku.line1);
        expect(haiku.countVowels(stringArray)).toEqual(3);
    })

    it('should check if any numbers are included', function() {
        let haiku =  new Haiku("Hello world","Goodbye World", "End world");
        let stringArray = haiku.splitWordtoArray(haiku.line1);
        expect(haiku.checksNumbers(stringArray)).toEqual(false);
    })

    it('should check if two vowels are together', function() {
        let haiku =  new Haiku("Hello world","Goodbye World", "End world");
        let stringArray = haiku.splitWordtoArray(haiku.line1);
        expect(haiku.areTwoVowelsTogether(stringArray)).toEqual(0);
    })

    it('should check if word ends in e', function(){
        let haiku =  new Haiku("Hello world","Goodbye World", "End world");
        let stringArray = haiku.splitWordtoArray(haiku.line1);
        expect(haiku.endsInE(stringArray)).toEqual(0);
    })

    it('should return syllable count', function(){
        let haiku =  new Haiku("Hello world","Goodbye World", "End world");
        let stringArray = haiku.splitWordtoArray(haiku.line1);
        expect(haiku.countSyllables(stringArray)).toEqual(3);
    })
})
