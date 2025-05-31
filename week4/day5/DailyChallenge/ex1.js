function isAnagram(str1, str2) {
    const cleanStr1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-z]/gi, '').toLowerCase();

    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
      return sortedStr1 === sortedStr2;

}
console.log(isAnagram("Astronomer", "Moon starer"));     
console.log(isAnagram("School master", "The classroom"));  
console.log(isAnagram("The Morse Code", "Here come dots")); 
console.log(isAnagram("Hello", "World"));                 
