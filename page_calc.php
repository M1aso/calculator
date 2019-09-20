<?php
/* Template Name: Калькулятор   */

get_header(); ?>

<main  class="site-content-page">
	<div class="site-content-page-inner ">
		<div class="page-content">
			<div id="post-62" class="post-62 page type-page status-publish hentry">
				<div class="entry-content">
					<div class="container" id="step1">
						<div class="vc_row wpb_row vc_row-fluid">
							<div class="calculator_container cf">
            <div class="block_padding">
                <div class="form_calc cf">
                    <div class="def_form cf">
                        <form action="/" method="post" onsubmit="return false;" id="online_calc" name='online_calc' data-id="calc_form">
                            <div class="form_fields">
                                <div class="def_field cf">
                                    <div class="label_field">
                                        <label for="name_on_form2" class="withtooltip">Высота и ширина, в мм:</label>
                                        <div class="tooltip">Указываются габаритные размеры изделия, в т.ч. с учетом рамы</div>
                                    </div>
                                    <div class="group_fields cf">
                                        <div class="def_input">
                                            <input class="input" type="text" id="size1" name="size1" onchange="calc();" value="1000" onkeypress="return isNumberlnput(this, event);">
                                        </div>
                                        <div class="def_input">
                                            <input class="input" type="text" id="size2" name="size2" onchange="calc();" value="1000" onkeypress="return isNumberlnput(this, event);">
                                        </div>
                                    </div>
                                </div>
                                <div class="def_field cf">
                                    <div class="label_field">
                                        <label for="" class="withtooltip">Материал:</label>
                                        <div class="tooltip">Толщина зависит от предназначения зеркала. На дверцы шкафа лучше наклеивать зеркало 3мм, а зеркало 5мм больше подойдет для оформления больших стен, при недостаточно ровной поверхности.</div>
                                    </div>
                                    <div class="def_input">
                                        <select id="material" name="material" onchange="ChangeKromkaList();">
                                    
                                        </select>
                                    </div>
                                </div>
                                <div class="def_field cf">
                                    <div class="label_field">
                                        <label for="">Форма:</label>
                                    </div>
                                    <div class="def_input">
                                    <select id="forma" name="forma" onchange="ChangeKromkaList();">
                                      <option value="0" selected="">Прямоугольник</option>
                                      <option value="1">Овал, круг, с закругленными углами</option>
                                      <option value="2">Непрямоуголное (трапеция, треугольник и т.д.)</option>
                                    </select>
                                    <div class="alarm_block">Возможна только прямоугольная форма</div>
                                   
                                    </div>
                                </div>
                                <div class="def_field cf">
                                    <div class="label_field">
                                        <label class="withtooltip" for="">Обработка кромки:</label>
                                        <div class="tooltip">Материал без обработки используется для вставки в профиль, раму, окно, т.к. имеет острый край. Шлифовка делает кромку безопасной от порезов. Полировка придает торцу прозрачность. Фацет - это вид обработки стекла или зеркала, выполненный в виде полированной полосы (скос под небольшим углом) по краю зеркала.</div>
                                    </div>
                                    <div class="def_input">
                                        <select id="obrabotka" name="obrabotka" onchange="calc();">
                                    </select>
                                    </div>
                                </div>
                                <div class="def_field cf">
                                    <div class="label_field">
                                        <label for="">Сверление отверстий с зенковкой:</label>
                                        
                                    </div>
                                    <div class="def_input">
                                        <select id="otverstie" name="otverstie" onchange="ChangeKromkaList();">
		                                    <option value="0" selected="">Без отверстия</option>
		                                    <option value="1">ᴓ 4-12 мм</option>
		                                    <option value="2">ᴓ 13-30 мм</option>
		                                    <option value="3">ᴓ 31-70 мм</option>
		                                    <option value="4">ᴓ 70-100 мм</option>
		                                    <option value="5">вырез механический шлифованный</option>
	                                    </select>
                                    </div>
                                </div>
                                <div class="def_field cf">
                                    <div class="label_field">
                                        <label for="">Крепления:</label>
                                        
                                    </div>
                                    <div class="def_input">
                                        <select id="kreplenie" name="kreplenie" onchange="ChangeKromkaList();">
		                                    <option value="0" selected="">Без креплений</option>
		                                    <option value="1">металлические пластины (2 шт)</option>
		                                    <option value="2">крепеж-шайба</option>
	                                    </select>
                                    </div>
                                </div>
                                <div class="def_field count_field cf">
                                    <div class="label_field">
                                        <label for="amount">Количество:</label>
                                    </div>
                                    <div class="def_input">
                                        <input  class="input" type="number" id="amount" name="amount" value="1" onchange="calc();">
                                    </div>
                                </div>
                                
                               
                                <div class="def_field cf">
                                    <div class="def_input checkbox">
                                        <div class="label_field" style="width: auto">
                                            <input type="checkbox" id="plenka" name="plenka" value="PLENKAUPAK" onchange="calc();">
                                            <label for="plenka" class="checkbox_label withtooltip">Пленка безопасности</label>
                                            <div class="tooltip">Противоосколочная защитная пленка для зеркал наносится на обратную сторону зеркала. Пленка непрозрачная, поэтому не используется для прозрачных стекол.</div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="def_field price_calc_field small_weight cf">
                                    <div class="label_field">
                                        <label for="">Вес:</label>
                                    </div>

                                    <div class="def_input">
                                        <span class="total_price weight" id="weight">10 кг</span>
                                    </div>
                                </div>
                                <div class="def_field price_calc_field small_weight cf">
                                    <div class="label_field">
                                        <label for="">Площадь:</label>
                                    </div>

                                    <div class="def_input">
                                        <span class="total_price weight" id="area">1 м2</span>
                                    </div>
                                </div>
                                
                                <div class="def_field price_calc_field cf">
                                    <div class="label_field">
                                        <label for="" class="withtooltip">Стоимость:</label>
                                        <div class="tooltip">Указана стоимость изготовления изделия, без учета креплений, доставки и установки.</div>
                                    </div>

                                    <div class="def_input">
                                        <span class="total_price" id="cost">1250 Р</span>
                                        <button class="btn" onclick="addZak();">Добавить в заказ</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="display:none;">
                             
                                <div>
                               	  <label for="cost">Стоимость, в рублях*:</label>
                                  <input type="text" id="cost" readonly="readonly">
                                </div>
                                <div>
                               	  <label for="weight">Bec, в кг:</label>
                                  <input type="text" id="weight" readonly="readonly">
                                </div>
                                <div>
                                	<label for="area">Площадь, в м²:</label>
                                    <input type="text" id="area" readonly="readonly">
                              	</div>
                                <div>
                                	<label for="product">Изделие:</label>
                                    <textarea id="product" cols="" rows="5" readonly="readonly">Зеркало 4мм 1000x1000мм полир.</textarea>
                              	</div>
                                </div>
                                
                        </form>
                    </div>
                    <div class="calc_options">
                        <div class="calc_option option_info" style="background-image: url('<?php bloginfo('template_directory'); ?>/images/calc/info/info3.png');"></div>
                        <div class="calc_option option_shape" style="background-image: url('<?php bloginfo('template_directory'); ?>/images/calc/ellipse.png');"></div>
                        <div class="calc_option option_shape_border" style="background-image: url('<?php bloginfo('template_directory'); ?>/images/calc/borders/info1/info1_ellipse.png');"></div>
                        <div class="calc_option option_shape_colors" style="background-image: url('<?php bloginfo('template_directory'); ?>/images/calc/colors/bronse/bronse_ellipse.png');"></div>
                        <div class="calc_option option_stuff_objectfx" style="background-image: url('<?php bloginfo('template_directory'); ?>/images/calc/objectfx/objectfx_mirror_ellipse.png');"></div>
                        <div class="calc_option option_stuff" style="background-image: url('<?php bloginfo('template_directory'); ?>/images/calc/object_mirror.png');"></div>
                    </div>
                </div>
            </div>
           <div class="calc_table_items cf" id="results" style="display:none;">
                <div class="block_padding">
                    <div class="calc_table_header calc_row cf">
                        <div class="calc_col first">Ваш заказ</div>
                        <div class="calc_col">Вес (кг)</div>
                        <div class="calc_col">Площадь (м2)</div>
                        <div class="calc_col">Количество</div>
                        <div class="calc_col">Цена</div>
                    </div>
                    <div class="calc_table_content cf" id="zakcont">
                        
                    </div>
                    <div class="calc_total_price_container cf">
                        <div class="info">
                            Представленные цены являются ознакомительными и не являются публичной офертой.
                            <br />
                            Cтоимость услуг Вам рассчитает менеджер.
                        </div>
                        <div class="calc_total_price">
                            <span class="title">Итоговая стоимость изделий:</span>
                            <span class="total_price" id="summ">23 280<span>Р</span></span>
                        </div>
                    </div>
                    <div class="calc_button_container">
                        <div class="btn empty_btn" onclick="deleteAll()">Очистить</div>
                        <button class="btn" onclick="Steps();return false;">Продолжить</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <script type="text/javascript" src="https://steklostilmsk.metodinc.ru/wp-content/themes/steklo/js/calcMirror.js"></script>
    <script type="text/javascript">

	onLoadFunc();
	FillSelectionMenu(material, arrMaterial);
	FillSelectionMenu2(obrabotka, arrKromka, arrMaterial[material.selectedIndex][4]);

</script>
	<p>* Расчет изделий на обработку с одной и сторон менее 150 мм, а также более 2500 мм, а также площадью более 4 м&sup2; производится с коэффициентом сложности. Для расчета точной стоимости пришлите заявку на почту.</p>
<p>** Min стоимость заказа &ndash; 1000 руб. Заказы стоимостью менее 1000 руб. округляются до этой суммы.</p>
<p>*** С помощью нашего калькулятора Вы можете вычислить ПРЕДВАРИТЕЛЬНУЮ стоимость своего заказа. Для произведения точного расчета, а также расчета стоимости на декоративную обработку: алмазная гравировка, художественное матирование, обрамление в багет и др. рекомендуем отправить заявку на нашу почту info@steklostilmsk.ru.</p>

			</div>
		</div>
	</div>
</main>

<?php get_footer(); ?>

