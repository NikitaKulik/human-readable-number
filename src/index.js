module.exports = function toReadable (number) {
  let dict = {
    '0': '',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
  }

  let number_arr = number.toString().split("")
  let counter = 0
  let resp = ''

  for (i=0; i<number_arr.length; i++) {
    if (number_arr.length == 3 && i == 0) {
      resp = resp.concat(dict[number_arr[i]] + " hundred ")
    } else if (number_arr.length == 3 && i == 1) {
      if (number_arr[i] == '8') {
        resp = resp.concat(dict[number_arr[i]] + "y ")
      } else if (number_arr[i] == '5') {
        resp = resp.concat("fifty ")
      } else if (number_arr[i] == '4') {
        resp = resp.concat("forty ")
      } else if (number_arr[i] == '3') {
        resp = resp.concat("thirty ")
      } else if (number_arr[i] == '2') {
        resp = resp.concat("twenty ")
      } else if (number_arr[i] == '1') {
        if (number_arr[i+1] == '0') {
          resp = resp.concat("ten")  
        } else if (number_arr[i+1] == '1') {
          resp = resp.concat("eleven")
        } else if (number_arr[i+1] == '2') {
          resp = resp.concat("twelve")
        } else if (number_arr[i+1] == '3') {
          resp = resp.concat("thirteen")
        } else if (number_arr[i+1] == '5') {
          resp = resp.concat("fifteen")
        } else if (number_arr[i+1] == '8') {
          resp = resp.concat("eighteen")
        } else {
          resp = resp.concat(dict[number_arr[i+1]] + "teen")
        }
      } else if (number_arr[i] == '9' || number_arr[i] == '7' || number_arr[i] == '6') {
        resp = resp.concat(dict[number_arr[i]] + "ty ")
      }
    } else if (number_arr.length == 3 && i == 2) {
      if (number_arr[i-1] != '1') {
        resp = resp.concat(dict[number_arr[i]])
      }
    } else if (number_arr.length == 2 && i == 0) {
      if (number_arr[i] == '8') {
        resp = resp.concat(dict[number_arr[i]] + "y ")
      } else if (number_arr[i] == '5') {
        resp = resp.concat("fifty ")
      } else if (number_arr[i] == '4') {
        resp = resp.concat("forty ")
      } else if (number_arr[i] == '3') {
        resp = resp.concat("thirty ")
      } else if (number_arr[i] == '2') {
        resp = resp.concat("twenty ")
      } else if (number_arr[i] == '1') {
        if (number_arr[i+1] == '0') {
          resp = resp.concat("ten")  
        } else if (number_arr[i+1] == '1') {
          resp = resp.concat("eleven")
        } else if (number_arr[i+1] == '2') {
          resp = resp.concat("twelve")
        } else if (number_arr[i+1] == '3') {
          resp = resp.concat("thirteen")
        } else if (number_arr[i+1] == '5') {
          resp = resp.concat("fifteen")
        } else if (number_arr[i+1] == '8') {
          resp = resp.concat("eighteen")
        } else {
          resp = resp.concat(dict[number_arr[i+1]] + "teen")
        }
      } else {
        resp = resp.concat(dict[number_arr[i]] + "ty ")
      }
    } else if (number_arr.length == 2 && i == 1) {
      if (number_arr[i-1] != '1') {
        resp = resp.concat(dict[number_arr[i]])
      }
    } else if (number_arr.length == 1) {
      if (number_arr[i] == '0') {
        resp = resp.concat("zero")
      } else {
        resp = resp.concat(dict[number_arr[i]])
      }
    }
  }

  return resp.trim()
}
