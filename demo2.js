const rectangle = {width: 5, height: 10};
const changeWidth = (rect = {...rectangle}) => {
    console.log(rect);
    return rect.width += 1;
}
console.log('11111111'+rectangle.width);
console.log('111111111111'+rectangle.height);
const changeWidthAndHeight = (rect = {...rectangle}) => {
    rect.width += 1;
    rect.height += 1;
    console.log(rect);
    console.log('width'+rectangle.width);
    console.log('height'+rectangle.height);
}
changeWidth(rectangle);
changeWidthAndHeight();
console.log(rectangle);