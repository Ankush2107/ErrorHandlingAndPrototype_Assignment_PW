const name = "Mithun"

function greetWithPromise(name) {
   return new Promise((resolve, reject) => {
        if(name && typeof name == 'string')
            resolve(`Hello ${name}`)
        else 
            reject('Invalid name')
   })
}
  
greetWithPromise(name).then(greeting => console.log(greeting))
.catch(error => console.log(error))  