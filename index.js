document.querySelectorAll(".accordion").forEach((Element)=>{
    Element.addEventListener('click',()=>{
        Element.classList.toggle('active')
        let details=Element.nextElementSibling;
        if(!details.style.maxHeight){
            return details.style.maxHeight=details.scrollHeight+ 'px';
        }
        else{
            details.style.maxHeight=null
        }
    })
})

