const questionSix = () => {
    const markupQuestionSix = `

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
                <a href='#/q4' type="button" class='button' >Назад</a>
                <a href='#/q7' type="button" class='button' >Вперед</a>
            </div>
        </div>

        <div class="question-6">
        <h3>Знаете ли Вы как правильно измерять длину стопы ребенка?</h3>
        <div class="questions-group ">
            <label class="label">
                <input name="radio-group" data-foot="size" type="radio" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Да, периодичечски проверяю</span>
            </label>
            <label class="label">
                <input name="radio-group" data-foot="size" type="radio" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Да, но не измеряю</span>
            </label>
            <label class="label">
                <input name="radio-group" data-foot="size" type="radio" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Не знаю</span>
            </label>
            <label class="label">
                <input name="radio-group"  data-foot="other" type="radio" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Другое: </span>
                <input data-foot="own-answer"  class='enterYourAnswer otherAnswer' type=text />
            </label>
        </div>
    </div>

    <div class='progress-line'>
        <div></div>
    </div>
    `;

    

    // Рендерим страницу
    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionSix);

        // const answerElement = document.querySelectorAll('[data-foot]');
        // console.log(answerElement);
        // getAnswer(answerElement)
    };

    const getAnswer = (elements) => {
        // console.log(elements);

        // elements.array.forEach(element => {
        //     if (element.checked === 'true') {
        //         console.log(element)
        //     }
        // });


    }


    return renderPage();
}
export default questionSix;