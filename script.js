console.log("Looking here won’t help... or will it?");

const hash = "c2VjdXJlMTIz"; // base64

function authenticate() {
  const input = prompt("Enter access key:");

  if (btoa(input) === hash) {
    document.getElementById("output").innerText =
      "Access granted. Check the assets folder.";
  } else {
    document.getElementById("output").innerText =
      "Access denied.";
  }
}

// Obfuscated clue
const data = [
70,76,65,71,123,
103,111,111,100,95,106,111,98,95,100,97,100,33,
116,104,97,110,107,115,95,102,111,114,95,98,101,105,110,103,95,115,117,99,104,95,97,95,
103,114,101,97,116,95,100,97,100,95,97,110,100,95,
97,108,119,97,121,115,95,100,111,105,110,103,95,115,111,95,109,117,99,104,95,116,111,95,
104,101,108,112,95,109,111,109,95,109,101,95,97,110,100,45,
101,118,101,114,121,111,110,101,95,101,108,115,101,95,121,111,117,95,
114,101,97,108,108,121,95,97,114,101,95,
97,119,101,115,111,109,101,33,
125
];
