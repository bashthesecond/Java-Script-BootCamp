function getCount(str) {
    let vowelsCount = 0;
    const vowelArray = ['a', 'e', 'i', 'o', 'u']
    const strArray = str.split()
    console.log(strArray)
    strArray.forEach((el) => {
      if (vowelArray.includes(el)) {
        vowelsCount = vowelsCount + 1
        console.log(vowelsCount)
      }
    })
    // enter your majic here
    
    return vowelsCount;
}

console.log(getCount('sdxsdsaa'))