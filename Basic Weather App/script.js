// fetch(`url`)
// .then(raw data ---> .json format)

fetch(`https://randomuser.me/api/`)
.then(raw => raw.json()
)
.then(read => console.log(read.results[0].gender))