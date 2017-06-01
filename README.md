# TAM-TARAM Project Template

[Макет](https://yadi.sk/d/GJ7FD6dM3JiTkC)

## Требования
* [БЭМ](https://ru.bem.info/methodology/).
* Шаблонизатор [EJS](https://github.com/mde/ejs).
* [Slick](http://kenwheeler.github.io/slick/) для слайдеров.

## Работа с репозиторием
В примерах ниже пользователь `amiskov` выдает и проверят задачи, `username` их выполняет.

### Форкните этот репозиторий
Нажмите кнопку `Fork`, у вас в профиле появится своя собственная копия этого репозитория. Склонируйте ее на свой компьютер.

### Добавьте проверяющего в коллабораторы
Коллабораторы — это те, кто может вносить изменения в репозиторий. Добавив проверяющего в коллабораторы вы даете ему возможность вносить изменения в файлы вашего форка (оставлять комментарии, одобрять пул-реквесты).

Проверяющему придет письмо с инвайтом, он его подтвердит и все будет готово к работе.

### Порядок выполнения
В ветке `master` вашего форка должен быть _только проверенный код_.

Создайте ветку `dev`, выполните в ней задачу, создайте пул-реквест для мержа своей ветки `dev` в свою ветку `master` и сообщите проверяющему.

## Запуск
```bash
> npm install
> gulp
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