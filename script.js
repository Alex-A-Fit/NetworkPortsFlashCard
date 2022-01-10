let LeftArrow = document.getElementById("Larrow");
let RightArrow = document.getElementById("Rarrow");
let FlipBtn = document.getElementById("Flip");
let CardText = document.getElementById("Text");
let InOrder = document.getElementById("InOrder");
let Random = document.getElementById("Random");

let index = 0;

let deck = [];

InOrder.addEventListener("click", function () {
  deck = Cards();
  AssignText()
});

Random.addEventListener("click", function () {
  deck = RandomCards();
  AssignText();
  
});

LeftArrow.addEventListener("click", function () {
  if (deck.length == 0) {
    alert("Please choose a deck first");
  } else {
    if (index == 0) {
      index = deck.length - 1;
      CardText.innerText = deck[index].name;
    } else {
      index = index - 1;
      CardText.innerText = deck[index].name;
    }
  }
});

RightArrow.addEventListener("click", function () {
  if (deck.length == 0) {
    alert("Please choose a deck first");
  } else {
    if (index == deck.length - 1) {
      index = 0;
      CardText.innerText = deck[index].name;
    } else {
      index = index + 1;
      CardText.innerText = deck[index].name;
    }
  }
});

FlipBtn.addEventListener("click", function () {
  if (deck.length == 0) {
    alert("Please choose a deck first");
  } else {
    if (CardText.innerText == deck[index].port) {
      CardText.innerText = deck[index].name;
    } else {
      CardText.innerText = deck[index].port;
    }
  }
});

function Cards() {
  let ports = [
    {
      name: "FTP (File Transfer Protocol)",
      port: "TCP 21",
    },
    {
      name: "SSH (Secured Shell)",
      port: "TCP 22",
    },
    {
      name: "Telnet",
      port: "TCP 23",
    },
    {
      name: "SMTP (Simple Mail Transfer Protocol)",
      port: "TCP 25",
    },
    {
      name: "DNS (  Domain Name System )",
      port: "UDP 53",
    },
    {
      name: "HTTP ( Hypertext Transfer Protocol )",
      port: "TCP 80",
    },
    {
      name: "HTTPS ( Hypertext Transfer Protocol Secure )",
      port: "TCP 443",
    },
    {
      name: "POP3 ( Post office Protocol 3 )",
      port: "TCP 110",
    },
    {
      name: "IMAP4 (  Internet Message Access Protocol 4 )",
      port: "TCP 143",
    },
    {
      name: "RDP (  Remote Desktop Protocol )",
      port: "TCP 3389",
    },
    {
      name: "NetBios/NetBT",
      port: "UDP 137 - TCP 139",
    },
    {
      name: "SMB/CIFS ( Server Message Block Common Internet File System )",
      port: "TCP/445",
    },
    {
      name: "SLP ( Service Location Protocol )",
      port: "TCP & UDP 427",
    },
    {
      name: "AFP (  Apple Filling protocol )",
      port: "TCP 548",
    },
    {
      name: "DHCP (  Dynamic Host Configuration Protocol )",
      port: "UDP 67 & 68",
    },
    {
      name: "LDAP (Lightweight Directory Access Protocol )",
      port: "TCP 389",
    },
    {
      name: "SNMP ( Simple Network Management Protocol )",
      port: "UDP 161 & 162",
    },
  ];

  return ports;
}

function RandomCards() {
  deck = Cards();
  let randomDeck = [];
  while (deck.length > 0) {
    let randomNumber = Math.floor(Math.random() * deck.length);
    randomDeck.push(deck[randomNumber]);
    deck.splice(randomNumber, 1);
  }
  return randomDeck;
}

function AssignText(){
    CardText.innerText = deck[index].name;
}
