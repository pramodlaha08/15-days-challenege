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
            // console.log(items);
            let random = Math.floor(Math.random() * items.length);
            console.log(random)
            return items[random];
        })
        .then((item) => {

            document.querySelector('.result').innerHTML = `<div class="result__left">
                <h2 class="result__topic">${item.full_name}</h2>
                <p class="result__paragraph">${item.description}</p>
                <div class="result__details">
                    <div class="result__details--stars flex-center">
                        <img width="16" src="./assets/svgs/stars.svg" alt="">
                        <span class="data">${item.watchers}</span>
                    </div>
                    <div class="result__details--forks flex-center">
                        <img width="16" src="./assets/svgs/repos-forks.svg" alt="">
                        <span class="data">${item.forks_count}</span>
                    </div>
                    <div class="result__details--issues flex-center">
                        <img width="16" src="./assets/svgs/issues.svg" alt="">
                        <span class="data">${item.open_issues_count}</span>
                    </div>
                </div>
                <div class="result__extradetails">
                    <div class="result__extradetails--languages">
                      <img width="16" src="./assets/svgs/circle-svgrepo-com.svg" alt="">
                        <span>${value}</span>
                    </div>
                   
                </div>
            </div>
            <div class="result__right">
                <a href="${item.html_url}" target="_blank"><img width="50" src="./assets/svgs/github-svgrepo-com.svg" alt=""></a>
            </div>`
            // console.log(item);
            // console.log(item.html_url);
            // console.log(item.full_name);
            // console.log(item.forks_count);
            // console.log(item.watchers);
            // console.log(item.language);
            // console.log(item.open_issues_count);
            // console.log(item.updated_at);
            // console.log(item.description)
        })
        .catch(e => {
            console.log('error fetaching data', e);
            document.querySelector('.result').innerText = 'Try again later';
        })
    
}

