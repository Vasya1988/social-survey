import * as main from '../main.js';


const questionEight = () => {

    main.checkPerson();
    const pageNumber = 7;

    const markupQuestionEight = `

        <div class='nav-button'>
            <span>${main.progressBar(pageNumber)}%</span>
            <div class="buttons">
                <a href='#/q7' data-buttons="back" type="button" class='button' >Назад</a>
                <a href='#/q9' data-buttons="forward" type="button" class='button' >Вперед</a>
            </div>
        </div>

        <div class="question-8">
        <h3>Сталкиваетесь ли вы при выборе детской обуви со следующими проблемами?</h3>
        <div class="questions-group ">
            <label class="label">
                <input data-problems="baseAnswer" type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Обувь слишком узкая</span>
            </label>
            <label class="label">
                <input data-problems="baseAnswer" type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Обувь слишком широкая</span>
            </label>
            <label class="label">
                <input data-problems="baseAnswer" type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Нет проблем</span>
            </label>
            <label class="label">
                <input data-problems="other" type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Другое: </span>
                <input class='enterYourAnswer otherAnswer' type=text />
            </label>
        </div>
    </div>

    `;

    console.log(main.state.person.personCard)

    const personCard = main.state.person.personCard;

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionEight);

        main.checkClass('.label');
        document.querySelectorAll('.label')[3].addEventListener('change', (e) => {
            if (e.target.checked === true) {
                console.log(e.target);
                document.querySelectorAll('.label')[3].children[0].checked = false;
                document.querySelectorAll('.label')[3].children[3].value = '';
            } 
            
        })
        main.clickButtons(main.getAnswer, '.label', 'shoesTrouble');
        main.progressBar(pageNumber);
    }



    return renderPage();
}

export default questionEight;