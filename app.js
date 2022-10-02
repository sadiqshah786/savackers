// off_menu
var openBtn = document.getElementById('openBtn');
var off_menu = document.getElementById('off_menu');

function openNav() {
    off_menu.style.width = "100%";
}
function closeNav() {
    off_menu.style.width = "0%";

}

function recommendMessage() {
    var message = document.getElementById('message');
    var buttons = document.getElementsByClassName('recommendedButtons')[0];
    message.style.display = "block";
    buttons.remove();
}


// modal for revealCode 
var modal_custom = document.getElementsByClassName('modal_wrapper')[0];
function showModal() {
    modal_custom.style.display = "block";
}
function closeModal() {
    modal_custom.style.display = "none";
}

// modal for Deal
var modal_custom2 = document.getElementsByClassName('modal_wrapper2')[0];
function ShowDeal() {
    modal_custom2.style.display = "block";
}
function closeDeal() {
    modal_custom2.style.display = "none";
}


function copyCouponCode() {
    var copyTextarea = document.querySelector('#values');
    var changeText = document.getElementById('changeText');
    navigator.clipboard.writeText(copyTextarea.value);
    changeText.innerText = " Copied! "
}

function SubscriptoinfromValidation() {
    event.preventDefault();
    var Subemail = document.getElementsByClassName('Subemail')[0]
    console.log(Subemail.value)
}

function hi(){
    alert("Hi")
}