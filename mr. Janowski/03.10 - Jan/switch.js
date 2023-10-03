function palindrom(wyraz){
    let wyraz1 = wyraz
    wyraz =  wyraz.toLowerCase()
    wyraz1= wyraz1.split('').reverse().join('')
    return wyraz === wyraz1
}

console.log(palindrom("kajak"))