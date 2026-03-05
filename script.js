function convertToRoman(num) {
    if (num === 0) return ""; // Roman numerals have no 0

    const romanNumerals = [
        ['C\u0305', 100000], // 100,000 (using overline notation)
        ['X\u0305C\u0305', 90000], // 90,000
        ['L\u0305X\u0305', 50000], // 50,000
        ['X\u0305L\u0305', 40000], // 40,000
        ['X\u0305', 10000], // 10,000
        ['MX\u0305', 9000],  // 9,000
        ['V\u0305', 5000],  // 5,000
        ['MV\u0305', 4000], // 4,000
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let result = "";

    for (let [roman, value] of romanNumerals) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result;
}

// Uncomment to test
// console.log(convertToRoman(14)); // XIV
// console.log(convertToRoman(798)); // DCCXCVIII
// console.log(convertToRoman(36)); // XXXVI

// do not edit below this line
module.exports = convertToRoman;