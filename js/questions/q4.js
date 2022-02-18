const q4 = () => {
    const markupQ4 = `

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
                <a href='#/q2' type="button" class='button' >Назад</a>
                <a href='#/q4' type="button" class='button' >Вперед</a>
            </div>
        </div>

        <div class="question-4">
        <h3>Укажите, пожалуйста, пол и возраст детей</h3>
        <div class="questions-group q4">
            <div class="ages">
                <span>0-1 год</span>
                <span>2-3 года</span>
                <span>4-5 лет</span>
            </div>
            <div class="size">
                <span>20</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="size">
                <span>21</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="size">
                <span>22</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="size">
                <span>23</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="size">
                <span>24</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="size">
                <span>25</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="size">
                <span>26</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="size">
                <span>27</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="size">
                <span>28</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="size">
                <span>29</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="size">
                <span>30</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            
        </div>
    </div>

    <div class='progress-line'>
        <div></div>
    </div>
    `;

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQ4)
    }

    return renderPage();
    
}

export default q4;