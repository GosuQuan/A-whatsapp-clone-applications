import {useState,useEffect} from 'react'
const PREFIX = "whatsapp-clone- "
//为什么要用到localStorage？
//因为我们想添加或者放进去的聊天记录因为每次页面刷新而变成空的，我们希望这些数据保存在本地服务器（因为没有数据库，所以就基于）
//localStorage来保存到本地，这里用到了useState和useEffect,useState在这里用到了
function useLocalStorage(key,initialValue) {
  const prefixedKey = PREFIX + key
  const [value,setValue] = useState(()=>{
    const jsonValue = localStorage.getItem(prefixedKey)
    //先从传入的参数将prefixkey的本地数据拿到保存在jsonValue中
    //如果拿到的json对象不为空，就返回json对象
    if(jsonValue!=null) return JSON.parse(jsonValue)
    //如果为空，继续判断其是不是函数，如果是，就返回其函数类型
    if(typeof initialValue ==='function'){
      return initialValue()
    }
    //如果都不是，就返回原值。
    else{
      return initialValue
    }
  })
  //useEffect的效果是为了每次value改变的时候将重新保存，然后返回[value,setValue]
  useEffect(()=>{
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  },[prefixedKey,value])
  return [value,setValue]
}

export default useLocalStorage