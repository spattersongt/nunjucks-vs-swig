var nunjucks = require('nunjucks');

var data = {
    header: 'Colors',
    items: [{
        name: 'red',
        current: true,
        url: '#Red',
        a: 1,
        b: 2,
        c: 3
    }, {
        name: 'green',
        current: false,
        url: '#Green',
        a: 2,
        b: 2,
        c: 1
    }, {
        name: 'blue',
        current: false,
        url: '#Blue',
        a: 4,
        b: 2,
        c: 5
    }]
};

var template = nunjucks.compile('complex.html');

var a = nunjucks.render('complex.html', data);
var b = template.render(data);

console.log(a);
console.log(b);
