const input = document.querySelector('input')

input.addEventListener('keypress',function(e){
    if (e.key=== 'Enter') {
        if (!this.value) {
            return
        }
        const itemUl = document.createElement("ul");
        const itemList = document.createElement("li");
        console.log(e)
        let item = this.value
        itemList.innerText = item
        itemUl.appendChild(itemList)
        document.body.appendChild(itemUl);

        this.value = ''
    }
})