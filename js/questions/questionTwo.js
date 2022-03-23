import * as main from '../main.js';

const questionTwo = () => {
    const markupQuestionTwo = 
    `
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

    <div class='nav-button'>
        <span>67%</span>
        <div class="buttons">
            <a href='#/q1' type="button" class='button' >Назад</a>
            <a href='#/q3' data-button="forward" type="button" class='button' >Вперед</a>
        </div>
    </div>
    
    
    <div class="question-2">
        <h3>Есть ли у Вас дети?</h3>
        <div class="questions-group">
            <label class="label">
                <input data-check-answer type="radio" value="one" name="radio-group" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class='optionOfAnswer' data-children="one" >Да, один ребенок</span>
            </label>
            
            <label class="label">
                <input data-check-answer type="radio" value="twoOrMore" name="radio-group" id="checkChildrenItem" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class='optionOfAnswer' data-children="twoOrMore" >Да, два и более</span>
            </label>
            
            <label class="label">
                <input data-check-answer type="radio" value="noChildren" name="radio-group" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class='optionOfAnswer' data-children="noChildren" >Нет детей</span>
            </label>
        </div>
    </div>
    <div class='progress-line'>
        <div></div>
    </div>
    
    `;


    const personCard = main.state.person.personCard;
    // Рендер страницы
    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionTwo);
        addAnswerToCard();
        checkName();
    };

    // Добавляем ответы в state
    const addAnswerToCard = () => {
        const radioGroupButton = document.querySelectorAll('[name=radio-group]');

        radioGroupButton.forEach((item) => {
            item.addEventListener('input', () => {
                if (item.checked === true) {
                    let converseToRussian;
                    switch(item.value) {
                        case 'one':{
                            converseToRussian = 'Один ребенок';
                            break;
                        };
                        case 'twoOrMore': {
                            converseToRussian = 'Два и более ребенка';
                            break;
                        };
                        case 'noChildren': {
                            converseToRussian = 'Нет детей';
                            break;
                        }
                    }
                    main.state.person.personCard.children = converseToRussian;

                    if (main.state.person.personCard.children === 'Нет детей') {
                        addQuestionWithoutChildren();
                        document.querySelector('[data-button]').href=`#/q4`
                        console.log(document.querySelector('[data-button]').href)
                    }
                    console.log(main.state.person.personCard);
                }
            });
        })
    }

    // Добавляем карточку ответов, если указали - нет детей
    const addQuestionWithoutChildren = () => {
        main.state.person.personCard.personAnswers.push(new main.CardQuestion('Детей нет - ответ недоступен', 'Детей нет - ответ недоступен'));
        console.log(main.state);
    }
    console.log(main.state)
    
    const checkName = () => {
        const pathName = document.querySelectorAll('.label');
        const btnForward = document.querySelector('[data-button="forward"]');

        btnForward.addEventListener('click', (check) => {
            pathName.map((e, index) => {
                if (e.checked === true) {
                    return true
                } else {
                    alert('Выберите ответ');
                    check.preventDefault();
                    return false;
                }
            })
        })
    }

    return renderPage();
}
export default questionTwo;