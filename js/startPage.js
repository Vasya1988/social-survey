import * as main from './main.js';


const startPage = () => {
    const markupStart = `
        <div class="start">
            <p
                class='discription'
            >
                <span>Здравствуйте!</span>
                <br>
                Мы производители российской обуви для детей.
                Производим обувь по стандартам, созданным еще в 1975 году.
                Данный опрос поможет нам внести корректные изменения в размерную сетку(авынаверняка     сталкивались с несоответствием
                размеров и длины стопы),
                Просим ответить вас на несколько вопросов:
                
                Заранее благодарны за сотрудничество!
            </p>
            <div class="start-button">
                <a href='#/q1' id="button-start" class='button button-start'>Пройти опрос</a>
            </div>

        </div>
    `;


    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupStart);
    }

    return renderPage();

}


export default startPage;