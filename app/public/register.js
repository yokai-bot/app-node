document.getElementById("register-form").addEventListener("submit",async(e)=>{
    const res = await fetch("http://localhost:4000/api/register",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            user: e.target.children.user,
            email: e.target.children.email.value,
            password: e.target.children.password.value
        })
    });
    if(!res.ok) return;
    const resJson = await res.json();
    if(resJson.redirect){
        window.location.href = resJson.redirect;
    }
})
