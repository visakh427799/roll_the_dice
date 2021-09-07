let sum=0;

const rollTheDice=()=>{
  
   let res=document.getElementById("result");
   let score=document.getElementById("sum")
   let result= getRandomArbitrary(1,6);

   sum=sum+Number(result)
   res.innerHTML=result;
   res.style.display="block"

//checking whether point is a multiple of 7 or not
   if(sum%7===0){
    sum=0;
    score.innerHTML=sum;
   }
   else if(sum===100){
    alert("Congratulations")  
    score.innerHTML=sum;
   }
   else{
    score.innerHTML=sum;
   }

  
   
   

}

const getRandomArbitrary=(min, max)=> {
    return Math.floor(Math.random() * (max - min) + min);
}