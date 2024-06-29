// const std = [
//     {
//         name: "Reza",
//         email: "reza@gmail.com"
//     },
//     {
//         name: "Rijal",
//         email: "rijal@gmail.com"
//     },
//     {
//         name: "Udin",
//         email: "udin@gmail.com"
//     },
// ]

// const el = /* html */ `<div class="std">
//     ${std.map(e => /* html */ `<ul>
//         <li>${e.name}</li>
//         <li>${e.email}</li>
//     </ul>`).join("")}
// </div>`;

// const music = {
//     title: "Where We Started",
//     artist: "Lost Sky",
//     feat: "Jex"
// }

// const el = /* html */ `<ul>
//     <li>${music.title}</li>
//     <li>${music.artist} ${music.feat ? `(feat. ${music.feat})` : ""}</li>
// </ul>`

const std = {
    name: "Rezz",
    semester: 5,
    mataKuliah: [
        "aya naon anying didieu",
        "aya naon anying didieu",
        "aya naon anying didieu",
        "aya naon anying didieu"
    ]
}

function printMataKuliah(mataKuliah) {
    return /* html */ `<li>${mataKuliah.map(m => m)}</li>`
}

const el = /* html */ `<ul>
    <li>${std.name}</li>
    <li>${std.semester}</li>
    ${printMataKuliah(std.mataKuliah)}
</ul>`

document.body.innerHTML = el