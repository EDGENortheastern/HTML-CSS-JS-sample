const inputForm = document.getElementById("input-form")
const inputBox = document.getElementById("input-field")
const outputBox = document.getElementById("output-field")


inputForm.addEventListener('submit', event => {
    console.log("khjkjhkjhjk")
    event.preventDefault();
    console.log(inputBox.value);
    outputBox.innerHTML="Hello, "+inputBox.value;
});
// console.log(inputBox.value)