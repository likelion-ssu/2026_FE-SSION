const lnk = document.querySelector("a");
const btn = document.querySelector("button");

// let array = [
//     {
//         href: lnk.setAttribute('href', "https://saint.ssu.ac.kr/irj/portal"),
//         content: lnk.innerHTML = '유세인트',
//     },
//     {
//         href: lnk.setAttribute('href', "https://www.naver.com");
//         content: lnk.innerHTML = '네이버',
//     },    
// ];

btn.addEventListener('click', () => {
    if (lnk.innerHTML == '네이버') {
        lnk.setAttribute('href', "https://saint.ssu.ac.kr/irj/portal");
        lnk.innerHTML = '유세인트'
    }
    else if (lnk.innerHTML == '유세인트') {
        lnk.setAttribute('href', "https://www.likelionssu.com/");
        lnk.innerHTML = '숭멋사'
    }
    else if (lnk.innerHTML == '숭멋사') {
        lnk.setAttribute('href', "https://www.naver.com/");
        lnk.innerHTML = '네이버'
    }
});


