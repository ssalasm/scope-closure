const fruits = () => {
    if (true) {
        var fruits1 = 'apple'; //función
        let fruits2 = 'banana'; //bloque
        const fruits3 = 'kiwi'; //bloque
        console.log(fruits2)
        console.log(fruits3)
    }
    console.log(fruits1)
    // console.log(fruits2)
    // console.log(fruits3)
}

fruits();

var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
};

anotherFunction();