//alert("HELLO" + message);



function addDateTime(message) {
    const dateTimeNow = new Date();
    const date = dateTimeNow.toLocaleDateString() + // 17/08/2020
    dateTimeNow.toLocaleTimeString(); // 13:26:15
    return  message + " : "+ date;


}
alert(addDateTime("This is the best moment to have a look at this website !"));