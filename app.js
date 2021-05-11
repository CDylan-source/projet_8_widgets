//Fonction accessible

var header = document.body.querySelector("header");
var header_article = document.body.querySelector("header article");

function accessibility_on() {
    header.classList.toggle("header_activated");
    header_article.classList.toggle("header_article_deactivated");
    header_article.classList.toggle("header_article_activated")
}

// Météo accessible
var meteo_accessible = document.body.querySelector("header ul li:nth-of-type(1)")
var calc_accessible = document.body.querySelector("header ul li:nth-of-type(2)")
var convert_accessible = document.body.querySelector("header ul li:nth-of-type(3)")
var fete_accessible = document.body.querySelector("header ul li:nth-of-type(4)")

function accessibility_meteo() {
    meteo_accessible.classList.add("header_activated_ul_li");
    calc_accessible.classList.remove("header_activated_ul_li");
    convert_accessible.classList.remove("header_activated_ul_li");
    fete_accessible.classList.remove("header_activated_ul_li")
}

function accessibility_calc() {
    meteo_accessible.classList.remove("header_activated_ul_li");
    calc_accessible.classList.add("header_activated_ul_li");
    convert_accessible.classList.remove("header_activated_ul_li");
    fete_accessible.classList.remove("header_activated_ul_li");
}

function accessibility_convert() {
    meteo_accessible.classList.remove("header_activated_ul_li");
    calc_accessible.classList.remove("header_activated_ul_li");
    convert_accessible.classList.add("header_activated_ul_li");
    fete_accessible.classList.remove("header_activated_ul_li");
}

function accessibility_fete() {
    meteo_accessible.classList.remove("header_activated_ul_li");
    calc_accessible.classList.remove("header_activated_ul_li");
    convert_accessible.classList.remove("header_activated_ul_li");
    fete_accessible.classList.add("header_activated_ul_li");
}

// Bouton tapped
var button_main = document.body.querySelector("main button:nth-of-type(2)")
var click = 0

function clickcounter(){
    click = click + 1;
}



function button_tapped() {
    var widget = document.body.querySelectorAll(".widget");
    button_main.classList.toggle("button_tapped");
    
    if(click % 2 != 0){
        widget.forEach(Element => {Element.className = "widget widget_deactivated"});
        button_main.innerHTML = "+";
        
    }
    else{
        widget.forEach(Element => {Element.className = "widget widget_tapped"});
        button_main.innerHTML = "-";
    }
}

// Widget météo
var meteo_background = ["./images/night.svg", "./images/rain.svg", "./images/snow.svg", "./images/storm.svg", "./images/sunny.svg"];
var meteo_div = document.body.querySelector('div:nth-of-type(1)');

function backgroundslide(i) {
    var timer;
    meteo_div.style.backgroundImage = "url("+meteo_background[i++]+")";
    if ( i == meteo_background.length) {i = 0;};
    clearTimeout(timer);
    timer = setTimeout(() => backgroundslide(i),2000)
}
 backgroundslide(0)
