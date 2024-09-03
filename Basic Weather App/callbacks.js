function fetchData(url, callback) {
  fetch(url)
    .then((raw) => raw.json())
    .then((result) => {
      callback(result);
    });
}
fetchData(`https://randomuser.me/api/`, function (result) {
    console.log(result.results[0].name.first);
    console.log(result.results[0].gender);
    console.log(result.results[0].email);
    
});
