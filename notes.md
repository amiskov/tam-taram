# Заметки для Андрея
* [x] Именование файлов — только нижний регистр: `polygon_white.png`
* [x] Переименовать файлы `Polygon2.png`.
* [x] `hidenn` => `hidden`
* [x] Использовать нестрогое равенство, чтобы учитывать `width === 768`: `(width <= 768)`.
* [x] Переименовать в камелКейс названия функций и переменных: `slick_slider` => `slickSlider`.
* [x] Вместо `bind` использовать `on`.
* [x] Убирать `load more` после клика (когда все видео развернуты)
* [X] Запомнить, что есть `event.preventDefault()`.
* [x] В инициализации Слика использовать пример Responsive Display (http://kenwheeler.github.io/slick/)
* [x] Добавить `"use strict";`
* [x] Использовать `let` и `const` для объявления переменных. Предпочитать `const`.
* [x] Для слайдеров на мобиле (load more):
    Поможет добавление индексов в классы: `video-seciton__list_N`
    Можно использовать селекторы CSS `.video-section__list_3 ~ .vide-section__list` (http://learn.javascript.ru/css-selectors)
    Может понадобиться `$('div').toggleClass('some-class')`
* [x] Исправить `naw` на `nav`.
* [x] Использовать `h1`—`h6` для заголовков.
* [X] Более логично расставить уровни заголовков.
* [x] Шрифты не работают, потому что нужен таск `fonts` для Гальпа (по аналогии с `img`).

## 15 июня
* [ ] Нормально отформатировать код: Sublime
* [ ] Отрефакторить функцию/переменную hide
* [ ] Исправить ошибки ESLint
* [ ] Исправить ошибки Stylelint (https://github.com/kungfusheep/SublimeLinter-contrib-stylelint)
