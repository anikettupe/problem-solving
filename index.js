Q1. var Minimal_Angle = (h, m) => 

Q2. var Check_Leap = (year) => 
{
  return year%4==0?
   (year%100===0? (year%400===0?"Leap Year":"Non Leap Year"):"Leap Year"):"Non Leap Year"
 
  

};

Q3. var Perfect_Check = (N) => 
{
  var i=1
  let temp=N
  let sum=0
    while(i<=parseInt(N/2))
    {
      if(N%i===0)
      {
        sum=sum+i
      }
      
      i++
    }
    
    if(sum===temp)
    {
      return "YES"
    }
    else 
    return "NO"
      
        
};

Q4. var Reverse_Number = (N) => 
{
  var z=N
  var reverse = 0
  while(z>0){
    var digit = z%10
    reverse = (reverse*10) + digit
    z= parseInt(z/10)
  }
  return reverse
  

};

Q5 . var Substring_Check = (S1, S2) => 
{
  const arr = S1.split(" ")
     for(let i=0;i<arr.length;i++){
       if(arr[i] === S2){
         return 'YES'
       }
      
     }
     return 'NO'
     
};