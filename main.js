// JavaScript Code

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let Username = document.getElementById("username").value;
  let Password = document.getElementById("password").value;
  let Output = document.getElementById("output");

  // Check Statemnt
  if (Username === "admin" && Password === "1234") {
    Output.innerHTML = "Login Successful!";
  } else if (Username !== "admin") {
    Output.innerHTML = "Invalid Username";
  } else if (Username === "admin" && Password !== "1234") {
    Output.innerHTML = "Invalid Password"
  }
}
