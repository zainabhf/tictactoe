const statusDiv= $('.status')
const resetDiv= $('.reset')
const cells= $('.cell')
console.log(cells);

//

const gameStatus =()=>{
    $(this)
    console.log(cells)
}

let gameOn = true;
let xNext= true;

//


$(".reset").click(function(){
console.log("test");



})


    //console.log(cellDiv);
    $('.cell').click(function(){
        //  if($(this) == 'x'||'o')
        //  return;
if(xNext===true){
    $(this).addClass('x')
    gameStatus();
    console.log("X")
    xNext= !xNext
}
else
{
    $(this).addClass('o')
    console.log("O")

    xNext= !xNext 
}
    //console.log("hello test")

        
    })
    

