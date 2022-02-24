import * as main from './main.js';


const finishedPage = () => {
    const markupFinishedPage = `
        <div class="start">
            <p
                class='discription'
            >
                <span>Спасибо!</span>
                <br>
                Благодарим за сотрудничество!
            </p>
        </div>
    `;


    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupFinishedPage);
    }

    return renderPage();

}


export default finishedPage;