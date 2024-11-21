document.getElementsByTagName("button")[0].addEventListener("click",()=>{
    document.cookie = 'jwt=; path=/; Expires=Thu, 01 jan 1970 00:00:01 GMT;';
    document.location.href = "/"
})