// array called drivers == ["Milo", "Otis", "Garfield"]'
const drivers=["Milo", "Otis", "Garfield"]


  function destructivelyAppendDriver(name) {
    drivers.push(name)
  };

  function destructivelyPrependDriver(name){
    drivers.unshift(name)
  };

  function destructivelyRemoveLastDriver(name) {
    drivers.pop(name)
  };

  function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name)
  };

  function appendDriver(name) {
     let appendDriver = [... drivers, name];
     return appendDriver
  }

 function  prependDriver(name){
    let prependDriver = [name, ... drivers];
    return prependDriver
 }

 function removeLastDriver(name){
   let removeLastDriver = drivers.slice(0,1);
   return removeLastDriver
 }
 ]
