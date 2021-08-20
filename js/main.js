$(document).ready(function () {
    var currentFloor = 2; // переменная, где хранится текущий этаж
    var counterUp = $(".counter-button--up"); // кнопка увеличения этажа
    var counterDown = $(".counter-button--down"); // кнопка уменьшения этажа
    var modal=$(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");
    
    //функция при наведении курсором на этаж
    $(".home-image path").on("mouseover", function(){
        $(".home-image path").removeClass("current-floor") // удаляем активный класс у этаже
        currentFloor=$(this).attr("data-floor"); //получаем значение текущего этажа
        $(".counter").text(currentFloor);// записываем значение этажа в счетчик справа
    });
    
    $(".home-image path").on("click", function () {
        modal.toggleClass("is-open")
      });

    modalCloseButton.on("click", function(){
        modal.toggleClass("is-open");
    });
    
    viewFlatsButton.on("click", function () {
        modal.toggleClass("is-open");
    });

    counterUp.on("click", function(){ // отслеживаем клик по кнопке вверх
        if (currentFloor < 18){ // проверяем значение этажа
            currentFloor++; 
        usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false}); // форматирование переменной с этажом
        $(".counter").text(usCurrentFloor);
        $(".home-image path").removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
    });
    counterDown.on("click", function(){
        if(currentFloor>2){
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false});
        $(".counter").text(usCurrentFloor);
        $(".home-image path").removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
});