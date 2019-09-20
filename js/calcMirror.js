var shape = "arck";
var img_path = "/wp-content/themes/steklo/images/calc";
var ext = ".png";

jQuery(function() {


    jQuery('select[name="obrabotka"]').on('change', function(e) {
        e.preventDefault();

        var info_text = jQuery(this).find('option:selected').text();
        var info_type = 0;
        if (jQuery('select[name="forma"]').val() > 0) {
            info_type = getInfoByCurvCode(info_text);
        } else {
            info_type = getInfoByCode(info_text);
        }

        changeInfo(info_type);
    });

    jQuery('select[name="forma"]').on('change', function(e) {
        var index = Number(jQuery(this).val());
        var shape_id = index;
        var shape = arrForma[shape_id][3];
        var select_elem = jQuery(this);
        if (jQuery('select[name="otverstie"]').val() == 0) {
            changeShape(shape);
        }
    });

    jQuery('select[name="borders"]').on('change', function(e) {
        e.preventDefault();
        var shape = jQuery(this).val();
        changeBorders(shape);

    });

    jQuery('select[name="material"]').on('change', function (e) {
        var material_type = getColorByCode(jQuery(this).val());
        //console.log(material_type);
        changeMaterial(material_type);
    });

    jQuery('select[name="obrabotka"]').trigger('change');
    jQuery('select[name="forma"]').trigger('change');
    jQuery('select[name="borders"]').trigger('change');
    jQuery('select[name="material"]').trigger('change');
});

function changeBorders(info_type) {

    var path = img_path + "/borders/info" + info_type + '/info';
    var index = Number(jQuery('select[name="forma"]').val());
    var shape_id = index ;
    var shape = arrForma[shape_id][3];
    jQuery('.option_shape_border').css('background-image', 'url(' + path + info_type + '_' + shape + ext + ')');
}

function changeInfo(info_type) {

    var path = img_path + "/info/info";

    jQuery('.option_info').css('background-image', 'url(' + path + info_type + ext + ')');

    changeBorders(info_type);
}

function changeShape(shape) {
    var path = img_path + "/";

    jQuery('.option_shape').css('background-image', 'url(' + path + shape + ext + ')');


    //var mat = getMatByCode(jQuery('select[name="material"]').val());
    //var objectfx_name = "objectfx_" + mat + "_" + (shape == "ellipse" ? "ellipse" : "all");
    //if (mat == 'glassmat') {
    //    jQuery('.option_stuff').css('background-image', 'url(' + path + 'object_glass' + ext + ')');
    //} else {
    //    jQuery('.option_stuff').css('background-image', 'url(' + path + 'object_' + mat + ext +')');
    //}
    //

    //jQuery('.option_stuff_objectfx').css('background-image', 'url(' + path + 'objectfx/' + objectfx_name + ext + ')');
    var material = getColorByCode(jQuery('select[name="material"]').val());

    changeMaterial(material);
    var info_text = jQuery('select[name="obrabotka"] option:selected').text();
    var info_type = 0;
    var index = Number(jQuery('select[name="forma"]').val());
    if (index > 0) {
        info_type = getInfoByCurvCode(info_text);
    } else {
        info_type = getInfoByCode(info_text);
    }
    changeBorders(info_type);
}

function changeMaterial(material_type) {
    //console.log(material_type);
    var ext = ".png";
    var index = Number(jQuery('select[name="forma"]').val());
    var shape_id = index;
    var shape = arrForma[shape_id][3];
    if (material_type) {
        var path = img_path + "/colors/" + material_type + '/';

        jQuery('.option_shape_colors').css('background-image', 'url(' + path + material_type + '_' + shape + ext + ')');
    } else {
        jQuery('.option_shape_colors').css('background-image', 'none');
    }
    var mat = getMatByCode(jQuery('select[name="material"]').val());
    var objectfx_name = "objectfx_" + mat + "_" + (shape == "ellipse" ? "ellipse" : "all");
    jQuery('.option_stuff_objectfx').css('background-image', 'url(' + img_path + '/objectfx/' + objectfx_name + ext + ')');
    if (mat == 'glassmat') {
        jQuery('.option_stuff').css('background-image', 'url(' + img_path + '/' + 'object_glass' + ext + ')');
    } else {
        jQuery('.option_stuff').css('background-image', 'url(' + img_path + '/' + 'object_' + mat + ext +')');
    }
    if (mat == 'mirror') {
        jQuery('.option_stuff').css('z-index', '6');
    } else {
        jQuery('.option_stuff').css('z-index', '4');
    }
}

function getInfoByCode(code) {
    for (var k in arrKromka) {
        if (arrKromka[k][0] == code) {
            return arrKromka[k][5];
        }
    }
    return 0;
}
function getInfoByCurvCode(code) {
    for (var k in arrCurvKromka) {
        if (arrCurvKromka[k][0] == code) {
            return arrCurvKromka[k][5];
        }
    }
    return 0;
}
function getColorByCode(code) {
    //console.log(code);
    for (var k in arrMaterial) {
        if (arrMaterial[k][1] == code) {
            return arrMaterial[k][5];
        }
    }
    return "";
}
function getMatByCode(code) {
    for (var k in arrMaterial) {
        if (arrMaterial[k][1] == code) {
            return arrMaterial[k][6];
        }
    }
    return 0;
}

function submitOrder(form) {

}

// JavaScript Document

var pricezerk = {
    "SERBRO4MMRECTANGLE": [100, 990, 5],
    "SERBRO5MMRECTANGLE": [0, 1210 , 5],
    "SERBRO6MMRECTANGLE": [0, 1650, 5],
    "OSVETVLENNOE4MMRECTANGLE": [0, 3300,5],
    "OSVETVLENNOE6MMRECTANGLE": [0, 4400,5],
    "BRONZATONIR4MMRECTANGLE": [0, 1430, 5],
    "BRONZAGRAFIT6MMRECTANGLE": [0, 1430, 5],
    "ZOLOTODEKOR4MMRECTANGLE": [0, 2750, 5],
    "ZOLOTOSTAROE4MMRECTANGLE": [0, 6490, 5],
    "POLIRRECTNORECT4": [0, 88, 2],
    "POLIRRECTNORECT5": [0, 99, 2],
    "POLIRRECTNORECT6": [0, 110, 2],
    "FACET1015RECTNORECT": [0, 143, 2],
    "FACET20RECTNORECT": [0, 176, 2],
    "FACET2530RECTNORECT": [0, 230, 2],
    "FACET35RECTNORECT": [0, 330, 2],
    "POLIRKRUG4": [0, 155, 2],
    "POLIRKRUG5": [0, 160, 2],
    "POLIRKRUG6": [0, 165, 2],
    "FACET1015KRUG": [0, 365, 2],
    "FACET20KRUG": [0, 465, 2],
    "FACET2530KRUG": [0, 615, 2],
    "FACET35KRUG": [0, 770, 2],
    "140PUZIR": [0, 50, 3],
    "SVERLO1": [0, 77, 3],
    "SVERLO2": [0, 88, 3],
    "SVERLO3": [0, 121, 3],
    "SVERLO4":  [0, 550, 3],
    "SVERLO5":  [0, 300, 3],
    "SVERLO6":  [0, 400, 3],
    "PLENKAUPAK": [0, 330, 1],
    "KREPLENIEO1": [0, 440, 4],
    "KREPLENIEO2": [0, 150, 4],
}

var arrMaterial = [["Зеркало серебро 4 мм", "SERBRO4MMRECTANGLE", "Зеркало 4мм", false, 4, "", "mirror"],
    ["Зеркало серебро 5 мм", "SERBRO5MMRECTANGLE", "Зеркало 5мм", true, 5, "", "mirror"],
    ["Зеркало серебро 6 мм", "SERBRO6MMRECTANGLE", "Зеркало 6мм", false, 6, "", "mirror"],
    ["Зеркало осветленное 4 мм", "OSVETVLENNOE4MMRECTANGLE", "Зеркало осветленное 4мм", false, 4, "", "mirror"],
    ["Зеркало осветленное 6 мм", "OSVETVLENNOE6MMRECTANGLE", "Зеркало осветленное 6мм", false, 6, "", "mirror"],
    ["Зеркало бронза (тонированное) 4 мм", "BRONZATONIR4MMRECTANGLE", "Зеркало бронза 4мм", false, 4, "bronse", "mirror"],
    ["Зеркало графит (тонированное) 4 мм", "BRONZAGRAFIT6MMRECTANGLE", "Зеркало графит 4мм", false, 4, "gray", "mirror"],
    ["Зеркало золото (декоративное) 4 мм", "ZOLOTODEKOR4MMRECTANGLE", "Зеркало золото 4мм", false, 4, "gold", "mirror"],
    ["Зеркало заводское состаренное 4 мм", "ZOLOTOSTAROE4MMRECTANGLE", "Зеркало состаренное 4мм", false, 4, "old", "mirror"],
  ];

var arrKromka = [["Без обработки", 0, "", false, 0, 1],
    ["Полировка", "POLIRRECTNORECT4", "полир.", true, 4, 2],
    ["Полировка", "POLIRRECTNORECT5", "полир.", true, 5, 2],
    ["Полировка", "POLIRRECTNORECT6", "полир.", true, 6, 2],
    ["Фацет 10-15мм", "FACET1015RECTNORECT", "фацет 10-15мм", false, 4, 2],
    ["Фацет 10-15мм", "FACET1015RECTNORECT", "фацет 10-15мм", false, 5, 2],
    ["Фацет 10-15мм", "FACET1015RECTNORECT", "фацет 10-15мм", false, 6, 2],
    ["Фацет 20мм", "FACET20RECTNORECT", "фацет 20мм", false, 4, 2],
    ["Фацет 20мм", "FACET20RECTNORECT", "фацет 20мм", false, 5, 2],
    ["Фацет 20мм", "FACET20RECTNORECT", "фацет 20мм", false, 6, 2],
    ["Фацет 25-30мм", "FACET2530RECTNORECT", "фацет 25-30мм", false, 4, 2],
    ["Фацет 25-30мм", "FACET2530RECTNORECT", "фацет 25-30мм", false, 5, 2],
    ["Фацет 25-30мм", "FACET2530RECTNORECT", "фацет 25-30мм", false, 6, 2],
    ["Фацет 35мм","FACET35RECTNORECT", "фацет 35мм", false, 4, 2],
    ["Фацет 35мм","FACET35RECTNORECT", "фацет 35мм", false, 5, 2],
    ["Фацет 35мм","FACET35RECTNORECT", "фацет 35мм", false, 6, 2]
  ];

var arrForma = [["Прямоугольник", 0, 0, "rectangle"],
    ["Овал, круг, с закругленными углами", "KRUG", "круглое", "ellipse"],
    ["Непрямоугольное", "NORECT", "с закругл.углами", "rectanglerounded"]];

var arrCurvKromka = [["Без обработки", 0, "", false, 0, 1],
    ["Полировка", "POLIRKRUG4", "полир.", true, 4, 2],
    ["Полировка", "POLIRKRUG5", "полир.", true, 5, 2],
    ["Полировка", "POLIRKRUG6", "полир.", true, 6, 2],
    ["Фацет 10-15мм", "FACET1015KRUG", "фацет 15мм", false, 4, 2],
    ["Фацет 10-15мм", "FACET1015KRUG", "фацет 15мм", false, 5, 2],
    ["Фацет 10-15мм", "FACET1015KRUG", "фацет 15мм", false, 6, 2],
    ["Фацет 20мм", "FACET20KRUG", "фацет 20мм", false, 4, 2],
    ["Фацет 20мм", "FACET20KRUG", "фацет 20мм", false, 5, 2],
    ["Фацет 20мм", "FACET20KRUG", "фацет 20мм", false, 6, 2],
    ["Фацет 25-30мм", "FACET2530KRUG", "фацет 15мм", false, 4, 2],
    ["Фацет 25-30мм", "FACET2530KRUG", "фацет 15мм", false, 5, 2],
    ["Фацет 25-30мм", "FACET2530KRUG", "фацет 15мм", false, 6, 2],
    ["Фацет 35мм","FACET35KRUG", "фацет 20мм", false, 4, 2],
    ["Фацет 35мм","FACET35KRUG", "фацет 20мм", false, 5, 2],
    ["Фацет 35мм","FACET35KRUG", "фацет 20мм", false, 6, 2]
  ];

var upak = "140PUZIR";

function ClearSelectionMenu(selmenu)
{
    for (var j = 0; j < selmenu.options.length; j++)
        selmenu.options[j] = null;
    selmenu.options.length = 0;
}

function FillSelectionMenu(selmenu, arr)
{
    ClearSelectionMenu(selmenu);
    for (var n = 0; n < arr.length; n++)
    {
        selmenu[n] = new Option(arr[n][0], arr[n][1]);
        if (arr[n][3]) selmenu[n].selected = true;
    }
}

function FillSelectionMenu2(selmenu, arr, tol)
{
    ClearSelectionMenu(selmenu);
    var ind = 0;
    for (var n = 0; n < arr.length; n++)
    {
        if ((arr[n][4] == tol) || (arr[n][4] == 0))
        {
            selmenu[ind] = new Option(arr[n][0], n);
            if (arr[n][3]) selmenu[ind].selected = true;
            ind++;
        }
    }
}

function ChangeKromkaList()
{
    //alert(document.online_calc);
    // в зависимости от материала и формы допускается разная обработка
    if (document.online_calc.otverstie.selectedIndex == 0 && document.online_calc.kreplenie.selectedIndex == 0)
    {
        jQuery('#forma').siblings('.alarm_block').hide(200);
        if (document.online_calc.forma.selectedIndex == 0 || document.online_calc.forma.selectedIndex == 3)
            FillSelectionMenu2(document.online_calc.obrabotka, arrKromka, arrMaterial[document.online_calc.material.selectedIndex][4]);
        else
            FillSelectionMenu2(document.online_calc.obrabotka, arrCurvKromka, arrMaterial[document.online_calc.material.selectedIndex][4]);

        var info_text = jQuery('select[name="obrabotka"] option:selected').text();
        var info_type = 0;
        var index = Number(jQuery('select[name="forma"]').val());
        if (index > 0) {
            info_type = getInfoByCurvCode(info_text);
        } else {
            info_type = getInfoByCode(info_text);
        }
        changeInfo(info_type);


    }
    else
    {
        if (document.online_calc.kreplenie.selectedIndex == 0)
        {
          document.online_calc.plenka.checked = true;
          FillSelectionMenu2(document.online_calc.obrabotka, [["Без обработки", 0, "", false, 0]], 0);
        }
        else
        {
          document.online_calc.plenka.checked = true;
          FillSelectionMenu2(document.online_calc.obrabotka, [["Без обработки", 0, "", false, 0]], 0);
          jQuery('select[name="otverstie"]').val(1);
        }
        
    }
    calc();
}

function ChangeKrepeg()
{
    calc();
}
// register jQuery extension
jQuery.extend(jQuery.expr[':'], {
    focusable: function (el, index, selector) {
        return jQuery(el).is('a, button, :input, [tabindex]');
    }
});
jQuery(document).on('keypress', 'input,select', function (e) {
    if (e.which == 13) {
        e.preventDefault();
        // Get all focusable elements on the page
        var $canfocus = jQuery(':focusable');
        var index = $canfocus.index(this) + 1;
        if (index >= $canfocus.length) index = 0;
        $canfocus.eq(index).focus();
    }
});

function isNumberlnput (field, event)
{
    var key, keyChar;

    if (window.event)
        key = window.event.keyCode;
    else if (event)
        key = event.which;
    else
        return true;

    if ( key == 13 ) {
        return false;
    }

// Проверка на специальные символы типа возврата на одну позицию
    if (key == null || key == 0 || key == 8 || key == 27)
        return false;

// Проверка на числа
    keyChar = String.fromCharCode(key);

    if (/\d/.test(keyChar))
    {
        window.status = "";
        return true;
    }
    else
    {
        window.status = "Поле допускает ввод только чисел.";
        return false;
    }
}

function format(value)
{
// Формат, допускающий только два десятичных знака
    var temp = Math.round(value * 100);
    temp = temp / 100;
    return temp;
}
function format10(value)
{
// Формат, округление до 10
    var temp = Math.round(value / 10);
    temp = temp * 10;
    return temp;
}

function GetUnitSum(code, siz1, siz2, plo, per, kolvo, big)
{
    if (pricezerk[code] !== undefined)
    {
        if (pricezerk[code][2] == 1)
          return kolvo * pricezerk[code][1];
        if (pricezerk[code][2] == 2)
          return kolvo * (pricezerk[code][1] * per);
        if (pricezerk[code][2] == 3)
          return kolvo * pricezerk[code][1];
        if (pricezerk[code][2] == 4)
          return kolvo * pricezerk[code][1];
        if (pricezerk[code][2] == 5)
          return kolvo * (pricezerk[code][1] * plo);
    }
    return 0;
}

function calc()
{
    var plo, per, ves;
    var siz1, siz2, kolvo, big = 1, linesum, total = 0;   // double
    var kvo, kateg = 1;  // integer

    with (document.online_calc)
    {
        area.value = format(size1.value / 1000 * size2.value / 1000 * amount.value);
        //jQuery('#area').html(format(size1.value / 1000 * size2.value / 1000 * amount.value)+' м2');
        siz1 = size1.value;
        siz2 = size2.value;
        if (siz1 > 2500) { siz1 = 2500; size1.value = siz1; }
        if (siz2 > 2500) { siz2 = 2500; size2.value = siz2; }
        if (siz1 > 2000 && siz2 > 2000) { siz2 = 2000; size2.value = siz2; }
        if (siz1 < 150) { siz1 = 150; size1.value = siz1; }
        if (siz2 < 150) { siz2 = 150; size2.value = siz2; }
        kolvo = amount.value;
        if (kolvo == 0) { kolvo = 1; amount.value = kolvo; }
        if (kolvo > 1000) { kolvo = 1000; amount.value = kolvo; }
        // площадь и периметр
        plo = (siz1/1000) * (siz2/1000);
        per = (siz1/1000) * 2 + (siz2/1000) * 2;
        // вес
        tol = arrMaterial[material.selectedIndex][4];
        ves = plo * kolvo * 10 * tol / 4;
        weight.value = format(ves);
        jQuery('#weight').html(format(ves)+' кг');
        jQuery('#area').html(format(size1.value / 1000 * size2.value / 1000 * amount.value)+' м2');

        // расчет стоимости
        // материал
        ind = material.selectedIndex;
        total = GetUnitSum(material.options[ind].value, siz1, siz2, plo, per, kolvo, big);
        product.value = arrMaterial[ind][2] + " " + siz1.toString() + "x" + siz2.toString() + "мм";
        // кромка
        ind = obrabotka.options[obrabotka.selectedIndex].value;   // индекс для массива arrKromka, т.к. его индекс не совпадает с индексом obrabotka
        if (forma.selectedIndex == 0 || forma.selectedIndex == 2)
            linesum = GetUnitSum(arrKromka[ind][1], siz1, siz2, plo, per, kolvo, big);
        else
            linesum = GetUnitSum(arrCurvKromka[ind][1], siz1, siz2, plo, per, kolvo, big);
        if (linesum > 0)
        {
            total += linesum;
            product.value += " " + arrKromka[ind][2];
        }
        // форма
        if (forma.selectedIndex > 0)
        {
            ind = forma.selectedIndex;
            if (ind == 1) {
              total += total * 0.2
            }
            if (ind == 2) {
              total += total * 0.1
            }
            product.value += " " + arrForma[ind][2];
        }
        if (tol == 4) {
          sverlo = "SVERLO5";
        } else {
          sverlo = "SVERLO6"
        }
        // пленка
        if (plenka.checked)
        {
            total += GetUnitSum(plenka.value, siz1, siz2, plo, per, kolvo, 1);
            product.value += " с пленкой безопасности";
        }
        if (otverstie.selectedIndex == 1)
        {
            total += GetUnitSum("SVERLO1", siz1, siz2, plo, per, kolvo, 1);
            product.value += " отверстие с зенковкой ᴓ 4-12 мм";
        }
        else if (otverstie.selectedIndex == 2)
        {
            total += GetUnitSum("SVERLO2", siz1, siz2, plo, per, kolvo, 1);
            product.value += " отверстие с зенковкой ᴓ 13-30 мм";
        }
        else if (otverstie.selectedIndex == 3)
        {
            total += GetUnitSum("SVERLO3", siz1, siz2, plo, per, kolvo, 1);
            product.value += " отверстие с зенковкой ᴓ 31-70 мм";
        }
        else if (otverstie.selectedIndex == 4)
        {
            total += GetUnitSum("SVERLO4", siz1, siz2, plo, per, kolvo, 1);
            product.value += " отверстие с зенковкой ᴓ 70-100 мм";
        }
        else if (otverstie.selectedIndex == 5)
        {
            total += GetUnitSum(sverlo, siz1, siz2, plo, per, kolvo, 1);
            product.value += " вырез механический шлифованный";
        }

        if (kreplenie.selectedIndex == 1)
        {
            total += GetUnitSum("KREPLENIEO1", siz1, siz2, plo, per, kolvo, 1);
            product.value += " металлические пластины (2 шт)";
        }
        else if (kreplenie.selectedIndex == 2)
        {
            total += GetUnitSum("KREPLENIEO2", siz1, siz2, plo, per, kolvo, 1);
            product.value += " крепеж-шайба";
        }

        if (total / kolvo > 1000)
          total = total * kolvo;
        else
          total = 1000 * kolvo;
        //cost.value = Math.round(total);
        jQuery('#cost').html(Math.round(total)+' Р');
        // определяем ширину фацета, если он есть
        kvo = product.value.indexOf("фацет ");
        fw = "";
        if (kvo > 0)
        {
            sss = product.value.substring(kvo + 6);
            kvo = sss.indexOf("мм");
            fw = sss.substring(0, kvo);
        }

    }
}
function onLoadFunc()
{

    var elem = document.getElementById('myCanvas');
    if (elem && elem.getContext)
    {
        var context = elem.getContext('2d');
        context.strokeRect(0, 0, canvasSize, canvasSize);
        imageFon.src = "http://www.zerkaloff.ru/test/wp-content/themes/zerkalov/visual_bg.jpg";
        imageGirl.src = "http://www.zerkaloff.ru/test/wp-content/themes/zerkalov/visual_girl.png";
        imageFon.onload = function(){calc()};
    }
    var zak = document.getElementById('zakaz');
    //if (zak)
        //zak.readOnly = true;
    //document.getElementById('zakaztotal').readOnly = true;
    //document.getElementById('zakazdost').readOnly = true;
    //document.getElementById('zakazup').readOnly = true;
    //document.getElementById('zakazves').readOnly = true;
    //var el = document.getElementById('sposob');
    //if (el)
    //    el.onchange = dostavka;
    //el = document.getElementById('regiondost');
    //if (el)
    //    el.onchange = dostavka;
    //el = document.getElementById('numfloor');
    //if (el)
    //    el.onchange = dostavka;
    //el = document.getElementById('lift');
    //if (el)
    //    el.onchange = dostavka;
}

//--добавление для формы отправки заказа
var zaktotal = 0;
var zakves = 0;

function AddIzdelie()
{
    var zak = document.getElementById('zakaz');
    if (zak)
    {
        if (document.getElementById('zakaztotal').value == "")
            zaktotal = 0;
        zak.value = zak.value +
            document.online_calc.product.value + " - " +
            document.online_calc.amount.value + "шт., сумма " +
            document.online_calc.cost.value + "руб.\n";
        zaktotal = zaktotal + Math.round(document.online_calc.cost.value);
        document.getElementById('zakaztotal').value = zaktotal;
        zakves = zakves + Math.round(document.online_calc.weight.value);
        document.getElementById('zakazves').value = zakves;
        //dostavka();
    }
}
function ClearZakaz()
{
    document.getElementById('zakaz').value = "";
    document.getElementById('zakaztotal').value = "0";
    zaktotal = 0;
    zakves = 0;
    document.getElementById('zakazves').value = "0";
}
function clearText(thefield)
{
    if (thefield.defaultValue == thefield.value)
        thefield.value = "";
}


summ=0;
function addZak(){
    var rand_str = Math.round(Math.random()*1000);
    //console.log(rand_str);
    jQuery('#zakcont').append('<div class="calc_table_item calc_row" data-id="' + rand_str + '">'+
        '<div class="calc_col content_middle first calc_item_name"><span>'+document.online_calc.product.value+'</span></div>'+
        '<div class="calc_col content_middle calc_item_weidth"><span>'+jQuery('#weight').html()+'</span></div>'+
    '<div class="calc_col content_middle calc_item_area"><span>'+document.online_calc.area.value+' м2</span></div>'+
    '<div class="calc_col content_middle calc_item_count"><span>'+document.online_calc.amount.value+' шт</span></div>'+
    '<div class="calc_col content_middle calc_item_price"><span>'+jQuery('#cost').html()+'</span></div>'+
    '<div class="delete_calc_item" onclick="deleteitem(this)"></div>'+'</div>');
    jQuery('.calc_table_items').show(200);
    scrollToDiv(jQuery('#results'), 100);
    summ = summ + parseInt(jQuery('#cost').html());
    var hidden_inputs_html = "";
    hidden_inputs_html += '<input type="hidden" name="products[' + rand_str + '][title]" value="' + document.online_calc.product.value + '" />';
    hidden_inputs_html += '<input type="hidden" name="products[' + rand_str + '][weight]" value="' + jQuery('#weight').html() + '" />';
    hidden_inputs_html += '<input type="hidden" name="products[' + rand_str + '][area]" value="' + document.online_calc.area.value + '" />';
    hidden_inputs_html += '<input type="hidden" name="products[' + rand_str + '][count]" value="' + document.online_calc.amount.value + '" />';
    hidden_inputs_html += '<input type="hidden" name="products[' + rand_str + '][price]" value="' + jQuery('#cost').html() + '" />';
    jQuery('#calc_form').append(hidden_inputs_html);
    countsumm();
}
function deleteitem(e){
    var item = jQuery(e).siblings('div.calc_item_price').find('span').html();
    var rand_str = jQuery(e).parent().data('id');
    var price = parseInt(item);
    summ = summ - price;
    jQuery(jQuery(e).parent()).remove();
    if (jQuery('.calc_table_item').length==0){jQuery('.calc_table_items').hide(200);scrollToDiv(jQuery('#online_calc'), 100);}
    jQuery('#calc_form input').remove('input[name^="products[' + rand_str + ']"]');
    countsumm();
}

function deleteAll() {
    if (confirm("Вы уверены, что хотите удалить все товары (" + jQuery('.calc_table_item').length + ")?")) {
        var items = jQuery('.delete_calc_item');
        if (items.length) {
            items.each(function(indx, element){
                jQuery(element).click();
            });
        }
    }
}


function countsumm(){
    jQuery('#summ').html(summ + '<span>Р</span>');
}

function scrollToDiv(element,navheight){
    var offset = element.offset();
    var offsetTop = offset.top;
    var totalScroll = offsetTop-navheight;

    jQuery('body,html').animate({
        scrollTop: totalScroll
    }, 500);
}

function Steps(){
    scrollToDiv(jQuery('#step1'), 100);
    jQuery('#step1').toggle();
    jQuery('#step2').toggle();

}

function changeNeedDelivery(elem) {
    var checked = jQuery(elem).prop('checked');
    if (checked) {
        jQuery('#need_delivery').attr('checked', true);
        jQuery('#need_delivery').val("1");
        jQuery('.address_block').fadeIn(400);
        jQuery('#address').prop('required', true);
        
        // Вешаем изображение галочки на чекбокс доставки
        jQuery('#need_delivery').next('.checkbox_label').css('background-image', 'url(/netcat_template/template/2/img/input_style/checkbox_on.svg)');
        
    } else {
        jQuery('#need_delivery').attr('checked', false);
        jQuery('#need_install').attr('checked', false);
        jQuery('#need_delivery').val("0");
        jQuery('#need_install').val("0");
        jQuery('#address').val('');
        jQuery('.address_block').fadeOut(400);
        jQuery('#address').prop('required', false);
        
        // Снимаем галочку с нужна доставка
        jQuery('#need_delivery').next('.checkbox_label').css('background-image', 'url(/netcat_template/template/2/img/input_style/checkbox_bg.svg)');
        
        // Снимаем галочку с требуется установка
        jQuery('#need_install').next('.checkbox_label').css('background-image', 'url(/netcat_template/template/2/img/input_style/checkbox_bg.svg)');
    }
}

function changeNeedInstall(elem) {
    var checked = jQuery(elem).prop('checked');
    // Если требуется установка, производится и доставка
    if (checked) {
        jQuery('#need_delivery').attr('checked', true);
        jQuery('#need_install').attr('checked', true);
        jQuery('#need_delivery').val("1");
        jQuery('#need_install').val("1");
        jQuery('.address_block').fadeIn(400);
        jQuery('#address').prop('required', true);
   
        // Вешаем изображение галочки на чекбокс доставки
        jQuery('#need_delivery').next('.checkbox_label').css('background-image', 'url(/netcat_template/template/2/img/input_style/checkbox_on.svg)');
        // Вешаем изображение галочки на чекбокс установки
        jQuery('#need_install').next('.checkbox_label').css('background-image', 'url(/netcat_template/template/2/img/input_style/checkbox_on.svg)');
        
    } else {
        jQuery('#need_install').attr('checked', false);
        jQuery('#need_install').val("0");
        // Снимаем изображение галочки с чекбокса установки
        jQuery('#need_install').next('.checkbox_label').css('background-image', 'url(/netcat_template/template/2/img/input_style/checkbox_bg.svg)');
    }
}