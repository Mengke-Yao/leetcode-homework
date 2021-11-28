
// 两数之和
var twoSum = function(nums, target) {
  let map = new Map()
  for (let i = 1; i < nums.length; i++) {
    map.set(nums[i-1], i-1)  
    if(map.has(target-nums[i])){
        return([i, map.get(target-nums[i])])
    }
  }
}

// 字母异位词分组
var groupAnagrams = function(strs) {
  let newArr=[]
  strs.forEach((ele, index)=>{
      let item = ele.split('').sort().join("")
      newArr.push(item) 
  })
  let filterArr=Array.from(new Set(newArr))
  let result=[]
  filterArr.forEach(()=>{
    result.push([])
  })
  for(let i=0; i<newArr.length; i++){
       let index=filterArr.findIndex(ele=>newArr[i]===ele)
       result[index].push(strs[i])
  }
  return result
};