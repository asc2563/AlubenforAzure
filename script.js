//error//
function Byblk() {
  window.open("./Byeblocker.html", "_self");
}
function calculator() {
  expr = prompt(
    "Formula eg 34 * 32 \nto do multiplication type *\nto do exponents type **\n to divide type /\n to do Subtraction type -\n to do addition type +\n\n"
  );
  if (expr != null) {
    with (Math) {
      evl = parseFloat(eval(expr));
    }
    if (isNaN(evl)) {
      alert("Invalid Format.");
    } else {
      alert(evl);
    }
  } else {
    void null;
  }
}
function credits() {
  window.open("./credits.html", "_self");
}
function gcloak() {
  var link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href =
    " https://i.scdn.co/image/ab67616d0000b27361caa063de5651b980c3b8bf";
  document.title = "Aluben";
  console.log(document.title);
  document.getElementsByTagName("head")[0].appendChild(link);
}
gcloak();
setInterval(gcloak, 1000);

function discord() {
  window.open("https://discord.gg/Jeybsy2us4");
}

//var passcode = prompt("Welcome to aluben, set your passcode");

function pass1() {
  var passwordAttempt = prompt("enter password");
  if (passwordAttempt == passcode) {
    alert("correct passcode");
    let urlQueue = [],
      backButton = document.createElement("button");
    (backButton.style.width = "25px"), (backButton.innerHTML = "<-");
    let urlBox = document.createElement("input");
    (urlBox.type = "text"), (urlBox.style.width = "480px");
    let goButton1 = document.createElement("button");
    goButton1.innerHTML = "Load URL";
    let goButton2 = document.createElement("button");
    goButton2.innerHTML = "Load Aluben";
    let ytButton = document.createElement("button");
    ytButton.innerHTML = "Load Nebula";
    let iframe = document.createElement("iframe");
    (iframe.src = "https://www.bing.com"),
      (iframe.width = window.innerWidth),
      (iframe.height = window.innerHeight),
      goButton1.addEventListener("click", () => {
        0 != urlBox.value.length &&
          urlBox.value.startsWith("http") &&
          ((iframe.src = urlBox.value.toLowerCase()),
          urlQueue.push(urlBox.value.toLowerCase()));
      }),
      goButton2.addEventListener("click", () => {
        (iframe.src = "https://Aluben4ever.gameubg.com/"),
          urlQueue.push("https://Aluben4ever.gameubg.com/");
      }),
      ytButton.addEventListener("click", () => {
        (iframe.src = "https://xaviersbackup.allister189o.repl.co/"),
          urlQueue.push("https://xaviersbackup.allister189o.repl.co/");
      }),
      backButton.addEventListener("click", () => {
        urlQueue.length > 1 && (urlQueue.pop(), (iframe.src = urlQueue.at(-1)));
      }),
      document.body.appendChild(backButton),
      document.body.appendChild(urlBox),
      document.body.appendChild(goButton1),
      document.body.appendChild(goButton2),
      document.body.appendChild(ytButton),
      document.body.appendChild(iframe);
  } else if (passwordAttempt == "129") {
    alert("correct passcode");
    let urlQueue = [],
      backButton = document.createElement("button");
    (backButton.style.width = "25px"), (backButton.innerHTML = "<-");
    let urlBox = document.createElement("input");
    (urlBox.type = "text"), (urlBox.style.width = "480px");
    let goButton1 = document.createElement("button");
    goButton1.innerHTML = "Load URL";
    let goButton2 = document.createElement("button");
    goButton2.innerHTML = "Load Aluben";
    let ytButton = document.createElement("button");
    ytButton.innerHTML = "Load Nebula";
    let iframe = document.createElement("iframe");
    (iframe.src = "https://www.bing.com"),
      (iframe.width = window.innerWidth),
      (iframe.height = window.innerHeight),
      goButton1.addEventListener("click", () => {
        0 != urlBox.value.length &&
          urlBox.value.startsWith("http") &&
          ((iframe.src = urlBox.value.toLowerCase()),
          urlQueue.push(urlBox.value.toLowerCase()));
      }),
      goButton2.addEventListener("click", () => {
        (iframe.src = "https://Aluben4ever.gameubg.com/"),
          urlQueue.push("https://Aluben4ever.gameubg.com/");
      }),
      ytButton.addEventListener("click", () => {
        (iframe.src = "https://xaviersbackup.allister189o.repl.co/"),
          urlQueue.push("https://xaviersbackup.allister189o.repl.co/");
      }),
      backButton.addEventListener("click", () => {
        urlQueue.length > 1 && (urlQueue.pop(), (iframe.src = urlQueue.at(-1)));
      }),
      document.body.appendChild(backButton),
      document.body.appendChild(urlBox),
      document.body.appendChild(goButton1),
      document.body.appendChild(goButton2),
      document.body.appendChild(ytButton),
      document.body.appendChild(iframe);
  } else {
    alert("incorrect passcode");
  }
}

function pass2() {
  var passwordAttempt = prompt("enter password");
  if (passwordAttempt == passcode) {
    alert("correct passcode");
    let urlQueue = [],
      backButton = document.createElement("button");
    (backButton.style.width = "25px"), (backButton.innerHTML = "<-");
    let urlBox = document.createElement("input");
    (urlBox.type = "text"), (urlBox.style.width = "480px");
    let goButton1 = document.createElement("button");
    goButton1.innerHTML = "Load URL";
    let goButton2 = document.createElement("button");
    goButton2.innerHTML = "Load Procky list";
    let ytButton = document.createElement("button");
    ytButton.innerHTML = "Load Abyss";
    let iframe = document.createElement("iframe");
    (iframe.src = "https://www.google.com?igu=1"),
      (iframe.width = window.innerWidth),
      (iframe.height = window.innerHeight),
      goButton1.addEventListener("click", () => {
        0 != urlBox.value.length &&
          urlBox.value.startsWith("http") &&
          ((iframe.src = urlBox.value.toLowerCase()),
          urlQueue.push(urlBox.value.toLowerCase()));
      }),
      goButton2.addEventListener("click", () => {
        (iframe.src = "https://prockylist.5pcfjsczs7.repl.co/"),
          urlQueue.push("https://prockylist.5pcfjsczs7.repl.co/");
      }),
      ytButton.addEventListener("click", () => {
        (iframe.src = "https://knotgluemath.org/"),
          urlQueue.push("https://knotgluemath.org/");
      }),
      backButton.addEventListener("click", () => {
        urlQueue.length > 1 && (urlQueue.pop(), (iframe.src = urlQueue.at(-1)));
      }),
      document.body.appendChild(backButton),
      document.body.appendChild(urlBox),
      document.body.appendChild(goButton1),
      document.body.appendChild(goButton2),
      document.body.appendChild(ytButton),
      document.body.appendChild(iframe);
  } else if (passwordAttempt == "129") {
    alert("correct passcode");
    let urlQueue = [],
      backButton = document.createElement("button");
    (backButton.style.width = "25px"), (backButton.innerHTML = "<-");
    let urlBox = document.createElement("input");
    (urlBox.type = "text"), (urlBox.style.width = "480px");
    let goButton1 = document.createElement("button");
    goButton1.innerHTML = "Load URL";
    let goButton2 = document.createElement("button");
    goButton2.innerHTML = "Load Procky list";
    let ytButton = document.createElement("button");
    ytButton.innerHTML = "Load Abyss";
    let iframe = document.createElement("iframe");
    (iframe.src = "https://www.bing.com"),
      (iframe.width = window.innerWidth),
      (iframe.height = window.innerHeight),
      goButton1.addEventListener("click", () => {
        0 != urlBox.value.length &&
          urlBox.value.startsWith("http") &&
          ((iframe.src = urlBox.value.toLowerCase()),
          urlQueue.push(urlBox.value.toLowerCase()));
      }),
      goButton2.addEventListener("click", () => {
        (iframe.src = "https://prockylist.5pcfjsczs7.repl.co/"),
          urlQueue.push("https://prockylist.5pcfjsczs7.repl.co/");
      }),
      ytButton.addEventListener("click", () => {
        (iframe.src = "https://game.tilaktharu.com.np/"),
          urlQueue.push("https://game.tilaktharu.com.np/");
      }),
      backButton.addEventListener("click", () => {
        urlQueue.length > 1 && (urlQueue.pop(), (iframe.src = urlQueue.at(-1)));
      }),
      document.body.appendChild(backButton),
      document.body.appendChild(urlBox),
      document.body.appendChild(goButton1),
      document.body.appendChild(goButton2),
      document.body.appendChild(ytButton),
      document.body.appendChild(iframe);
  } else {
    alert("incorrect passcode");
  }
}

function games() {
  var win = window.open();
  var url = "https://alibaster-iceland.5pcfjsczs7.repl.co";
  var iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
  iframe.src = url;
  win.document.body.appendChild(iframe);
}
function proxylist() {
  var win = window.open();
  var url = "https://Prockylist.5pcfjsczs7.repl.co";
  var iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
  iframe.src = url;
  win.document.body.appendChild(iframe);
}

// Generate a random number between 0 and 100
var minnumber = 0;
var maxnumber = 100;
var randomNumber = Math.floor(Math.random() * (maxnumber + 1) + minnumber);

// Check if the random number equal to 43
  if (randomNumber == '43') {
    var h = 'traf';
    var poop = document.getElementById("traf-say")
    poop.style.display = "block";
    console.log(h)
  }
});
function panic() {
  window.open(url, '_self')
}
window.addEventListener("keydown", function(event) {
  // Check if the ` key was pressed
  if (event.keyCode === 192) {
    panic()
  }
});
