console.log('gello');

// alert('Ma is coming');

const maComming = () => {
    alert('Ma is coming');
}

const askPicnic = () => {
    const response = confirm('are you going to picnic');
    console.log(response);

    if (response === true) {
        alert('taka dao')
    }
    else {
        alert('dore gia mor');
    }
}

const askName = () => {
    const name = prompt('what is your name');
    if (name) {
        console.log(name);
    }
    else {
        console.log('mara kha');
    }
}