// return an empty string when passed an empty string
// input: ""
// output: ""
// return a single name when passed a single name
// input: "name"
// output: "name"
// return a single name when passed a single name with extra spaces
// input: " name "
// output: "name"
// return a last-name, first-name when passed a first and last-name
// input: "first last"
// output: "last, first"
// Stretch: return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace)
// input: " first last"
// output: "last, first"
// return an empty string when passed a single honorific
// input: "Dr. "
// output: ""
// return honorific first-name when passed honorific first-name
// input: "Dr. first"
// output: "Dr. first"
// return a honorific last-name, first-name when passed honorific first-name last-name
// input: "Dr. first-name last-name"
// output: "Dr. last-name, first-name"
// return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words
// input: " Dr. first-name last-name "
// output: "Dr. last-name, first-name"
// throw an error when name is undefined
// input: undefined
// output: throw 'Error'

const nameInverter = function(name) {
  if (name === "") {
    return "";
  }

  if (name === undefined) {
    return 'throw Error';
  }
  let nameArr = name.split(" ");
  
  // create array of non-blank spaces
  nameArr = nameArr.filter(x => x !== " " && x !== "");

  if (nameArr.length > 1) {
    if (nameArr[0] === " ") {
      for (let x of nameArr) {
        if (nameArr[x] !== " ") {
          return nameArr[x];
        }
      }
    } else if (nameArr[0][nameArr[0].length - 1] === ".") {
      if (nameArr.length === 2) {
        // console.log("Honorific First Name");
        return nameArr[0] + " " + nameArr[1];
      } else {
        return nameArr[0] + " " + nameArr[2] + ", " + nameArr[1];
      }
    }
    return `${nameArr[1]}, ${nameArr[0]}`;
  } else if (nameArr.length === 1) {
    if (nameArr[0][nameArr[0].length - 1] === ".") {
      return "";
    }
  }
  
  name = name.replace(/\s+/g, '');
  return name;

};

nameInverter("Dr. First");

module.exports = nameInverter;