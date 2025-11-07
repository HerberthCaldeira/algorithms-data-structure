/**
 * The Two Pointer Technique
 *
 *  - The idea is to use two pointers to traverse the same array
 *  - The benefit is saving space and time
 *  - When to use it? When we need to manipulate an array or list
 * by comparing elements with each other. This technique is efficient
 * because we can process two elements per loop instead of just one.
 *  - Implementation types:
 * 1. One pointer at the beginning of the array and one at the end
 * 2. Both pointers at the beginning, but jumping further in each iteration.
 */

 /*
 * With both Pointer at the begin
 */

const invertString = (str: string) => {
  console.log('invertString')
  let p1 = 0; // Pointer 1
  let p2 = 0;// Pointer 2
  let res = '';

  for (let p1 = 0; p1 <= str.length ; p1++){
    if(str[p1] == ' ' || p1 == str.length){
      res += str
          .slice(p2, p1)
          .split('')
          .reverse()
          .join('')
      if(p1 != str.length) res += ' ';
      p2 = p1 + 1
    }
  }

  console.log(str)
  console.log("Output: " + res)

}


invertString("Eu já fiz isso e se eu não prestar atenção");

const invertStringWithOutJavaScriptBuildInFunctions = (str: string) => {
  console.log('invertStringWithOutJavaScriptBuildInFunctions')
  let chars = str.split('');
  let p1 = 0; // Pointer 1
  let p2 = 0;// Pointer 2

  for (let p1 = 0; p1 <= chars.length ; p1++){
    if(str[p1] == ' ' || p1 == str.length){

      let beginWord = p2;
      let endWord = p1 - 1;

      while(beginWord <= endWord){
        //troca
        [chars[beginWord], chars[endWord]] = [chars[endWord], chars[beginWord]]
        beginWord++;
        endWord--;
      }

      p2 = p1 + 1
    }
  }

  console.log(str)
  console.log("Output: " + chars.join(''))

}

invertStringWithOutJavaScriptBuildInFunctions("Eu já fiz isso e se eu não prestar atenção");
