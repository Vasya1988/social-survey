import * as main from '../main.js';

const questionThree = () => {

    main.checkPerson();
    const pageNumber = 3;

    const currentCard = {
        currentGender: null,
        currentAge: null
    }

    const closeIcon = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve"
                                                
                                                
                                                >

                                            <style type="text/css">
                                                .st0{fill:#58595B;}
                                            </style>
                                            <path class="st0" d="M68.5,61.6l32.3-32.3c2.3-2.3,2.3-6.1,0-8.5c-2.3-2.3-6.1-2.3-8.5,0L60,53.2L27.7,20.9c-2.3-2.3-6.1-2.3-8.5,0
                                                c-2.3,2.3-2.3,6.1,0,8.5l32.3,32.3L19.2,93.9c-2.3,2.3-2.3,6.1,0,8.5c1.2,1.2,2.7,1.8,4.2,1.8c1.5,0,3.1-0.6,4.2-1.8L60,70.1
                                                l32.3,32.3c1.2,1.2,2.7,1.8,4.2,1.8s3.1-0.6,4.2-1.8c2.3-2.3,2.3-6.1,0-8.5L68.5,61.6z"/>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            </svg>`


    const markupQuestionThree = `

        <div class='nav-button'>
            <span>${main.progressBar(pageNumber)}%</span>
            <div class="buttons">
                <a href='#/q2' data-buttons="back" type="button" class='button' >Назад</a>
                <a href='#/q4' data-buttons="forward"  type="button" class='button' >Вперед</a>
            </div>
        </div>

        <div class="have-children">
            <h2>Дети</h2>
            <button type='button' data-create='child' class='button add-child' >Добавить + </button>
            <div class='child-container' >
                <div></div>
            </div>
        </div>

    `;
    const markupCreateChild = `
    <div class='create-frame-background' >
        <div class='create-frame' >
            <div class='options'>
                <div>
                    <div class='create-gender'>
                        <span>Выберите пол ребенка</span>
                        <select data-choiceGender="gender" class='gender-item' >
                            <option value='gender' >Выберите...</option>
                            <option value='female' >Девочка</option>
                            <option value='male' >Мальчик</option>
                        </select>
                    </div>
                    <div class='create-age' >
                        <span>Укажите возраст ребенка</span>
                        <select data-choiceAge="age" class='age-item' >
                            <option value='0' >0</option>
                            <option value='1' >1</option>
                            <option value='2' >2</option>
                            <option value='3' >3</option>
                            <option value='4' >4</option>
                            <option value='5' >5</option>
                            <option value='6' >6</option>
                            <option value='7' >7</option>
                            <option value='8' >8</option>
                            <option value='9' >9</option>
                            <option value='10' >10</option>
                            <option value='11' >11</option>
                            <option value='12' >12</option>
                            <option value='13' >13</option>
                            <option value='14' >14</option>
                            <option value='15' >15</option>
                            <option value='16' >16</option>
                            <option value='17' >17</option>
                            <option value='18' >18</option>
                        </select>
                    </div>
                </div>
                <button class='button button-add' data-button='add' >Добавить</button>
            </div>
            <button class='button-close' data-button='close' ></button>
        </div>
    </div> 
    `;

    
    const personState = main.state.person.personCard;
    console.log(main.state);
    
    // Рендерим страницу
    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionThree);
        personState.personAnswers = [];
        main.progressBar(pageNumber);
    }

    // Записываем гендер и возраст
    const getChildCard = () => {
        const getInfo = document.querySelectorAll('.child-card');
        getInfo.forEach((item) => {

            const gender = item.querySelector('[data-gender]').innerText;
            const age = item.querySelector('[data-age]').innerText;

            personState.personAnswers.push(new main.CardQuestion(gender, age));
            
            console.log(personState.personAnswers);
        })


    };

    // Валидация ответов
    const enterGender = (btn) => {
        const gender = document.querySelector('[data-choicegender="gender"]');

        if (gender.value =! 'Мальчик' || gender.value != 'Девочка') {
            btn.preventDefault();
            alert('Выберите пол ребенка')
        }
    }

    const btnForward = () => {
        return new Promise ((resolve, reject) => {
            document
                .querySelector('[data-buttons="forward"]')
                .addEventListener('click', (e) => {

                    getChildCard();
                })
            })
    }
    





    // Добавить ребенка
    const addChild = () => {
        const addButton = document.querySelector('[data-create="child"]');
        
        addButton.addEventListener('click', (event) => {

            const appElement = document.getElementById('app');
            appElement.parentNode.insertAdjacentHTML('afterbegin', markupCreateChild);

            const buttons = document.querySelectorAll('[data-button]');

            buttons.forEach((btn) => {
                const elements = {
                    age: document.querySelector('[data-choiceAge]'),
                    gender: document.querySelector('[data-choiceGender]')
                }

                btn.addEventListener('click', (buttonItem) => {

                    if (buttonItem.target.dataset.button === 'add') {

                        if (elements.gender.value != 'gender') {
                            // console.dir(elements.gender);
                            let genderConverseRus;
                            if (elements.gender.value === 'male') {
                                genderConverseRus = 'Мальчик';
                                // choiceAvatar = './img/child-card/male.png';
                            } else if (elements.gender.value === 'female') {
                                genderConverseRus = 'Девочка';
                                // choiceAvatar = './img/child-card/female.png';
                            }
                            const markupChildCard = `
                                <div class="child-card create-child">
                                    <img class='image-child' src=${main.choiceAvatar(genderConverseRus)} />
                                        <div class='child-info' >
                                            <span class='title-gender'>Пол: <span data-gender>${genderConverseRus}</span></span>
                                            <span class='title-age'>Возраст: <span data-age>${elements.age.value}</span></span>
                                        </div>
                                        
                                        <div data-delete="child-card" class='child-card-delete' >
                                        </div>
                                </div>
                            `;
                            createChildCard(markupChildCard);
                            closeCreateFrame();
                            deleteCard();
                            
                            console.log(main.state.person.personCard)
                        } else {
                            buttonItem.preventDefault();
                            alert('Выберите пол ребенка');
                        }
                        

                    } else if (buttonItem.target.dataset.button === 'close') {

                        console.log('This - close', buttonItem.target);
                        closeCreateFrame();
                    }
                })

                
                        
            })
            
        });

        
    }

    // Создать карточку ребенка
    const createChildCard = (markup) => {
        document.querySelector('.child-container').insertAdjacentHTML('afterbegin', markup)
    }

    // Событие кнопки close
    const closeCreateFrame = (props) => {
        document.body.children[0].remove()

    }

    // Удалить карточку
    const deleteCard = () => {
        return new Promise((resolve, reject) => {
            const elementDelete = document.querySelector('[data-delete="child-card"]');

            elementDelete.addEventListener('click', (e) => {
                console.log(e.target.parentNode);
                e.target.parentNode.remove()
            })


        })
    }


    async function startScript() {
        await renderPage();
        await addChild();
        await btnForward()
    }
    return startScript();
    
}

export default questionThree;