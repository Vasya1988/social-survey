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
    constructor (name, children, personAnswers, measureLength, shoesTrouble, whichBrand) {
        this.personCard = {
            personName: name,
            children: children,
            personAnswers: [],
            measureLength: {
                question: 'Знаете ли Вы как правильно измерять длину стопы ребенка?',
                answer: null
            },
            shoesTrouble: {
                question: 'Сталкиваетесь ли вы при выборе детской обуви со следующими проблемами?',
                answer: null
            },
            whichBrand: {
                question: 'Где вы предпочитаете покупать детскую обувь?',
                answer: null
            }
        }
    }
}

// События кнопок вперед-назад
export const clickButtons = (func, elem, name) => {
    const buttons = document.querySelectorAll('[data-buttons]')
    buttons.forEach((button) => {
        button.addEventListener('click', (btn) => {
            if (button.dataset.buttons === 'forward') {
                console.log('Forward --> ');
                func(elem, name);
                checkAnswer(name, btn)
            } else if (button.dataset.buttons === 'back') {
                console.log('Back --> ')
            }
        })
    })
}

// Собираем ответы
export const getAnswer = (elements, pathName) => {

    // Указываем путь в варианту ответа (label)
    const inputPath = document.querySelectorAll(elements);
    // Добавляем массив
    state.person.personCard[pathName].answer = [];

    // Добавляем каждому элементу Label проверку checked
    inputPath.forEach((element, index) => {
            if (element.children[0].checked === true) {

                // Если выбран ответ - 'Другое'
                if (element.children.length > 3) {
                    state.person.personCard[pathName].answer.push(element.children[3].value);
                } else {
                    state.person.personCard[pathName].answer.push(element.children[2].innerText);
                }
            }
            
    });
}

// Смена чекбокса у ответа "другой"
export const checkClass = (name) => {
    const checkInput = document.querySelectorAll(name);
    checkInput.forEach((item, index) => {
        if (item.children.length > 3) {
            checkInput[index].addEventListener('input', () => {
                if (checkInput[index].children[3].value != '') {
                    checkInput[index].children[0].checked = true;
                    console.log('check -- true')
                } else { checkInput[index].children[0].checked = false; console.log('check -- false') }
                console.log(checkInput[index].children[3])
                
            })
        }
    })
    
}

// Проверка ответов на пустые поля
export const checkAnswer = (name, btn) => {
    const pathAnswer = state.person.personCard[name].answer;
    if (pathAnswer.length === 0) {
        alert('Пожалуйста, введите ответ');
        btn.preventDefault()
        return false
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


// Выбор аватара для разных гендеров
export const choiceAvatar = (path) => {
    if (path === 'Мальчик') {
        return './img/child-card/male.png';

    } else if (path === 'Девочка') {
        return './img/child-card/female.png';
    }
}

// ----------------------- Карточка ответов
export class CardQuestion {
    constructor(gender, age, shoesSize, shoesLength) {
        this.card = {
            gender: gender,
            age: age,
            shoesSize: shoesSize,
            shoesLength: shoesLength,
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