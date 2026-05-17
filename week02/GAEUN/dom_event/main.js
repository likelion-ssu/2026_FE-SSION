const link = document.querySelector('a');
const button= document.querySelector('button'); 

const sites=[
    {
        text: "네이버 링크입니다.",
        url: "https://www.naver.com/"
    },
    {
        text: "유세인트 링크입니다.",
        url: "https://saint.ssu.ac.kr/irj/portal"
    },
    {
        text: "멋사 홈페이지입니다.",
        url: "https://www.likelionssu.com/"
    }
];

let currentIndex=0;

button.addEventListener("click", ()=> {
    currentIndex=(currentIndex+1)%sites.length;

    link.innerHTML=sites[currentIndex].text;
    link.setAttribute('href', sites[currentIndex].url);
});