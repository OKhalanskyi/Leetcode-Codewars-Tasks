function createPhoneNumber(numbers){
    let phone:string = "(xxx) xxx-xxxx"

    numbers.forEach(elem=>{
        phone = phone.replace("x", elem)
    })

    return phone
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

console.log(createPhoneNumber([1, 2, 1, 5, 5, 1, 0, 8, 9, 0]))