import * as main from '../main.js';



const questionTwo = () => {

    main.checkPerson();

    // if (main.state.person === true) {
    //     return true
    // } else {
    //     location.hash = '#/startPage';
    //     return false
    // }


    const pageNumber = 2;
    const markupQuestionTwo = 
    `
    <div class='nav-button'>
        <span>${main.progressBar(pageNumber)}%</span>
        <div class="buttons">
            <a href='#/q1' data-buttons="back" type="button" class='button' >Назад</a>
            <a href='#/q3' data-buttons="forward" type="button" class='button' >Вперед</a>
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
    
    `;

    
    const personCard = main.state.person.personCard;

    


    // Рендер страницы
    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionTwo);
        main.checkClass('.label');
        main.clickButtons(main.getAnswer, '.label', 'children');
        main.progressBar(pageNumber);
    };

    // Добавляем карточку ответов, если указали - нет детей
    // const addQuestionWithoutChildren = () => {
    //     main.state.person.personCard.personAnswers.push(new main.CardQuestion('Детей нет - ответ недоступен', 'Детей нет - ответ недоступен'));
    //     console.log(main.state);
    // }
    console.log(main.state)
    

    return renderPage();
}
export default questionTwo;