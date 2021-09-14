

function whatToDoForLunch(hungry, availableTime){
 
    if(hungry){
        let time=parseInt(availableTime)
    if(time < 20){
 return "to pick something up and eat in back in the Lab or in the kitchen"
    }else if(time >= 20 && time < 30){
     return "you deserve a break and could try a place in Gastown"
    }else if(time > 30){
      return "this is a bootcamp after all and you should probably reconsider"
    }
}else {
    return 'you do not need a break'
}
}
    //console.log("hungry is", hungry);
    //console.log("availableTime is", availableTime);
    console.log(whatToDoForLunch(true,50));
    console.log(whatToDoForLunch(true,35));
    console.log(whatToDoForLunch(false,10));
  