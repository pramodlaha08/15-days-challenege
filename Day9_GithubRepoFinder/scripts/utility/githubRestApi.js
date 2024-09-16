let apiUrl = 'https://api.github.com/search/repositories?q=';
export async function githubApi(value) {
    await axios.get(apiUrl + value)
        .then((response) => {
            return response?.data;
        })
         .then((data) => {
             return data.items
         })
        .then((items) => {
            console.log(items)
            console.log(items.length)
            let random = Math.floor(Math.random() * items.length);
            console.log(random)
            return items[random];
        })
        .then((item) => {
            console.log(item.html_url);
        })
        .catch(e => {
            console.log('error fetaching data', e);
        })
    
}

