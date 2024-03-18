$("#imageTableau").hide();
$("#bureauImage").hide();
$("#bulleImage1").hide();
$("#dialogue1").hide();
$("#bulleImage2").hide();
$("#dialogue2").hide();
$("#suivant").hide();
$("#bulleImage3").hide();
$("#dialogue3").hide();
$("#explication").hide();
$("#precedent").hide();

var text1 = "Business Value, c'est quoi encore ces mots... Eh Pierre, tu sais ce que c'est toi \"Business Value\" ???";
var result1 = "";

var text2 = "\"Business Value\"... Aucune idée. Viens on va demander à Pascal, il doit savoir lui..."; 
var result2 = "";

var text3 = "Je vais vous expliquer ce que \"Business Value\" veut dire."; 
var result3 = "";

$("#bouttonTitre").on("click", function () {
    $("#bouttonTitre").hide();
    $("#bureauImage").fadeIn();
    setTimeout(() => {
        $("#bulleImage1").fadeIn();
        $("#dialogue1").fadeIn();
        $("precedent").hide();
    }, 1000);

    for (let i = 0; i < text1.length; i++) {
        setTimeout(function () {
            setTimeout(function () {
                result1 += text1[i];
                $("#dialogue1").html(result1);
                }, 50 * i);
            }, 1000);
    };
    for (let i = 0; i < text2.length; i++) {
        setTimeout(() => {
            setTimeout(function () {
            result2 += text2[i];
            $("#dialogue2").html(result2);
            }, 50 * i);
            $("#bulleImage2").fadeIn();
            $("#dialogue2").fadeIn();
        }, 7000);
    };
    setTimeout(() => {
        $("#suivant").fadeIn();
    }, 11500);
var result1 = "";
var result2 = "";
});

$("#suivant").on("click", function () {
    $("#imageTableau").fadeIn();
    $("#bulleImage3").fadeIn();
    $("#dialogue3").fadeIn();
    for (let i = 0; i < text3.length; i++) {
        setTimeout(function () {
        result3 += text3[i];
        $("#dialogue3").html(result3);
        }, 50 * i);
    }
    setTimeout(() => {
        $("#explication").fadeIn();
    }, 3500);
    setTimeout(() => {
        $("#precedent").fadeIn();
    }, 3500);
    $("#bureauImage").hide();
    $("#bulleImage1").hide();
    $("#dialogue1").hide();
    $("#bulleImage2").hide();
    $("#dialogue2").hide();
    $("#suivant").hide();
    $("#bouttonTitre").fadeIn();
    var result3 = "";
});

$("#precedent").on("click", function () {
    $("#bulleImage3").hide();
    $("#dialogue3").hide();
    $("#precedent").hide();
    $("#explication").hide();
    $("#imageTableau").hide();
});
