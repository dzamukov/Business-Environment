var requestOptions = {
  method: 'POST',
  redirect: 'follow'
};

fetch("https://restapi.dns-shop.ru/v1/get-products-statistic-data", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));