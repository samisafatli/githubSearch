let form = document.getElementById("myForm")

form.addEventListener('submit', function(e){
    e.preventDefault()

    let search = document.getElementById('search').value

    search = search.split(' ').join('')

    console.log(search)
    fetch(`http://api.github.com/users/${search}`)
    .then(result => result.json())
    .then(data => {
        console.log(data)
        document.getElementById('result').innerHTML = `
        <h3>Name: ${data.name}</h1>
        <h3>Description: ${data.bio}<h3>
        <h3>Public Repos: ${data.public_repos}<h3>
        <img src="${data.avatar_url}">
        `
    })
})