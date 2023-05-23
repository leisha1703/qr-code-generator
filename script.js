const wrapper = document.querySelector(".wrapper"),
    qrinput = wrapper.querySelector(".form input"),
    generatebtn = wrapper.querySelector(".form button"),
    qrimg = wrapper.querySelector(".qr-code img");

generatebtn.addEventListener("click", () => {
    let qrvalue = qrinput.value;
    if (!qrvalue) return;
    qrimg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
    // console.log(qrvalue);
    wrapper.classList.add("active");
})