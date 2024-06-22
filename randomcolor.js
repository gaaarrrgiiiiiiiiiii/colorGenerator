const getColor = () =>{
  const randomNumber = Math.floor(Math.random() * 1677215);
  const randomColor = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomColor;
  document.getElementById("color-code").innerHTML = randomColor;


}




document.getElementById("btn").addEventListener("click", getColor
)


getColor();