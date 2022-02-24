const questionEight = () => {
    const markupQuestionEight = `
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
                <a href='#/q7' type="button" class='button' >Назад</a>
                <a href='#/q9' type="button" class='button' >Вперед</a>
            </div>
        </div>

        <div class="question-6">
            <h3>Укажите, пожалуйста, длину стопы ребенка в формате: возраст ребенка-длина стопы в мм</h3>
            <p>
            Для этого поставьте ребенка на чистый лист бумаги так, чтобы опора была сразу на обе стопы, обведите ступню по периметру карандашом/ручкой, измерьте линейкой расстояние от наиболее выпуклой точки пятки до большого пальца ноги.
            </p>
            <input placeholder='Ваш ответ' class='enterYourAnswer' type=text />
        </div>


        <div class='progress-line'>
            <div></div>
        </div>
        `;

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionEight)
    }

    return renderPage();
}

export default questionEight;