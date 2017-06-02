# TAM-TARAM Project Template
Задача — сверстать макет. На столько аккуратно, качественно, адаптивно на сколько сумеете.

## Макеты
[Макеты](https://yadi.sk/d/GJ7FD6dM3JiTkC) для мобильных, планшетов и десктопов.

В архиве вы найдете 3 файла PSD, 3 файла PNG с превьюшками и необходимые иконки в SVG.

### Слайдер
Картинки в слайдере должны [грузиться с Ютюба](http://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api?answertab=votes#tab-top).

По клику на картинку должен открываться попап с видео. Видео должно начинать проигрываться при открытии.

Заголовки слайдеров и ролики:

```
STEP BY STEP
https://youtu.be/z8M0Fa1JVco
https://youtu.be/Wi2KcdoCuo4
https://youtu.be/8H6dYUgQKB8
https://youtu.be/PZjGrmHdFME
https://youtu.be/_wLGr24VeoI
https://youtu.be/DG4FAU5qmMY

CRAFT EDUCATION
https://youtu.be/RmNWNLXmswk
https://youtu.be/-tztXOz8Vc0
https://youtu.be/kUfIVtyydgQ

INSPIRATION
https://youtu.be/VmmwwzR536g
https://youtu.be/vz0k8O-Ef9Y
https://youtu.be/6oPBFnsqJW8
```

## Требования
* [БЭМ](https://ru.bem.info/methodology/).
* Шаблонизатор [EJS](https://github.com/mde/ejs).
* Из библиотек можно использовать только jQuery, [FancyBox](http://fancyapps.com/fancybox/3/) и [Slick](http://kenwheeler.github.io/slick/). Либо все напиать руками на чистом JS. Другие варианты не рассматриваются.
* Адаптивность. В `src/less/media.less` есть переменные, используйте их либо добавьте свои. Предпочтительно использовать подход mobile first.
* Код должен соответствовать стандартам. В проекте имеются `ESLint`, `Stylelint` и `Editorconfig`.
* Макет должен хорошо работать в Хроме последней версии. Используйте [инструменты разработчика для эмуляции разных девайсов](https://developers.google.com/web/tools/chrome-devtools/device-mode/).

## Работа с репозиторием
В примерах ниже пользователь `amiskov` выдает и проверят задачи, `username` их выполняет.

### Форкните этот репозиторий
Нажмите кнопку `Fork`, у вас в профиле появится копия этого репозитория. Склонируйте ее на свой компьютер.

### Добавьте проверяющего в коллабораторы
Коллабораторы — это те, кто может вносить изменения в репозиторий. Добавив проверяющего в коллабораторы вы даете ему возможность вносить изменения в файлы вашего форка (оставлять комментарии, одобрять пул-реквесты).

Проверяющему придет письмо с инвайтом, он его подтвердит и все будет готово к работе.

### Порядок выполнения
В ветке `master` вашего форка должен быть _только проверенный код_.

Создайте ветку `dev`, выполните в ней задачу, создайте пул-реквест для мержа _своей_ ветки `dev` в _свою_ ветку `master` и сообщите проверяющему.

## Запуск
```bash
> npm install
> npm start
```

## Обновление форка из основного репозитория
Проверьте, какие удаленные репозитории (remotes) вам доступны. Если вы еще не делали обновлений, то вам будет доступен удаленный репозиторий `origin` с урлом вашего форка:

```sh
> git remote -v
origin  https://github.com/username/tam-taram.git (fetch)
origin  https://github.com/usernmae/tam-taram.git (push)
```

Нужно добавить URL оригинального репозитория в remotes. Назовем оригинальный удаленный репозиторий `upstream`:

```sh
> git remote add upstream https://github.com/amiskov/tam-taram.git
```

Теперь у вас есть 2 удаленных репозитория: для вашего форка — `origin` и основной — `upstream`:

```sh
> git remote -v
origin  https://github.com/username/tam-taram.git (fetch)
origin  https://github.com/username/tam-taram.git (push)
upstream    https://github.com/amiskov/tam-taram.git (fetch)
upstream    https://github.com/amiskov/tam-taram.git (push)
```

Подтяните изменения из основного репозитория командой `fetch`:

```sh
> git fetch upstream 
```

И добавьте их в свой `master`:

```sh
> git checkout master
> git merge upstream/master
```

Не забывайте пушить изменения в удаленный репозиторий своего форка после апдейта:

```sh
> git push origin master
```
