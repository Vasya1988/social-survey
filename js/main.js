import startPage from './startPage.js';
import questionOne from './questions/questionOne.js';
import questionTwo from './questions/questionTwo.js';
import questionThree from './questions/questionThree.js';
import questionFour from './questions/questionFour.js';
import questionSix from './questions/questionSix.js';
import questionSeven from './questions/questionSeven.js';
import questionEight from './questions/questionEight.js';
import questionNine from './questions/questionNine.js';
import questionEleven from './questions/questionEleven.js';
import finishedPage from './finishedPage.js';


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
    {page: 'q1', component: questionOne},
    {page: 'q2', component: questionTwo},
    {page: 'q3', component: questionThree},
    {page: 'q4', component: questionFour},
    {page: 'q6', component: questionSix},
    {page: 'q7', component: questionSeven},
    {page: 'q8', component: questionEight},
    {page: 'q9', component: questionNine},
    {page: 'q10', component: questionEleven},
    {page: 'finished', component: finishedPage}

];

export const state = new Object;

// ----------------------- Карточка резидента
export class Person {
    constructor (name, children) {
        this.personCard = {
            personName: name,
            children: children,
            personAnswers: []
        }
    }
}

// ----------------------- Создаем карточку
export const createCard = (name) => {
    state.person = new Person(name);
    console.log('The person was created --> ', state.person.personCard)
}

// ----------------------- Добавляем картоку с ответами в state
export const addCardQuestion = () => {
    
}


// ----------------------- Карточка ответов
export class CardQuestion {
    constructor(gender, age, shoesSize, questionSize, widthOfFoot, shoesTrouble, whichBrand ) {
        this.card = {
            gender: gender,
            age: age,
            shoesSize: shoesSize,
            questionSize: questionSize,
            widthOfFoot: widthOfFoot,
            shoesTrouble: shoesTrouble,
            whichBrand: whichBrand
        }
    }
}


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

export function test(path) {
    return new Promise((resolve, reject) => {
        console.log(path)
    })
}

const renderStart = async () => {
    await render();
}

window.addEventListener('hashchange', renderStart);
window.addEventListener('load', renderStart);