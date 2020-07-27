var person = {
    first: 'John',
    last: 'Smith',
    full: function () {
        console.log(this.first + ' ' + this.last);
    },
    personTwo: {
        first: 'Allison',
        last: 'Jones',
        full: function () {
            console.log(this.first + ' ' + this.last);
        }
    }
};

console.log("Hello world");

var x = 1;
{
    var x = 2;  // same variable!
    console.log(x);  // 2
}
console.log(x);  // 2
}

function letTest() {
    let x = 1;
    {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}