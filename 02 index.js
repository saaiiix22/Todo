const inp = document.querySelector("input")
const tick = document.querySelector("#tick")
const todoArea = document.querySelector(".todoArea")
const arr = []
tick.addEventListener("click", ()=>{
    arr.push(inp.value)
    console.log(arr);
    inp.value = ""

    arr.map((i)=>{
        // console.log(i);
        const todoArr = []
        todoArr.push(arr.pop())

        const todoText = document.createElement("div")
        todoText.innerText = i
        todoArea.append(todoText)

        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "X"
        todoText.append(deleteBtn)

        deleteBtn.addEventListener("click",()=>{
            todoText.remove()
        })


    })

})
                                                                                                                