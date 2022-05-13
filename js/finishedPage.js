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

        // console.log(main.state.person.personCard);
        main.progressBar(pageNumber);

        const childResult = () => {
            // console.log(main.state.person.personCard.personAnswers)
            if (main.state.person.personCard.children.answer[0] != 'Нет детей') {
                return main.state.person.personCard.personAnswers.map((item, index)=>{
                    // console.log(item, index)
                    return {
                        'Пол': item.card.gender,
                        'Возраст': item.card.age,
                        'Обувь какого размера вы покупаете ребенку вданный момент?': item.card.shoesSize.answer,
                        'Укажите, пожалуйста, длину стопы ребенка вформате: возраст ребенка-длина стопы в мм': item.card.shoesLength.answer
                    }
                })
            } else {
                return null
            }   
        }

        const sizeAnswer = (num) => {
            if (main.state.person.personCard.children.answer[0] === 'Нет детей') {
                return main.state.person.personCard.personAnswers[num].answer
            } else {
                return null
            }
        }

        const answersExport = {

            'Где вы предпочитаете покупать детскую обувь?': main.state.person.personCard.whichBrand.answer,

            'Сталкиваетесь ли вы при выборе детской обуви со следующими проблемами?': main.state.person.personCard.shoesTrouble.answer,

            'Есть ли у Вас дети?': main.state.person.personCard.children.answer,

            'Укажите, пожалуйста, ваше имя': main.state.person.personCard.personName,

            'Обувь какого размера вы покупаете ребенку в данный момент?': sizeAnswer(0),

            'Укажите, пожалуйста, длину стопы ребенка в формате: возраст ребенка-длина стопы в мм': sizeAnswer(1),

            'extra': childResult()

        };

        const checkAnswerNull = () => {
            if (answersExport['Обувь какого размера вы покупаете ребенку в данный момент?'] === null) {
                delete(answersExport['Обувь какого размера вы покупаете ребенку в данный момент?']);
                delete(answersExport['Укажите, пожалуйста, длину стопы ребенка в формате: возраст ребенка-длина стопы в мм'])

                // console.log('new --> ', answersExport)

                return answersExport;
            }
        }

        checkAnswerNull()

        console.log(answersExport)
        // console.log(main.state.person.personCard.personAnswers)


        const send_ajax = (url,json_data) => {
            fetch(url, {
                method: "POST",
                credentials: "same-origin",
                headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRFToken": getCookie("csrftoken"),
                },
                body: JSON.stringify(json_data)
                }
            )
            .then(response => response.json())
            .then(data => {
            console.log(data);
            })
        }

            
        const getCookie = (name) => {
            let cookieValue = null;
            if (document.cookie && document.cookie !== "") {
                const cookies = document.cookie.split(";");
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    if (cookie.substring(0, name.length + 1) === (name + "=")) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }   
                }
            }
            return cookieValue;
        }

        send_ajax('http://192.168.19.146/vote/opros/#/finished', answersExport)
    }

    return renderPage();

}


export default finishedPage;