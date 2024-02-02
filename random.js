const randomSk = (arrOrString) => {
    let a = arrOrString.length;
    let randArr = Math.floor(Math.random()*a);
    return arrOrString[randArr];
};module.exports = randomSk;