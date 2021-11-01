// //1.
// setTimeout(function () {
//     console.log('setTimeOut after 3.5s');
// }, 3500);

// //2.
// const promptMessage = prompt();

// const alertMessage = parseInt(promptMessage) + 200;
// alert(alertMessage.toString());

//3.
const response = confirm('Do you want to see your website location?');
if (response === true) {
    console.log(location.href);
}