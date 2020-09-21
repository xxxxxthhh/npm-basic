import _ from 'romanize'

function transform(num) {
    const roman = require('romanize');
    return roman(num)
}

export {
    transform
}