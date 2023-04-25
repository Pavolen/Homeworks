const baseUrl = 'https://swapi.dev/api/'

function apiGet(resources, specific){
    fetch(`https://swapi.dev/api/${resources}/${specific}/`, {
      method: 'GET', 
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => {
        return res.json(); 
      })
      .then((resJson) => {
        
        const nameTag = document.querySelector('.name'); 
        try{
          if(resJson.detail){
            const errorText =`По id ${specific} у ${resources} ничего нет.`;
            nameTag.innerHTML = errorText
            throw new SyntaxError(errorText);
          } else if(resJson.name){    
            
            nameTag.innerHTML = resJson.name
          }  else {
            nameTag.innerHTML = resJson.title
          } 
      } catch (error) {
        console.error( error.message );
      }
        
        })
      .catch((err) => {
        console.log('catch', 'Ошибка. Запрос не выполнен');
      });
}
const category = document.querySelector('#category') 
const number = document.querySelector('#number')
const search = document.querySelector('.search')
search.addEventListener('click', (event)=>{
  apiGet(category.value, number.value)
})







