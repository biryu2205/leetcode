var buddyStrings = function (a_str, b_str) {
    if (astr.length !== b_str.length) {
        return false
    } else {
        const A_list = a_str.split(''),
            B_list = b_str.split(''),
            countList = [];
        for (let i = 0; i < A_list.length; i++) {
            if (A_list[i] !== B_list[i]) {
                countList.push(i)
            }
        }
        if (countList.length !== 2 && countList.length !== 0) {
            return false
        } else if (countList.length === 0) {
            const obj = A_list.reduce((acc, cur) => {
                acc[cur] ? ++acc[cur] : acc[cur] = 1
                return acc
            }, {})
            return Math.max.apply(null, Object.values(obj)) >= 2
        } else {
            if (A_list[countList[0]] === B_list[countList[1]] && B_list[countList[0]] === A_list[countList[1]]) {
                return true
            }
            return false
        }
    }
};
