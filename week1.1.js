//exercise 1
var plusOne = function(digits) {
  let index= digits.length-1
  for(let i=index; i>=0; i--){
      if(digits[i]!==9){
          digits[i]++
          return digits
      }else{
          digits[i]=0
      }
  }
  digits.push(0)
  digits[0]=1
  return digits
};

//exercise 2 但是我的答案过不了
var mergeTwoLists = function(l1, l2) {
  let leftCur=l1
  let leftNext=leftCur.next
  let rigthCur=l2
  while(rigthCur){
      if(leftCur<rigthCur&&rigthCur<leftNext){
          leftCur.next=rigthCur
          let orightRight=rigthCur.next
          rigthCur.next=leftNext
          leftCur=leftNext
          leftNext=leftCur.next
          rigthCur=orightRight
      }
  }
  return l1
};