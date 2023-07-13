function introduction(name) {
    return `Hi, my name is ${name}.`;
}

introduction("Joe");

function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`) 
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

introductionWithLanguage("Joe", "JavaScript");

function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
}

sayHelloTo()

function introductionWithLanguageOptional(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

introductionWithLanguageOptional("Joe");

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

introductionWithLanguageOptional("Joe", "JavaScript");

