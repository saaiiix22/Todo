const inp = document.querySelector("#todoText")
// console.log(inp.value);
const todoArea = document.querySelector(".todoArea")
const tick = document.querySelector("#tick")
const cross = document.querySelector("#cross")
const arr = []

tick.addEventListener("click",()=>{
    // console.log(inp.value);
    arr.push(inp.value)
    // console.log(arr);
    inp.value = ""

    for(let i of arr){
        // console.log(i);
        const todoArr = []
        todoArr.push(arr.pop())
        console.log(todoArr);
        const area  = document.createElement("div")
        area.setAttribute("class", "text")
        area.append(todoArr)
        todoArea.append(area)

        const remove = document.createElement("button")
        remove.setAttribute("class","removeBtn")
        
        remove.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        console.log(remove);
        area.append(remove);
        
    }

    remove.addEventListener("click", ()=>{
        console.log("hello");
    })

    // arr.map((i)=>{
    //     console.log(i);
    // })
})
// const removeBtn = document.querySelector(".removeBtn")
// removeBtn.addEventListener("click",()=>{
//     console.log("hii");
// })
cross.addEventListener("click",()=>{
    todoArea.remove();
})


