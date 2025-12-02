// アコーディオン機能
document.querySelectorAll(".accordion").forEach(btn => {
    btn.addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});

// 日本語/英語切替
function switchLang(lang){
    document.querySelectorAll("[data-lang]").forEach(el=>{
        el.style.display = el.dataset.lang === lang ? "block" : "none";
    });
}

// 自動スクロール（最新ニュース/論文）
function autoScroll(selector){
    const container = document.querySelector(selector);
    if(!container) return;
    let scrollPos = 0;
    setInterval(()=>{
        scrollPos += 1;
        if(scrollPos > container.scrollHeight - container.clientHeight) scrollPos = 0;
        container.scrollTop = scrollPos;
    },50);
}
document.addEventListener("DOMContentLoaded",()=> autoScroll("#news-scroll"));
