/**
 * à partir d'un tableau de caractères, vous devez générer un mot de passe de 8 caractères
 * bonus : le mot de passe contient  minimum 1 majuscule, 1 caractère spécial & 1 nombre
 */
let passwordStr = [];
let char = false;
let numbers = false;
let upper = false;
const nbChar = 8;

/**
 * Function which return a random number between min and max
 * @param min
 * @param max
 * @returns {number}
 */
function createRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Function that creates a character based on the random number created
 * @returns {string}
 */
function createChar() {
    let random = createRandom(33, 126);
    return String.fromCharCode(random);
}

/**
 * @param passwordArray
 */
function setPassword(passwordArray) {
    //For every letters
    for (let characters of passwordArray) {
        //If it's a character we put char in true
        if (((characters.charCodeAt(0) >= 33 && characters.charCodeAt(0) <= 47) || (characters.charCodeAt(0) >= 58 && characters.charCodeAt(0) <= 64) || (characters.charCodeAt(0) >= 91 && characters.charCodeAt(0) <= 96) || (characters.charCodeAt(0) >= 123 && characters.charCodeAt(0) <= 126)) && char === false) {
            char = true;
        }
        //Same for numbers
        else if ((characters.charCodeAt(0) >= 48 && characters.charCodeAt(0) <= 57) && numbers === false) {
            numbers = true;
        }
        //Same for upper
        else if ((characters.charCodeAt(0) >= 65 && characters.charCodeAt(0) <= 90) && upper === false) {
            upper = true;
        }
    }
    //And we're call the function 'verifPassword' to check if we need to change some characters
    verifPassword(passwordArray)
}

/**
 *
 * @param passwordArray
 * @returns {*}
 */
function verifPassword(passwordArray) {
    //If there is a boolean who's false
    if (!char || !numbers || !upper) {
        for (let i = 0; i < passwordArray.length; i++) {
            //if a special character is needed
            if (!char) {
                //We regenerate a need character
                passwordArray[i] = createChar();
                //And we check if the new character is the good one we want.
                setPassword(passwordArray)
            }
            if (!numbers) {
                //Same for numberz
                passwordArray[i] = createChar();
                setPassword(passwordArray)
            }
            if (!upper) {
                //Same for upper
                passwordArray[i] = createChar();
                setPassword(passwordArray)
            }

        }

    }
    //Return the new pass
    return passwordArray;
}

//For every character we put it in our array 'passwordStr'
if (nbChar !== 8) {
    console.log("8 caractères autorisés")

} else {
    for (let i = 0; i < nbChar; i++) {
        passwordStr.push(createChar());
    }
}

//If there isn't every character we want
if (!char || !numbers || !upper) {
    //We create a new pass
    let newPass = verifPassword(passwordStr);
    console.log(newPass.join(''));
}





