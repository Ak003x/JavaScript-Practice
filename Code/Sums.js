//*1.object sum
const obj = {
    a: 1,
    b: 3,
    sum() {
        return this.a + this.b;
    }
}

const res = obj.sum();
console.log(res);