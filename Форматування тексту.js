const firstText = prompt ('Enter the first text: ');
const secondText = prompt ('Enter the second text: ');
const thirdText = prompt ('Enter the third text: ');
const firstMark = prompt ('Enter the first mark: ');
const secondMark = prompt ('Enter the second mark: ');

function formatMessage(text, markFirst, markSecond){
    return markFirst + text + markSecond;
}

console.log(formatMessage(firstText, firstMark, secondMark));
console.log(formatMessage(secondText, firstMark, secondMark));
console.log(formatMessage(thirdText, firstMark, secondMark));

//////////////////////////////////////////////////////////////

const firstText = prompt ('Enter the first text: ');
const secondText = prompt ('Enter the second text: ');
const thirdText = prompt ('Enter the third text: ');
const firstMark = prompt ('Enter the first mark: ');
const secondMark = prompt ('Enter the second mark: ');

firstFormatMessage = firstMark + firstText + secondMark;
secondFormatMessage = firstMark + secondText + secondMark;
thirdFormatMessage = firstMark + thirdText + secondMark;

console.log(firstFormatMessage);
console.log(secondFormatMessage);
console.log(thirdFormatMessage);