const apikey = '<your API Key>'; // get your API key from filestask
const client = filestack.init(apikey);

document.querySelector('input').addEventListener('change', (event) => {
  debugger;
  const files = event.target.files;
  const file = files.item(0);

  client.upload(file)
    .then(res => {
      console.log('success: ', res)
    })
    .catch(err => {
      console.log(err)
    });
  });