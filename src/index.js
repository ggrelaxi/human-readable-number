module.exports = function toReadable(number) {
    const singleNumbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const from10to19 = {
        0: "ten",
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen",
    };

    const from20to99 = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    const hundredNumber = {
        0: "",
        1: "one hundred",
        2: "two hundred",
        3: "three hundred",
        4: "four hundred",
        5: "five hundred",
        6: "six hundred",
        7: "seven hundred",
        8: "eight hundred",
        9: "nine hundred",
    };

    const data = number.toString().split("");
    if (data.length === 1) {
        return data.map((num) => singleNumbers[num]).join("");
    }

    if (data.length === 2) {
        const [tenth, single] = data;
        if (tenth === "1") {
            return `${from10to19[single]}`;
        }
        return `${from20to99[tenth]}${
            single === "0" ? "" : ` ${singleNumbers[single]}`
        }`;
    }

    if (data.length === 3) {
        const [hundred, tenth, single] = data;
        if (tenth === "0" && single === "0") return `${hundredNumber[hundred]}`;
        if (tenth === "0") {
            return `${hundredNumber[hundred]} ${singleNumbers[single]}`;
        }
        if (tenth === "1") {
            return `${hundredNumber[hundred]} ${from10to19[single]}`;
        }
        return `${hundredNumber[hundred]} ${from20to99[tenth]}${
            single === "0" ? "" : ` ${singleNumbers[single]}`
        }`;
    }
};
