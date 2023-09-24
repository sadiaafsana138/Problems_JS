function cubeNumber(number) {
  if (typeof number === 'number' && !isNaN(number) && number >= 0) {
    return Math.pow(number, 3);
  }
  else if (typeof number === 'string' && number.length === 1 || Array.isArray(number) || typeof number === 'object') {
    return "Please input a valid number";
  }
  else {
    return "Please input a positive number";
  }
}





function matchFinder(string1, string2) {
  if (typeof string1 === 'string' && typeof string2 === 'string') {
    if (string1.indexOf(string2) !== -1) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return "Both inputs must be valid strings";
  }
}




function sortMaker(arr) {
  if (Array.isArray(arr) && arr.length === 2) {
    const [element1, element2] = arr;
    if (element1 >= 0 && element2 >= 0) {
      if (element1 > element2) {
        return [element1, element2];
      }
      else if (element1 < element2) {
        return [element2, element1];
      }
      else {
        return "equal";
      }
    }
    else {
      return "invalid input elements";
    }
  }
  else {
    return "input a valid array with 2 elements";
  }
}




function findAddress(obj) {
  const street = obj.street || '__';
  const house = obj.house || '__';
  const society = obj.society || '__';

  return street + ',' + house + ',' + society;
}



function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray) || changeArray.length === 0) {
    return "The balance is Empty";
  }
  else {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      sum += changeArray[i];
    }

    if (sum >= totalDue) {
      return true;
    }
    else {
      return false;
    }
  }
}
