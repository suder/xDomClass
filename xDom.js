/* *
 * xDom - Pure js addClass / removeClass / toggleClass / hasClass
 * alexanderkx: https://github.com/alexanderkx
 */

var xDom = (function() {
    'use strict';

    var addClassMethod = function(xElements, xClass) {
        var elements = document.querySelectorAll(xElements);
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList) {
                elements[i].classList.add(xClass);
            } else {
                elements[i].className += ' ' + xClass;
            }
        }
    }

    var removeClassMethod = function(xElements, xClass) {
        var elements = document.querySelectorAll(xElements);
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList) {
                elements[i].classList.remove(xClass);
            } else {
                elements[i].className = elements[i].className.replace(
                    new RegExp('(^|\\b)' + xClass.split(' ').join(
                        '|') + '(\\b|$)', 'gi'), ' ');
            }
        }
    }

    var toggleClassMethod = function(xElements, xClass) {
        var elements = document.querySelectorAll(xElements);
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList) {
                elements[i].classList.toggle(xClass);
            } else {
                var classes = elements[i].className.split(' ');
                var existingIndex = classes.indexOf(xClass);
                if (existingIndex >= 0) {
                    classes.splice(existingIndex, 1);
                } else {
                    classes.push(xClass);
                }
                elements[i].className = classes.join(' ');
            }
        }
    }

    var hasClassMethod = function(xElements, xClass, xCallback) {
        var elements = document.querySelectorAll(xElements);
        var xClass = " " + xClass + " ";
        for (var i = 0; i < elements.length; i++) {
            console.log(xClass);
            if ((" " + elements[i].className + " ").replace(
                /[\n\t]/g, " ").indexOf(xClass) > -1) {
                if (xCallback && typeof(xCallback) === "function") {
                    xCallback(elements[i]);
                }
            }
        }
    }
    
    return {
        addClass: addClassMethod,
        removeClass: removeClassMethod,
        toggleClass: toggleClassMethod,
        hasClass: hasClassMethod,
    };
})();
