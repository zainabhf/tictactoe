//function to check the winner status
const gameStatus =(array)=>{
   
    //looping over all cells
    for(let i=0;i<array.length;i=i+3){ 
    
        //check if there is a winner
        if(($('#'+array[i])).hasClass('x')&&($('#'+array[i+1])).hasClass('x')&&($('#'+array[i+2])).hasClass('x')||
        ($('#'+array[i])).hasClass('o')&&($('#'+array[i+1])).hasClass('o')&&($('#'+array[i+2])).hasClass('o'))
   
        //to display the winner in an alert
        {const winner=($('#'+array[i]));
        var res = winner.hasClass('x');
       
        if(winner.hasClass('x')){
            res='x';
        }
        else{
            res='o';
        }
    
    alert(res+" is the winner");
           resetgame();
       }
            checkgame();

    }
}

    
//to check if there is no winner and display an alert for that
  const checkgame =()=>{

var count=0;
for(let i=1;i<10;i++){
   if( ($('#'+i)).hasClass('x')||($('#'+i)).hasClass('o')){
    count++     }

else{ 
    break;

}}
    if(count==9){
    alert('game over')
    resetgame()
 }
  }

//to reset the game when clicking on reset
$(".reset").click(function(){
resetgame()
})

//reset function
const resetgame =()=>{
    $('.cell').removeClass('x');
    $('.cell').removeClass('o');
//$('.cell').unbind('off');
location.reload();
}
// by default the x will start
let xNext= true;

//on click function to start the game by clicking which cell you want
$('.cell').click(function(){
    var arr=[1,2,3,4,5,6,7,8,9];
    var arr2=[1,4,7,2,5,8,3,6,9];
    var arr3=[1,5,9,3,5,7];
    //check if in the clicked cell was x then add the class for letter x
    
    if(xNext===true){
        $(this).addClass('x')
        // toggle the statement
        $('.status').html('<div>o is next</div>').toggleClass('test')
        //calling the function to check if there is a winner
        gameStatus(arr);
        gameStatus(arr2);
        gameStatus(arr3);
// !xNext to toggle the turn to O player
        xNext= !xNext
        // to make sure that only one click in each cell
        $(this).off();
    }
    else
    {
        $(this).addClass('o')
        $('.status').html('<div>x is next</div>').toggleClass('test')
        gameStatus(arr);
        gameStatus(arr2);
        gameStatus(arr3);
    
        xNext= !xNext 
       $(this).off();
    
        
    }    
        })

    
