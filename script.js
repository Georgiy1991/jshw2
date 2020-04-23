var inputData = document.querySelector('input[type="text"]');
var list = document.getElementById('list');
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

/*addEventListener- получение типа события и вызов функции*/ 
inputData.addEventListener('keypress', function(event){
    if(event.which !== 13){
        return;
    }

    if(!this.value.trim()) {
        alert('Ну введи чё-нить, ёптыть');
        return;
    }

    var newLi = document.createElement('li');
    var newSpan = document.createElement('span');
    newSpan.setAttribute('id', 'span');
    var text = document.createElement('p');
    text.setAttribute('id', 'text');
    newSpan.innerHTML = ' Delete ';
    var currentDate = document.createElement('p');
    currentDate.setAttribute('id', 'date');
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();
    currentDate.innerHTML = 'created at: ' + day + ' ' + monthNames[month] + ' ' + year;

// add classes

   newSpan.classList.add("new-span");
   newLi.classList.add("new-li");
   text.classList.add("new-text");

    
    text.innerHTML = this.value;
    this.value = ''; /*Очистка поля ввода*/

    list.appendChild(newLi).append(text, currentDate, newSpan);

});

var button = document.getElementById('button');


button.addEventListener('click', function(){
    alert ('Булда Георгий Вячеславович 1991 года рождения');
});


document.addEventListener('click', function(event){
    if(event.target && (event.target.id === 'text' || event.target.id === 'date')) {
        var childrens = event.target.parentNode.childNodes;
        childrens[0].style.textDecoration = 'line-through';
        childrens[1].style.textDecoration = 'line-through';
    }
    if(event.target && event.target.id === 'span') {
        event.target.parentNode.remove();
    }
});





