
let arr=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrR5wRNFz7mbhjsWu66YGblyx0hzKYqkRwyyzK0rjQQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzngMQV98m2W1u-xGhGu2MgLIghlHbTZkszT-XX8QS8w&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrR5wRNFz7mbhjsWu66YGblyx0hzKYqkRwyyzK0rjQQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzngMQV98m2W1u-xGhGu2MgLIghlHbTZkszT-XX8QS8w&s=10"
]

let container=document.getElementById("container")

let movies=document.createElement("img")
let index = 0
movies.setAttribute("src",arr[0])
setInterval(function(){
    if(index==arr.length){
        index=0
    }
    movies.setAttribute("src",arr[index])
    container.appendChild(movies)
    index++


},1)

