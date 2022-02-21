

const q6 = () => {

    const markupQ6 = `
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
            <a href='#/q5' type="button" class='button' >Назад</a>
            <a href='#/q7' type="button" class='button' >Вперед</a>
        </div>
    </div>

    <div class="question-6">
        <h3>Обувь какого размера вы покупаете ребенку в данный момент, если Вашему ребенку (детям) 12 и более лет?</h3>
        <input placeholder='Ваш ответ' class='enterYourAnswer' type=text />
    </div>


    <div class='progress-line'>
        <div></div>
    </div>
    `

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQ6)
    };


    return renderPage();
}

export default q6;