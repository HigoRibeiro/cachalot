const test = () => new Promise((resolve) => {
  setTimeout(() => {
    console.log('Será executado depois de 5 segundos')
  }, 5000)
})

test()
