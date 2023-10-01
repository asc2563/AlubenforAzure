function pass1() {
  if (passcodeid === "1") {
    const passwordAttempt = prompt("Enter password");

    if (passwordAttempt === passcode) {
      alert("Correct passcode");

      const urlQueue = [];
      const backButton = document.createElement("button");
      backButton.style.width = "25px";
      backButton.innerHTML = "<-";
      const urlBox = document.createElement("input");
      urlBox.type = "text";
      urlBox.style.width = "480px";
      const goButton1 = document.createElement("button");
      goButton1.innerHTML = "Load URL";
      const goButton2 = document.createElement("button");
      goButton2.innerHTML = "Load Aluben";
      const ytButton = document.createElement("button");
      ytButton.innerHTML = "Load Nebula";
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.bing.com";
      iframe.width = window.innerWidth;
      iframe.height = window.innerHeight;

      goButton1.addEventListener("click", () => {
        if (urlBox.value.length !== 0 && urlBox.value.startsWith("http")) {
          iframe.src = urlBox.value.toLowerCase();
          urlQueue.push(urlBox.value.toLowerCase());
        }
      });

      goButton2.addEventListener("click", () => {
        iframe.src = "https://Aluben4ever.gameubg.com/";
        urlQueue.push("https://Aluben4ever.gameubg.com/");
      });

      ytButton.addEventListener("click", () => {
        iframe.src = "https://xaviersbackup.allister189o.repl.co/";
        urlQueue.push("https://xaviersbackup.allister189o.repl.co/");
      });

      backButton.addEventListener("click", () => {
        if (urlQueue.length > 1) {
          urlQueue.pop();
          iframe.src = urlQueue.at(-1);
        }
      });

      document.body.appendChild(backButton);
      document.body.appendChild(urlBox);
      document.body.appendChild(goButton1);
      document.body.appendChild(goButton2);
      document.body.appendChild(ytButton);
      document.body.appendChild(iframe);
    } else if (passwordAttempt === "129") {
      alert("Correct passcode");

      const urlQueue = [];
      const backButton = document.createElement("button");
      backButton.style.width = "25px";
      backButton.innerHTML = "<-";
      const urlBox = document.createElement("input");
      urlBox.type = "text";
      urlBox.style.width = "480px";
      const goButton1 = document.createElement("button");
      goButton1.innerHTML = "Load URL";
      const goButton2 = document.createElement("button");
      goButton2.innerHTML = "Load Aluben";
      const ytButton = document.createElement("button");
      ytButton.innerHTML = "Load Nebula";
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.bing.com";
      iframe.width = window.innerWidth;
      iframe.height = window.innerHeight;

      goButton1.addEventListener("click", () => {
        if (urlBox.value.length !== 0 && urlBox.value.startsWith("http")) {
          iframe.src = urlBox.value.toLowerCase();
          urlQueue.push(urlBox.value.toLowerCase());
        }
      });

      goButton2.addEventListener("click", () => {
        iframe.src = "https://Aluben4ever.gameubg.com/";
        urlQueue.push("https://Aluben4ever.gameubg.com/");
      });

      ytButton.addEventListener("click", () => {
        iframe.src = "https://xaviersbackup.allister189o.repl.co/";
        urlQueue.push("https://xaviersbackup.allister189o.repl.co/");
      });

      backButton.addEventListener("click", () => {
        if (urlQueue.length > 1) {
          urlQueue.pop();
          iframe.src = urlQueue.at(-1);
        }
      });

      document.body.appendChild(backButton);
      document.body.appendChild(urlBox);
      document.body.appendChild(goButton1);
      document.body.appendChild(goButton2);
      document.body.appendChild(ytButton);
      document.body.appendChild(iframe);
    } else {
      alert("Incorrect passcode");
    }
  } else {
    const urlQueue = [];
    const backButton = document.createElement("button");
    backButton.style.width = "25px";
    backButton.innerHTML = "<-";
    const urlBox = document.createElement("input");
    urlBox.type = "text";
    urlBox.style.width = "480px";
    const goButton1 = document.createElement("button");
    goButton1.innerHTML = "Load URL";
    const goButton2 = document.createElement("button");
    goButton2.innerHTML = "Load Aluben";
    const ytButton = document.createElement("button");
    ytButton.innerHTML = "Load Nebula";
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.bing.com";
    iframe.width = window.innerWidth;
    iframe.height = window.innerHeight;

    goButton1.addEventListener("click", () => {
      if (urlBox.value.length !== 0 && urlBox.value.startsWith("http")) {
        iframe.src = urlBox.value.toLowerCase();
        urlQueue.push(urlBox.value.toLowerCase());
      }
    });

    goButton2.addEventListener("click", () => {
      iframe.src = "https://Aluben4ever.gameubg.com/";
      urlQueue.push("https://Aluben4ever.gameubg.com/");
    });

    ytButton.addEventListener("click", () => {
      iframe.src = "https://xaviersbackup.allister189o.repl.co/";
      urlQueue.push("https://xaviersbackup.allister189o.repl.co/");
    });

    backButton.addEventListener("click", () => {
      if (urlQueue.length > 1) {
        urlQueue.pop();
        iframe.src = urlQueue.at(-1);
      }
    });

    document.body.appendChild(backButton);
    document.body.appendChild(urlBox);
    document.body.appendChild(goButton1);
    document.body.appendChild(goButton2);
    document.body.appendChild(ytButton);
    document.body.appendChild(iframe);
  }
}
