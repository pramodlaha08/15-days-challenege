let apiUrl = 'https://api.github.com/search/repositories?q=';
export async function githubApi(value) {
    await axios.get(apiUrl + value)
        .then((response) => {
            return response?.data;
        })
         .then((data) => {
             return data.items
         })
        .then((item) => {
            console.log(item)
        })
        .catch(e => {
            console.log('error fetaching data', e);
        })
    
}

