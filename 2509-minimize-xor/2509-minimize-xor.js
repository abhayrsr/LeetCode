var minimizeXor = function (num1, num2) {
    let result = num1;
    function countSetBits(num) {
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num = num >> 1;
        }
        return count;
    }

    let countSetBits1 = countSetBits(num1);
    let countSetBits2 = countSetBits(num2);
    let bit = 0;

    if(countSetBits1 < countSetBits2){
        while(countSetBits1 < countSetBits2){
            if((result & (1 << bit)) === 0){
                result |= 1 << bit
                countSetBits1++
            }
            bit++;
        }
    } else if(countSetBits1 > countSetBits2) {
        while(countSetBits1 > countSetBits2){
            if((result & (1 << bit)) !== 0){
                result &= ~(1 << bit);
                countSetBits1--
            }
            bit++;
        }
    }

    return result;
};