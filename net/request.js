request
  .get(url)
  .on('response', (response) => {
    let data = response.data
    console.log(data)
     // let t = data['name']
   })
  .on('error', (err) => {
    console.log('error: ' + err)
  })
