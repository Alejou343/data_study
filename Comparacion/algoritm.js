function changeKeys(arr) {
    
    arr.shift()
    const newKeys = Object.values(arr.shift())

    return arr.map(objeto => {
      const newObject = {};
      Object.keys(objeto).forEach((key, index) => {
        newObject[newKeys[index]] = objeto[key];
      });
      return newObject;
    });
  }


  
