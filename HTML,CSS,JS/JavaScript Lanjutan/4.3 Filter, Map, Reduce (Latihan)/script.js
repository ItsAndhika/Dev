// get all video elements
const videos = Array.from(document.querySelectorAll("[data-duration]"))
// choose 'JAVASCRIPT LANJUTAN'
const videosAmount = videos.filter(v => v.textContent.includes("JAVASCRIPT LANJUTAN"))
// get the durations of each videos
let result = videosAmount.map(v => v.getAttribute("data-duration"))
// change duration to int and change minute to second
.map(v => {
    const parts = v.split(":")
    .map(part => parseFloat(part))
    return (parts[0] * 60) + parts[1]
})
// plus all seconds
.reduce((acc, cur) => acc + cur)
// change the format to hour minute second
const hours = Math.floor(result / 3600)
result = result - hours * 3600
const minutes = Math.floor(result / 60)
const seconds = result - minutes * 60
const amount = `${hours} jam ${minutes} menit ${seconds} detik`
// place to DOM
const jmlVideo = document.querySelector("ol li p .jumlah-video")
const totalDrs = document.querySelector("ol li p .total-durasi")
jmlVideo.textContent = videosAmount.length
totalDrs.textContent = amount
console.log(videos);