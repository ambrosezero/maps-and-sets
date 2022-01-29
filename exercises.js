// quick question #1
{ 1, 2, 3, 4 }

// quick question #2
'ref'

// quick question #3
[
    [[1, 2, 3], true],
    [[1, 2, 3], false]
]

// hasDuplicate
let hasDuplicate = (arr) => {
    // ?????is there a better way to declare a set?????
    let arrSet = new Set(arr);
    return arrSet.size != arr.length
}

// vowelCount
function isVowel(char) {
    return "aeiou".includes(char);
}

function vowelCount(str) {
    const vowelMap = new Map();
    for (let char of str) {
        let lowerCaseChar = char.toLowerCase()
        if (isVowel(lowerCaseChar)) {
            if (vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}




    // let vowelMap = new Map()
    // str.reduce((accum,letter)=>{
    //     if ("aeiou".includes("letter") {

    //     }
    // },0)


