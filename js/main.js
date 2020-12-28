const statusDiv= $('.status')
const resetDiv= $('.reset')
const cells= $('.cell')
//console.log(cells);
//var arr=[1,2,3,4,5,6,7,8,9];
//var arr=[[1,2,3],[4,5,6],[7,8,9]];
//
// score = {"x": 0, "o": 0};
// win = [6, 15, 24, 12, 15, 18, 15, 15]


const gameStatus =(type)=>{
   
    
    // if ($("#1").hasClass('x') &&  
    //     ($("#2").hasClass('x')) && 
    //    ($("#3").hasClass('x'))) {
    //         console.log("we have a winner")
    //    }

// var arr=[ [ 1, 2, 3 ], [ 1, 4, 7 ], [ 1, 5, 9 ],
//  [ 2, 5, 8 ], [ 3, 5, 7 ], [ 3, 6, 9 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];

//  for(let i=0;i<arr.length;i++){
//      for(let j=0;j<arr[i].length;j++){
//         if(($('#'+arr[i][j])).hasClass('x')&&($('#'+arr[i][j+1])).hasClass('x')&&($('#'+arr[i][j+2])).hasClass('x')||
//             ($('#'+arr[i][j])).hasClass('o')&&($('#'+arr[i][j+1])).hasClass('o')&&($('#'+arr[i][j+2])).hasClass('o'));
//             {
//                    alert("is the winner");

//             }
        
//      }
//  }
   var arr=[1,2,3,4,5,6,7,8,9];
   var arr2=[1,4,7,2,5,8,3,6,9];
   var arr3=[1,5,9,3,5,7];
   //var winner=false;
//    console.log(($('#'+arr[1])).hasClass('x'));

for(let i=0;i<arr.length;i=i+3){ 
    
    if(($('#'+arr[i])).hasClass('x')&&($('#'+arr[i+1])).hasClass('x')&&($('#'+arr[i+2])).hasClass('x')||
    ($('#'+arr[i])).hasClass('o')&&($('#'+arr[i+1])).hasClass('o')&&($('#'+arr[i+2])).hasClass('o'))

   {
    const winner=($('#'+arr[i]));

       alert(winner+"is the winner");
   }}
//    else if(($('#'+arr[i])).hasClass('x')&&($('#'+arr[i+3])).hasClass('x')&&($('#'+arr[i+6])).hasClass('x')||
//    ($('#'+arr[i])).hasClass('o')&&($('#'+arr[i+3])).hasClass('o')&&($('#'+arr[i+6])).hasClass('o'))
//  {const winner=($('#'+arr[i]));
//       alert(winner+"is the winner");}

  for(let i=0;i<arr2.length;i=i+3)
       {
        if(($('#'+arr2[i])).hasClass('x')&&($('#'+arr2[i+1])).hasClass('x')&&($('#'+arr2[i+2])).hasClass('x')||
        ($('#'+arr2[i])).hasClass('o')&&($('#'+arr2[i+1])).hasClass('o')&&($('#'+arr2[i+2])).hasClass('o')){

            const winner=($('#'+arr[i]));

      alert(winner+"is the winner");
        }
    
       }

       for(let i=0;i<arr3.length;i=i+3)
       {
        if(($('#'+arr3[i])).hasClass('x')&&($('#'+arr3[i+1])).hasClass('x')&&($('#'+arr3[i+2])).hasClass('x')||
        ($('#'+arr3[i])).hasClass('o')&&($('#'+arr3[i+1])).hasClass('o')&&($('#'+arr3[i+2])).hasClass('o')){

            const winner=($('#'+arr[i]));

      alert(winner+"is the winner");
        }

    }
       
    //    console.log (($('#'+arr[i])).hasClass('x')===($('#'+arr[i+1])).hasClass('x')&&($('#'+arr[i+2])).hasClass('x')===($('#'+arr[i+1])).hasClass('x'))


   

}
// console.log(true===false)
// if(winner==true)
// console.log("we have a winner ")
// }

    


let gameOn = true;
let xNext= true;

//


$(".reset").click(function(){
$(".cell").empty();



})


    //console.log(cellDiv);
    $('.cell').click(function(){
        //  if($(this) == 'x'||'o')
        //  return;
if(xNext===true){
    $(this).addClass('x')
    $('.status').html('<div>o is next</div>')
    gameStatus('x');
    //console.log("X")
    xNext= !xNext
}
else
{
    $(this).addClass('o')
    $('.status').html('<div>x is next</div>')

    gameStatus('o');

    //console.log("O")

    xNext= !xNext 
}
    //console.log("hello test")

        
    })
    

