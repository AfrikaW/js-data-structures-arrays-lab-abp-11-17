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

  function removeFirstDriver() {
     removeFirstDriver = drivers.slice(1,2)
    return  removeFirstDriver[]
  };
