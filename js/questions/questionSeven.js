const questionSeven = () => {
    const markupQuestionSeven = `
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
                <a href='#/q6' type="button" class='button' >Назад</a>
                <a href='#/q8' type="button" class='button' >Вперед</a>
            </div>
        </div>

        <div class="question-7">
            <h3>Укажите, пожалуйста, длину стопы ребенка в формате: возраст ребенка-длина стопы в мм</h3>
            <p>
            Для этого поставьте ребенка на чистый лист бумаги так, чтобы опора была сразу на обе стопы, обведите ступню по периметру карандашом/ручкой, измерьте линейкой расстояние от наиболее выпуклой точки пятки до большого пальца ноги.
            </p>


            <div class="child-card">
            <img class='image-child' src='./img/child-card/female.png' />
                <div class='child-info' >
                    <span class='title-gender'>Девочка</span>
                    <span class='title-age'>2 года</span>
                    <span>Размер: 25 </span>
                    <div class='foot-size' >
                        <span>Длина стопы:&nbsp  </span>
                        <input class='' placeholder="Напишите..." type=text />
                    </div>
                    
                </div>
        </div>
            
        </div>


        <div class='progress-line'>
            <div></div>
        </div>
        `;

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionSeven)
    }

    return renderPage();
}

export default questionSeven;