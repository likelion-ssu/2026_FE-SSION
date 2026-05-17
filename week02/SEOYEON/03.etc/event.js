const btn = document.querySelector("button");
const link = document.querySelector("a");

let linkHref = [{ href: "https://www.naver.com/", text: "네이버" }, { href: "https://saint.ssu.ac.kr/irj/portal", text: "유세인트" }, {href: "https://www.likelionssu.com/", text: "멋쟁이사자처럼"}];

let index = 0;

// 버튼 클릭 시 링크 토글
btn.addEventListener('click', () => {
    if (index == 0) {
        link.setAttribute("href", linkHref[1].href);
        link.textContent = linkHref[1].text;
        index = 1;
    } else if (index == 1) {
        link.setAttribute("href", linkHref[2].href);
        link.textContent = linkHref[2].text;
        index = 2;
    } else {
        link.setAttribute("href", linkHref[0].href);
        link.textContent = linkHref[0].text;
        index = 0;
    }
});