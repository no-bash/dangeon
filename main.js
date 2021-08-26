
var userAgent = navigator.userAgent || navigator.vendor;
var url;

if (!/android/i.test(userAgent))
{
    url = 'https://apps.apple.com/us/app/dungeon-crusher-afk-heroes/id1465892600'
    
}
else
{
    url = 'https://play.google.com/store/apps/details?id=com.towardsmars.dungeoncrusher'
}
console.log(url);

let storeBtn = document.getElementById("store-btn")
storeBtn.addEventListener('click', ()=>{
    window.location.href = url
})
