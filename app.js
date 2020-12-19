const arr = [
  'the hater',
  'the cyber',
  'the punk',
  'the valenti',
  'the streetkid',
  'the corpo',
  'the nomad',
  'the braindance',
  'the v'
]

function getName() {
  let name = document.getElementById("nameInput").value;
  let lastName = document.getElementById("lastNameInput").value;
  let app = document.getElementById("app");
  
  let i = Math.floor(Math.random()*9);
  let nick = arr[i];
  
  let result = document.createElement("p");
  result.id = "nickname";
  result.textContent = "Your CyberPunk Name Is: " + name + " '" + nick + "' " + lastName;
  
  if (document.getElementById("nickname")) {
    let removed = document.getElementById("nickname");
    if (removed) {
      app.removeChild(removed);
    } else {
      return;
    }
    app.appendChild(result);
  } else {
    app.appendChild(result);
  }
  
  return;
}
