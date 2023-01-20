const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

function getUser(id) {
    fetch(`${url}/1`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar

        })
        .catch(error => console.error(error))
}

function addUser(newUser) {
    fetch (url, {
        methods: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}

function updateUser(updatedUser, id) {
    fetch(`${url}/1`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    }
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
)}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE"
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
    name: "Isabelle Santos",
    avatar: "https://picsum.photos/200/300",
    city: "Olímpia"
}

//addUser(newUser)

const updatedUser = {
    name: "Rafael Santana",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
}

//updateUser()

deleteUser()
getUsers()
getUser()