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
    const copyDrivers = drivers.slice();
      return copyDrivers.push(name);
  };
