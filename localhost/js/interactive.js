$( document ).ready(function() {
    var json = {
        title: "Оформлення ліцензії на зброю",
        tree: [
            {
                type: "question",
                question: "Вам є 18?"
            },
            {
                type: "final_text",
                result: "Особи, які не досягли 18-и річного віку, не мають право на придбання та зберігання зброї"   
            },
            {
                type: "select",
                question: "На яку зброю Ви бажаєте отримати дозвіл?",
                select_titles: [
                    "Мисливську",
                    "Холодну",
                    "Пневматичну"
                ]
            },
            {
                type: "final_steps",
                title: "Виконайте такі шаги",
                steps: [
                    {
                        title: "Письмова заява про видачу дозволу на право зберігання та носіння зброї",
                        hint: "Письмова заява про видачу дозволу на право зберігання та носіння зброї – взяти чистий аркуш паперу і кулькову ручку та написати її у довільній формі на ім’я Управління превентивної діяльності Головних управлінь Національної поліції України в областях та місті Києві"
                    },
                    {
                        title: "Дві фотокартки розміром 3 см х 4 см"
                    },
                    {
                        title: "Платіжний документ (квитанція), який засвідчує оплату адміністративної послуги"
                    },
                    {
                        title: "Договір страхування відповідальності власників зброї",
                        hint: "Зброя може бути застрахована у будь- якій страховій компанії, яка одержала   в   установленому   порядку   ліцензію   на  проведення страхування відповідальності власників чи користувачів зброї"
                    },
                    {
                        title: "При перереєстрації зброї (продовженні терміну дії дозволу на право зберігання та носіння зброї): медичний висновок лікувального закладу про відсутність протипоказань, що перешкоджають володінню зброєю"
                    }
                ],
                result: {
                    adress: "вул. Богомольця, 10, м. Київ, 01601",
                    phone: ["(044) 256-14-30", "254-70-81", "256-14-29", "(044) 256-18-90"],
                    email: "info@police.gov.ua",
                    description: "Управління превентивної діяльності Головних управлінь Національної поліції України в областях та місті Києві щоденно, крім вихідних і святкових днів, з 09.00 до 17.45 (напередодні вихідних і святкових днів з 09.00 до 16.45) із перервою на обід з 12.45 до 13.30"
                }
            },
            {
                type: "final_steps",
                title: "Виконайте такі шаги",
                steps: [
                    {
                        title: "Письмова заява про видачу дозволу на право зберігання та носіння зброї",
                        hint: "Письмова заява про видачу дозволу на право зберігання та носіння зброї – взяти чистий аркуш паперу і кулькову  ручку та написати її у довільній формі на ім’я Управління превентивної діяльності Головних управлінь Національної поліції України в областях та місті Києві"
                    },
                    {
                        title: "Дві фотокартки розміром 3 см х 4 см"
                    },
                    {
                        title: "Платіжний документ (квитанція), який засвідчує оплату адміністративної послуги"
                    },
                    {
                        title: "Довідку про експериментальний відстріл вогнепальної зброї",
                        hint: "отримати за адресою: М. Київ, вул. Володимирська, 15 (вхід зі сторони Софійської площі) в робочі дні з 09-00 до 12-00, видача з 15-00 до 17-00 в п’ятницю з 15-00 до 16-30, субота прийом зброї з 9-00 до 12-00, видача з 14-00 до 15-30, понеділок вихідний"
                    },
                    {
                        title: "Договір страхування відповідальності власників зброї",
                        hint: "Зброя може бути застрахована у будь- якій страховій компанії, яка одержала   в   установленому   порядку   ліцензію   на  проведення страхування відповідальності власників чи користувачів зброї"
                    },
                    {
                        title: "При перереєстрації зброї (продовженні терміну дії дозволу на право зберігання та носіння зброї): медичний висновок лікувального закладу про відсутність протипоказань, що перешкоджають володінню зброєю"
                    }
                ],
                result: {
                    adress: "вул. Богомольця, 10, м. Київ, 01601",
                    phone: ["(044) 256-14-30", "254-70-81", "256-14-29", "(044) 256-18-90"],
                    email: "info@police.gov.ua",
                    description: "Управління превентивної діяльності Головних управлінь Національної поліції України в областях та місті Києві щоденно, крім вихідних і святкових днів, з 09.00 до 17.45 (напередодні вихідних і святкових днів з 09.00 до 16.45) із перервою на обід з 12.45 до 13.30"
                }
            },
            {
                type: "final_steps",
                title: "Виконайте такі шаги",
                steps: [
                    {
                        title: "Письмова заява про видачу дозволу на право зберігання та носіння зброї",
                        hint: "Письмова заява про видачу дозволу на право зберігання та носіння зброї – взяти чистий аркуш паперу і кулькову  ручку та написати її у довільній формі на ім’я Управління превентивної діяльності Головних управлінь Національної поліції України в областях та місті Києві"
                    },
                    {
                        title: "Дві фотокартки розміром 3 см х 4 см"
                    },
                    {
                        title: "Платіжний документ (квитанція), який засвідчує оплату адміністративної послуги"
                    },
                    {
                        title: "Довідку про експериментальний відстріл вогнепальної зброї",
                        hint: "отримати за адресою: М. Київ, вул. Володимирська, 15 (вхід зі сторони Софійської площі) в робочі дні з 09-00 до 12-00, видача з 15-00 до 17-00 в п’ятницю з 15-00 до 16-30, субота прийом зброї з 9-00 до 12-00, видача з 14-00 до 15-30, понеділок вихідний"
                    },
                    {
                        title: "Договір страхування відповідальності власників зброї",
                        hint: "Зброя може бути застрахована у будь- якій страховій компанії, яка одержала   в   установленому   порядку   ліцензію   на  проведення страхування відповідальності власників чи користувачів зброї"
                    },
                    {
                        title: "При перереєстрації зброї (продовженні терміну дії дозволу на право зберігання та носіння зброї): медичний висновок лікувального закладу про відсутність протипоказань, що перешкоджають володінню зброєю"
                    }
                ],
                result: {
                    adress: "вул. Богомольця, 10, м. Київ, 01601",
                    phone: ["(044) 256-14-30", "254-70-81", "256-14-29", "(044) 256-18-90"],
                    email: "info@police.gov.ua",
                    description: "Управління превентивної діяльності Головних управлінь Національної поліції України в областях та місті Києві щоденно, крім вихідних і святкових днів, з 09.00 до 17.45 (напередодні вихідних і святкових днів з 09.00 до 16.45) із перервою на обід з 12.45 до 13.30"
                }
            },
        ]
    };
    
    fillInfo(JSON.stringify(json));

});

// function parseJson(json) {
//     var obj = jQuery.parseJSON(json);
//     $('#interactiveTitle').text(obj['title']);
// }
var prevIndexesList = [];
var obj;
var interactiveContainer = $("#interactiveContainer");
var backBtn = $("#backBtn");
backBtn.click(function() {
    backBtnClick(obj, prevIndexesList);
});

function fillInfo(json)
{
    obj = jQuery.parseJSON(json);

    $('#interactiveTitle').text(obj['title']);
    
    prevIndexesList = [];
    parseNode(obj, 0, prevIndexesList);
}

function parseNode(obj, index, prevIndexesList) {
    console.log(obj, index);
    var node = obj.tree[index];

    handleBackBtnVisibility(prevIndexesList);

    interactiveContainer.empty();
    switch( node['type']) {
        case 'question': fillQuestion(obj, index); break ;
        case 'select': fillSelect(obj, index); break ;
        case 'final_text': fillFinalText(obj, index); break ;
        case 'final_steps': fillFinalSteps(obj, index); break ;
        default:
    }
}

function handleBackBtnVisibility(prevIndexesList) {
    if (prevIndexesList.length == 0) {
        backBtn.css( "display", "none");
    } else {
        backBtn.css( "display", "block");
    }
}

function backBtnClick(obj, prevIndexesList) {
    var newIndex = prevIndexesList.pop();
    parseNode(obj, newIndex, prevIndexesList);
}

function fillQuestion(obj, currIndex) {
    //Fill card with html
    var node = obj.tree[currIndex];

    /////////////////////////////////////////////////////
    var question = "<p>" + node["question"] + "</p>"
    interactiveContainer.append(question);

    var noBtnElement = "<button class='btn' id='noBtn'>" + "Нi" + "</button>"
    interactiveContainer.append(noBtnElement);

    var yesBtnElement = "<button class='btn' id='yesBtn'>" + "Так" + "</button>"
    interactiveContainer.append(yesBtnElement);

    /////////////////////////////////////////////////////

    $("#yesBtn").click(function() {
        prevIndexesList.push(currIndex)
        parseNode(obj, currIndex + 2, prevIndexesList);
    });
    $("#noBtn").click(function() {
        prevIndexesList.push(currIndex)
        parseNode(obj, currIndex + 1, prevIndexesList);
    });
}

function fillSelect(obj, currIndex) {
    //Fill card with html
    
    /* inputDropDown.change(function(...) {
        var selectedIndex = ...
        prevIndexesList.push(currIndex)
        parseNode(obj, currIndex + selectedIndex, prevIndexesList)
        });
    */
}

function fillFinalText(obj, currIndex) {
    //Fill card with final text
    var node = obj.tree[currIndex];///////////////////
    interactiveContainer.text(node["result"]);//////////
}

function fillFinalSteps(obj, currIndex) {
    //Fill card with final steps
    
}