import startPage from './startPage.js';
import q2 from './questions/q2.js';
import q3 from './questions/q3.js';
import q4 from './questions/q4.js';


export const markupCounter = `
<div class="counter">
    <nav>
        <ul>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">4</a></li>
            <li><a href="">5</a></li>
            <li><a href="">6</a></li>
            <li><a href="">7</a></li>
            <li><a href="">8</a></li>
            <li><a href="">9</a></li>
            <li><a href="">10</a></li>
        </ul>
    </nav>
</div>
`;

export const markupNavButton = `
<div class='nav-button'>
    <span>67%</span>
    <div class="buttons">
        <button type="button" class='button' >Назад</button>
        <button type="button" class='button' >Вперед</button>
    </div>
</div>
`;

export const markupProgressLine = `
<div class='progress-line'>
    <div></div>
</div>
`;



export const elements = {
    app: document.getElementById('app'),
    buttonStart: document.getElementById('button-start')
}


export const routes = [
    {page: 'startPage', component: startPage},
    {page: 'q2', component: q2},
    {page: 'q3', component: q3},
    {page: 'q4', component: q4}

];

// ----------------------- Рендерим разметку

export function render (markup) {
    return new Promise ((resolve, reject) => {
        const pathArray = location.hash.split('/')[1];
        let delPage = document.getElementById('app');

        if (location.hash.split('/')[0]==='') {

            delPage.innerHTML='';
            routes[0].component()
        } else {

            routes.find((e) => {

                if (e.page === pathArray) {
                    delPage.innerHTML='';
                    return e.component()
                }
            })
        }
        resolve();
    })
};


// ----------------------- Функция для тестов

function test(path) {
    return new Promise((resolve, reject) => {


    })
}

const renderStart = async () => {
    await render();
}

window.addEventListener('hashchange', renderStart);
window.addEventListener('load', renderStart);