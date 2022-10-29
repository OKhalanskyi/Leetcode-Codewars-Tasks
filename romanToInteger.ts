function romanToInt(s: string): number {
    let total :number = 0
    const symbols = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    for(let i = 0; i<s.length; i++){
        let current = symbols[s[i]]
        let next = symbols[s[i+1]]
        if(next>current){
            total = total + next - current
        }
        else {
            total = total + current
        }
    }

    return total
}

console.log(romanToInt("CL"))