const items=document.querySelector("#items")
const toDoBox= document.querySelector("#to-do-box")


items.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
            addToDo(this.value )
            this.value==""
        }
    }
)
const addToDo=(items)=>{
    const listItems = document.createElement("li");
    listItems.innerHTML=`${items}
    <i class="fa-solid fa-xmark"></i>`
    ;

    listItems.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
    )
    listItems.querySelector("i").addEventListener(
        "click",
        function(){
            listItems.remove()
        }
    )

    toDoBox.appendChild(listItems)
}
