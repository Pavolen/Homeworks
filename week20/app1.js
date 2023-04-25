// Attributes:
// films string -- The URL root for Film resources
// people string -- The URL root for People resources
// planets string -- The URL root for Planet resources
// species string -- The URL root for Species resources
// starships string -- The URL root for Starships resources
// vehicles string -- The URL root for Vehicles resources

// /people/  -- get all the people resources
  // Пример запроса: https://swapi.dev/api/people
// /people/:id/-- get a specific people resource 
// Пример запроса: https://swapi.dev/api/people/1/

const baseUrl = 'https://swapi.dev/api/'

function apiGet(resources, specific){
    fetch(`https://swapi.dev/api/${resources}/${specific}/`, {
      method: 'GET', // Здесь так же может быть GET POST
    //   body: JSON.stringify(newPost), // Тело запроса в JSON-формате
      headers: {
        // Добавляем необходимые заголовки
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => {
        return res.json(); // возвращаем результат работы метода и идём в следующий then
      })
      .then((resJson) => {
        // .ответ от сервера объект для нас сейчас
        const nameTag = document.querySelector('.name'); //определили/нашли тэг и положили инфу в пер
        try{
          if(resJson.detail){
            const errorText =`По id ${specific} у ${resources} ничего нет.`;
            nameTag.innerHTML = errorText
            throw new SyntaxError(errorText);
          } else if(resJson.name){ 
            // если равно
            nameTag.innerHTML = resJson.name
          }  else {
            nameTag.innerHTML = resJson.title
          } // Проверка условия
      } catch (error) {
        console.error( error.message );
      }
        
         // console.log('data', data); // если мы попали в этот then, data — это объект
      })
      .catch((err) => {
        console.log('catch', 'Ошибка. Запрос не выполнен');
      });
}

// const search = document.querySelector('#search')
// search.addEventListener('click', ()=>{
//     const resources = document.querySelector('#resources').value
//     const specific = document.querySelector('#specific').value
//     apiGet(resources, specific);
// })

// apiGet('people', 1);
// apiGet('people', 2);
// apiGet('people', 3);
const category = document.querySelector('#category') //нашли элемент с id #category
// category.addEventListener('change',(event)=>{ //на этот элемент навешали слушателя событий, 
//   //если это событие произошло, то запускается функция и передаем в нее событие
//   console.log('addEventListener ', event.target.value)//событие произошло и таргетом мы 
//   //получили тот элемент у которого произошло событие. вэлью это значение того элемента с которым мы работали
// })
const number = document.querySelector('#number')
// number.addEventListener('change',(event)=>{

// })
 
const search = document.querySelector('.search')
search.addEventListener('click', (event)=>{
  // console.log(category.value, '  ' , number.value)
  // category.value//получаем выбранные значения
  // number.value
  apiGet(category.value, number.value)//вызвать функцию и передать выбранную категорию и номер
})







