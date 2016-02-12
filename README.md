# Работа с классами на чистом JavaScript

*hasClass(), addClass(), removeClass(), toggleClass() - pure JavaScript*

Само собой, подобных решений представлено огромное количество, но подумал, что надо бы начать наконец заполнять гитхаб. Пусть лежит.

## Подключение

Достаточно подключить *xDom.min.js* к Вашей странице:

```html
<script src="/path/to/xDom.min.js"></script>
```

## Методы

  - [addClass()](#addClass)
  - [removeClass()](#removeClass)
  - [toggleClass()](#toggleClass)
  - [hasClass()](#hasClass)

## <a name='addClass'>addClass()</a>

Добавление класса выбранным элементам. Если какие-то из элементов уже имеют некий класс, то новый добавится. 


```javascript
xDom.addClass( "[селектор]", "[класс]" );
```
Например, Добавим ко всем элементам списка, в блоке с *id="content"*, класс *red*:

```javascript
xDom.addClass( "#content ul li", "red" );

// или только к первому элементу списка

xDom.addClass( "#content ul li:first-child", "red" );

...
```
В качестве селектора может выступать всё, что привычно использовать в *.addClass()* представленном в *jQuery*.

## <a name='removeClass'>removeClass()</a>

Удаляет заданный класс у найденных элементов на странице.

```javascript
xDom.removeClass( "[селектор]", "[класс]" );
```
Например, удалим класс *red* у первого элемента списка:

```javascript
xDom.addClass( "#content ul li:first-child", "red" );
```

## <a name='toggleClass'>toggleClass()</a>

Добавляет или удаляет заданный класс. Если класс у найденного элемента есть, то соответсвенно удаляет его, в противном случаи - добавляет.

```javascript
xDom.toggleClass( "[селектор]", "[класс]" );
```
Например:

```javascript
xDom.toggleClass( "#content ul li", "red" );
```

## <a name='hasClass'>hasClass()</a>

Проверяет наличие класса у найденных элементов на странице.

```javascript
xDom.hasClass( "[селектор]", "[класс]", function() { /* true callback */ } );
```

В случаи наличия у найденного элемента требуемого класса, можно совершить некие действия. Например

```javascript
xDom.hasClass( "#content ul li", "green", function() {
	console.log( "Есть такой класс" );
});
```
-----
## TODO

Конечно, имеются существенные отличия от одноимённых методов из *jQuery*. Решение писалось ради развития/обучения, но думаю добавлю недостающие возможности со временем.
