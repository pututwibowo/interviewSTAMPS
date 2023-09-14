const arr = Array.from(Array(101).keys()).slice(1)
arr.sort((a, b) => b - a)

const nonPrime = arr.filter(number => {
  if (number==1) return true;
  for (let divider = number-1; divider>1; divider--){
    if(number % divider === 0){
      return true
    }
  }
  return false
})

const addText = nonPrime.map(number=>{
  if (number%3===0 && number%5===0 ){
    return "FooBar"
  }else if(number%3===0){
    return "Foo"
  }else if(number%5===0){
    return "Bar"
  }
  return number
})

const hasil = addText.join()

console.log(hasil)

