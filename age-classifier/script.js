
const name = prompt("Please Enter Your Name!");
const age = Number(prompt("Please Enter Your Age!"));

// Check if name is a string and age is a number
if (typeof name === 'string' && !isNaN(age)) {
  const changeName = document.querySelector(".nameToChange");
  const changeAge = document.querySelector(".ageToChange");
  const result = document.querySelector(".output");
  const btnCheck = document.querySelector(".check");

  const handleValidAge = () => {
    changeName.innerHTML = `${name}`;
    changeAge.innerHTML = `${age}`;

    if (age >= 0 && age <= 5) {
      result.textContent = `Childhood time`;
    } else if (age >= 5 && age <= 17) {
      result.textContent = `A school student.`;
    } else if (age >= 18 && age <= 24) {
      result.textContent = `A college student.`;
    } else if (age >= 25 && age <= 50) {
      result.textContent = `A Worker OR Business Man.`;
    } else if (age >= 51 && age <= 100) {
      result.textContent = `A retired person.`;
    } else if (age > 100) {
      result.textContent = "Sorry above 100 age is not allowed!";
    } else {
      result.textContent = "Oops! something is wrong";
    }
  };
  btnCheck.addEventListener("click", handleValidAge);
} else {
  alert("Name must be a string and Age must be a number!");
}
const resetBtn = document.querySelector(".restart");
resetBtn.addEventListener('click', () => {
    window.location.reload();
});