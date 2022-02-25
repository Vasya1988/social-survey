const questionFour = () => {
    const markupQuestionFour = `

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
                <a href='#/q3' type="button" class='button' >Назад</a>
                <a href='#/q6' type="button" class='button' >Вперед</a>
            </div>
        </div>

        <div class="question-4">
        <h3>Обувь какого размера вы покупаете ребенку в данный момент?</h3>
        

        <div class="child-card">
            <img class='image-child' src='./img/child-card/female.png' />
                <div class='child-info' >
                    <span class='title-gender'>Девочка</span>
                    <span class='title-age'>2 года</span>

                    <div class='create-age' >
                        <span>Размер: &nbsp </span>
                        <select class='size-list' >
                            <option value='20' >20</option>
                            <option value='21' >21</option>
                            <option value='22' >22</option>
                            <option value='23' >23</option>
                            <option value='24' >24</option>
                            <option value='25' >25</option>
                            <option value='26' >26</option>
                            <option value='27' >27</option>
                            <option value='28' >28</option>
                            <option value='29' >29</option>
                            <option value='30' >30</option>
                            <option value='31' >31</option>
                            <option value='32' >32</option>
                            <option value='33' >33</option>
                            <option value='34' >34</option>
                            <option value='35' >35</option>
                            <option value='36' >36</option>
                            <option value='37' >37</option>
                            <option value='38' >38</option>
                            <option value='39' >39</option>
                            <option value='40' >40</option>
                            <option value='41' >41</option>
                            <option value='42' >42</option>
                            <option value='43' >43</option>
                            <option value='44' >44</option>
                            <option value='45' >45</option>
                            <option value='46' >46</option>
                        </select>
                    </div>
                </div>
        </div>
        <div class="child-card">
            <img class='image-child' src='./img/child-card/male.png' />
                <div class='child-info' >
                    <span class='title-gender'>Мальчик</span>
                    <span class='title-age'>4 года</span>

                    <div class='create-age' >
                        <span>Размер: &nbsp </span>
                        <select class='size-list' >
                            <option value='20' >20</option>
                            <option value='21' >21</option>
                            <option value='22' >22</option>
                            <option value='23' >23</option>
                            <option value='24' >24</option>
                            <option value='25' >25</option>
                            <option value='26' >26</option>
                            <option value='27' >27</option>
                            <option value='28' >28</option>
                            <option value='29' >29</option>
                            <option value='30' >30</option>
                            <option value='31' >31</option>
                            <option value='32' >32</option>
                            <option value='33' >33</option>
                            <option value='34' >34</option>
                            <option value='35' >35</option>
                            <option value='36' >36</option>
                            <option value='37' >37</option>
                            <option value='38' >38</option>
                            <option value='39' >39</option>
                            <option value='40' >40</option>
                            <option value='41' >41</option>
                            <option value='42' >42</option>
                            <option value='43' >43</option>
                            <option value='44' >44</option>
                            <option value='45' >45</option>
                            <option value='46' >46</option>
                        </select>
                    </div>
                </div>
        </div>
    </div>

    <div class='progress-line'>
        <div></div>
    </div>
    `;

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionFour)
    }

    return renderPage();
    
}

export default questionFour;