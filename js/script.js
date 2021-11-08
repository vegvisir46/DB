/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//удаление рекламы
const adds = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      titles = document.querySelector('.promo__interactive-list'),
      genre = poster.querySelector('.promo__genre');

// adds.remove(); //так не сработает, потому что в adds лежит коллекция
adds.forEach(item => {
    item.remove();
});

// изменение жанра
genre.textContent = "ДРАМА";
// genre.innerHTML = "<h3>ДРАМА</h3>"; // текст другого размера

// изменение фона
poster.style.backgroundImage = "url('img/bg.jpg')";

titles.innerHTML = "";

// сортировка массива movieDB
movieDB.movies.sort();



// пуш массива на HTML
// for (let i = 0; i < movieDB.movies.length; i++) {
//     titles[i].textContent = sortMovies [i];
// }

movieDB.movies.forEach((film, i) => {
    titles.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});