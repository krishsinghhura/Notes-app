let container=document.querySelector(".container");
function newNote(){
    let el=document.createElement("div");
    el.setAttribute("class","box");
    el.innerHTML='<textarea></textarea><i id="icon" class="fa-solid fa-trash"></i>';
    container.append(el);
    addEventListener("click",function(e){
        let del=document.querySelector("#icon");
        console.log(e);
        if(e.target===del){
            del.parentElement.remove();
        }
    })
}
let clickAdd=document.querySelector(".header button");
clickAdd.addEventListener("click",newNote);