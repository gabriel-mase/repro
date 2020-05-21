let btn = document.getElementById("contact")
btn.addEventListener("click", ()=>{
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'event': 'clicked_wp_bubble'});
    window.open(" https://api.whatsapp.com/send?phone=[54][1161760576]")
})
