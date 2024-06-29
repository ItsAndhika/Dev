// Template Literals
// const name = `Kintilidin`
// const age = 17
// console.log(`Hello my name is ${name} i am ${age} years old`);

const std = {
    name: "Kontilodun",
    age: 18,
    email: "kontulodun@gmail.com",
    mayor: "Teknik Informatika"
}

const el = /* html */ `<div class="mhs">
    <h2>${std.name}</h2>
    <p>${std.email}</p>
</div>`

console.log(el);
document.body.innerHTML = el