/**
 * @param {number} num
 * @return {string}
 */
 var numberToWords = function(num) {
    if (num === 0) return 'Zero';
    let numString = num.toString();
    let numArr = [];
    let count = 0;
    let threesArr = [];
    for (let i=numString.length-1; i>=0; i--) {
        if (count === 3) {
            numArr.push(threesArr);
            count = 1;
            threesArr = [numString[i]];
        } else {
            threesArr.push(numString[i]);
            count++;
        }
    }
    let wordDict = {
        1: {
            0: '',
            1: 'One',
            2: 'Two',
            3: 'Three',
            4: 'Four',
            5: 'Five',
            6: 'Six',
            7: 'Seven',
            8: 'Eight',
            9: 'Nine',
        },
        2: {
            0: '',
            1: 'Ten',
            2: 'Twenty',
            3: 'Thirty',
            4: 'Forty',
            5: 'Fifty',
            6: 'Sixty',
            7: 'Seventy',
            8: 'Eighty',
            9: 'Ninety',
        },
        3: {
            0: '',
            1: 'One Hundred',
            2: 'Two Hundred',
            3: 'Three Hundred',
            4: 'Four Hundred',
            5: 'Five Hundred',
            6: 'Six Hundred',
            7: 'Seven Hundred',
            8: 'Eight Hundred',
            9: 'Nine Hundred',
        },
        4: {
            0: 'Ten',
            1: 'Eleven',
            2: 'Twelve',
            3: 'Thirteen',
            4: 'Fourteen',
            5: 'Fifteen',
            6: 'Sixteen',
            7: 'Seventeen',
            8: 'Eighteen',
            9: 'Nineteen',
        }
    }
    numArr.push(threesArr);
    let wordArr = [];
    for (let i=0; i<numArr.length; i++) {
        if (i === 0) {
            if (numArr[i].length < 2 || (numArr[i].length >= 2 && numArr[i][1] !== '1')) wordArr.unshift(wordDict[1][numArr[i][0]]);
            if (numArr[i].length >= 2) {
                if (numArr[i][1] === '1') wordArr.unshift(wordDict[4][numArr[i][0]]);
                else wordArr.unshift(wordDict[2][numArr[i][1]]);
            };
            if (numArr[i].length === 3) wordArr.unshift(wordDict[3][numArr[i][2]]);

        } else if (i === 1) {
            let tempStr = numArr[i].join('');
            if (tempStr !== '000' && tempStr !== '00' && tempStr !== '0') wordArr.unshift('Thousand');
            if (numArr[i].length < 2 || (numArr[i].length >= 2 && numArr[i][1] !== '1')) wordArr.unshift(wordDict[1][numArr[i][0]]);
            if (numArr[i].length >= 2) {
                if (numArr[i][1] === '1') wordArr.unshift(wordDict[4][numArr[i][0]]);
                else wordArr.unshift(wordDict[2][numArr[i][1]]);
            };
            if (numArr[i].length === 3) wordArr.unshift(wordDict[3][numArr[i][2]]);

        } else if (i === 2) {
            let tempStr = numArr[i].join('');
            if (tempStr !== '000' && tempStr !== '00' && tempStr !== '0') wordArr.unshift('Million');
            if (numArr[i].length < 2 || (numArr[i].length >= 2 && numArr[i][1] !== '1')) wordArr.unshift(wordDict[1][numArr[i][0]]);
            if (numArr[i].length >= 2) {
                if (numArr[i][1] === '1') wordArr.unshift(wordDict[4][numArr[i][0]]);
                else wordArr.unshift(wordDict[2][numArr[i][1]]);
            };
            if (numArr[i].length === 3) wordArr.unshift(wordDict[3][numArr[i][2]]);

        } else if (i === 3) {
            let tempStr = numArr[i].join('');
            if (tempStr !== '000' && tempStr !== '00' && tempStr !== '0') wordArr.unshift('Billion');
            if (numArr[i].length < 2 || (numArr[i].length >= 2 && numArr[i][1] !== '1')) wordArr.unshift(wordDict[1][numArr[i][0]]);
            if (numArr[i].length >= 2) {
                if (numArr[i][1] === '1') wordArr.unshift(wordDict[4][numArr[i][0]]);
                else wordArr.unshift(wordDict[2][numArr[i][1]]);
            };
            if (numArr[i].length === 3) wordArr.unshift(wordDict[3][numArr[i][2]]);
        }
    }
    return wordArr.filter(word => word !== '').join(' ').trimRight();
};

console.log(numberToWords(20));