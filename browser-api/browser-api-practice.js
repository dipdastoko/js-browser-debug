//1.
setTimeout(function () {
    console.log('setTimeOut after 3.5s');
}, 3500);

//2.
const promptMessage = prompt();

const alertMessage = parseInt(promptMessage) + 200;
alert(alertMessage.toString());