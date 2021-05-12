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
var button_main = document.body.querySelector("main button:nth-of-type(1)")
var click = 0

function clickcounter() {
    click = click + 1;
}



function button_tapped() {
    var widget = document.body.querySelectorAll(".widget");
    button_main.classList.toggle("button_tapped");

    if (click % 2 != 0) {
        widget.forEach(Element => {
            Element.className = "widget widget_deactivated";
            Element.innerHTML = "";
        });
        button_main.innerHTML = "+";

    } else {
        widget.forEach(Element => {
            Element.className = "widget widget_tapped"
        });

        var widget2 = document.querySelector("div:nth-of-type(2)")
        var widget3 = document.querySelector("div:nth-of-type(4)")
        var widget4 = document.querySelector("div:nth-of-type(6)")
        button_main.inner = "-";
        widget2.innerHTML = "<ul> <li> <p>+</p> <p>-</p> </li><li><p>*</p><p>/</p></li></ul>"
        widget3.innerHTML = "<ul id=\"convert\"><li><img src=\"images/weight.svg\" alt=\"Deux poids avec une flèche d'équivalence, un en kilogramme, un en livre.\"></li><li> <img src=\"images/ruler_equiv.svg\"alt=\"Deux règles avec une flèche d'équivalence, une en mètre, l'autre en unité atomique.\"></li><li><img src=\"images/temp_equiv.svg\"                        alt=\"Deux thermomètres séparés pas une flèche d'équivalence, un en degré Celsius, l'autre en degré Fahrenheit.\"></li><li><img src=\"images/money_equiv.svg\"alt=\"Le symbole dollar connecté au symbole euro par une flèche d'équivalence.\"></li><li><img src=\"images/volume_equiv.svg\"alt=\"Deux cubes séparés par une flèche d'équivalence, l'un en mètre cube, l'autre en litre.\"></li><li><img src=\"images/area_equiv.svg\"alt=\"Deux aires séparées par une flèche d'équivalence, l'une en mètre carré, l'autre en hectare.\"></li><li><img src=\"images/speed_equiv.svg\"alt=\"Deux camions avançant à toute allure, séparés par une flèche d'équivalence avec pour unité respective kilomètre par heure et mètre par seconde.\"></li><li><img src=\"images/time_equiv.svg\"alt=\"Deux horloges avec une flèche d'équivalence, une en heure, l'autre en seconde.\"></li></ul>"
        widget4.innerHTML = "<p>Saint</p><p>XXXXX</p>"


    }
}

// Widget météo
var meteo_background = ["./images/night.svg", "./images/rain.svg", "./images/snow.svg", "./images/storm.svg", "./images/sunny.svg"];
var meteo_div = document.body.querySelector('div:nth-of-type(1)');

function backgroundslide(i) {
    var timer;
    meteo_div.style.backgroundImage = "url(" + meteo_background[i++] + ")";
    if (i == meteo_background.length) {
        i = 0;
    };
    clearTimeout(timer);
    timer = setTimeout(() => backgroundslide(i), 2000)
}
backgroundslide(0);

/* Widget Converter */

var timer_c = 2000;
var i = 0;
var max = $('#convert > li').length;



setInterval(function () {


    $("#convert > li").css('opacity', '0');
    $("#convert > li").eq(i).css('transition-delay', '0.25s');

    if (i < max - 1) {
        i = i + 1;
    } else {
        i = 0;
    }

    $("#convert > li").eq(i).css('opacity', '1').css('transition-delay', '1.25s');

}, timer_c);

// Météo agrandit

function meteo_activ() {
    document.getElementsByTagName('nav')[0].className = 'menu_active';
    var widget = document.body.querySelectorAll(".widget");
    widget.forEach(Element => {
        Element.className = "widget widget_deactivated";
        Element.innerHTML = "";
    })
    button_main.className = "main_button_deactivated";
}


function meteo_closed() {
    document.getElementsByTagName('nav')[0].className = '';
    var widget = document.body.querySelectorAll(".widget");
    widget.forEach(Element => {
        Element.className = "widget widget_tapped"
    });

    var widget2 = document.querySelector("div:nth-of-type(2)")
    var widget3 = document.querySelector("div:nth-of-type(4)")
    var widget4 = document.querySelector("div:nth-of-type(6)")
    button_main.inner = "-";
    widget2.innerHTML = "<ul> <li> <p>+</p> <p>-</p> </li><li><p>*</p><p>/</p></li></ul>"
    widget3.innerHTML = "<ul id=\"convert\"><li><img src=\"images/weight.svg\" alt=\"Deux poids avec une flèche d'équivalence, un en kilogramme, un en livre.\"></li><li> <img src=\"images/ruler_equiv.svg\"alt=\"Deux règles avec une flèche d'équivalence, une en mètre, l'autre en unité atomique.\"></li><li><img src=\"images/temp_equiv.svg\"                        alt=\"Deux thermomètres séparés pas une flèche d'équivalence, un en degré Celsius, l'autre en degré Fahrenheit.\"></li><li><img src=\"images/money_equiv.svg\"alt=\"Le symbole dollar connecté au symbole euro par une flèche d'équivalence.\"></li><li><img src=\"images/volume_equiv.svg\"alt=\"Deux cubes séparés par une flèche d'équivalence, l'un en mètre cube, l'autre en litre.\"></li><li><img src=\"images/area_equiv.svg\"alt=\"Deux aires séparées par une flèche d'équivalence, l'une en mètre carré, l'autre en hectare.\"></li><li><img src=\"images/speed_equiv.svg\"alt=\"Deux camions avançant à toute allure, séparés par une flèche d'équivalence avec pour unité respective kilomètre par heure et mètre par seconde.\"></li><li><img src=\"images/time_equiv.svg\"alt=\"Deux horloges avec une flèche d'équivalence, une en heure, l'autre en seconde.\"></li></ul>"
    widget4.innerHTML = "<p>Saint</p><p>XXXXX</p>"
    button_main.className = "button_untapped button_tapped";
}

// Modal
var button_back = document.querySelector("nav>button")
var modal_menu = document.querySelector("nav > div");
var footer = document.querySelector("footer")
function modal() {
    modal_menu.style.display = "flex";
    button_back.style.display = "none"
    modal_menu.className = 'modal_activated'
    footer.style.display = "none"
}

function modal_close(){
    modal_menu.style.display = "none";
    button_back.style.display = "block"
    footer.style.display = "flex"
}