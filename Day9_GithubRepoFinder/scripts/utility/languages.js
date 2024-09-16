let apiUrl = 'https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json';
let select = document.querySelector('#language');
export async function languages() {
    await axios.get(apiUrl)
        .then((response) => {
            return response?.data;
        })
         .then((data) => {
             let langData = data;
             for (let i = 1; i < langData.length; i++){
                 select.innerHTML+=`<option value='${langData[i].value}'>${langData[i].value}</option>`
             }
             
         })
        .catch(e => {
            console.log('error fetaching data', e);
        })
    
}

