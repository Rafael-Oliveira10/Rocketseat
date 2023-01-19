import axios from 'axios'

async function fetchRepos() {

}

fetchRepos()

axios
    .get('https://api.github.com/users/Rafael-Oliveira10')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(error => console.error(error))