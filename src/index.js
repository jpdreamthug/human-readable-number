module.exports = function toReadable (number) {
    let from0to9 = [[0, 'zero'], [1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five'], [6, 'six'], [7, 'seven'], [8, 'eight'], [9, 'nine']];
    let from11to19 = [[11, 'eleven'], [12, 'twelve'], [13, 'thirteen'], [14, 'fourteen'], [15, 'fifteen'], [16, 'sixteen'], [17, 'seventeen'], [18, 'eighteen'], [19, 'nineteen']];
    let from10to90 = [[10, 'ten'], [20, 'twenty'], [30, 'thirty'], [40, 'forty'], [50, 'fifty'], [60, 'sixty'], [70, 'seventy'], [80, 'eighty'], [90, 'ninety']];
    let numStr = '' + number;
    let res;

    function getString(array, str){
        array.forEach(item => {
            if(str == item[0]){
                res = item[1];
            }
        });
        return res;
    }
    switch(numStr.length){
        case 1:
            res = getString(from0to9, numStr);
            break;
        case 2:
            if(numStr[1] == 0){
                res = getString(from10to90, numStr);
            } else if(numStr < 20){
                res = getString(from11to19, numStr);
            } else{
                let tens = getString(from10to90, (`${numStr[0]}${numStr[1]}` - numStr[1]));
                let ones = getString(from0to9, numStr[1]);

                res = `${tens} ${ones}`;
            }
            break;
        case 3:
            if(numStr[1] == 0 && numStr[2] == 0){
                res = getString(from0to9, numStr[0]);
                res = `${res} hundred`;
            } else if(numStr[2] == 0){
                let hundredsStr = getString(from0to9, numStr[0]);
                let tensStr = getString(from10to90, `${numStr[1]}${numStr[2]}`);

                res = `${hundredsStr} hundred ${tensStr}`;
            } else if(numStr[1] == 0){
                let hundredsStr = getString(from0to9, numStr[0]);
                let onesStr = getString(from0to9, numStr[2]);

                res = `${hundredsStr} hundred ${onesStr}`;
            } else if(`${numStr[1]}${numStr[2]}` < 20){
                let hundredsStr = getString(from0to9, numStr[0]);
                let tensStr = getString(from11to19, `${numStr[1]}${numStr[2]}`);

                res = `${hundredsStr} hundred ${tensStr}`;
            } else{
                let hundredsStr = getString(from0to9, numStr[0]);
                let tensStr = getString(from10to90, `${numStr[1]}0`);
                let onesStr = getString(from0to9, numStr[2]);

                res = `${hundredsStr} hundred ${tensStr} ${onesStr}`;
            }
            break;
        default:
            res = 'Error';
    }
    return res;
}
