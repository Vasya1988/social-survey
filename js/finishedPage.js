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

    const pageNumber = 9;

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupFinishedPage);

        console.log(main.state.person.personCard);
        main.progressBar(pageNumber);
    }

    return renderPage();

}


export default finishedPage;