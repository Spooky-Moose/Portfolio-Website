document.addEventListener("click", function (e){
    //console.log(e.target);
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        
        const alt = e.target.getAttribute("alt");
        document.querySelector(".modal-title").textContent = alt;
        //const myModal = new boostrap.Modal(document.getElementById('gallery-modal'));
        //myModal.show();
        $('#gallery-modal').modal('show')
    }
})