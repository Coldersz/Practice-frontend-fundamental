// Shadow Host
const divElement = document.createElement("div");

// Element yg berada di dalam shadow DOM
const headingElement = document.createElement("h1");
headingElement.innerText = "Ini merupakan konten di dalam shadow DOM";

/**
 * Melampirkan shadow root pada shadow host.
 * Mengatur mode shadow dengan nilai open
 * 
 * Menggunakan nilai open berarti kita memperbolehkan untuk mengakses properti shadowRoot melalui elemen yang melampirkan Shadow DOM. 
 * 
 * Namun jika kita menggunakan nilai closed maka properti shadowRoot akan mengembalikan nilai null.
 * Hal ini berarti kita sama sekali tidak dapat mengakses Shadow Tree selain melalui variabel yang kita definisikan ketika melampirkan Shadow DOM.
 * 
 * Karena Shadow DOM terisolasi dari document tree maka element yang terdapat di dalamnya pun tidak akan terpengaruh oleh styling yang berada diluar dari shadow root-nya.
 */
const shadowRoot = divElement.attachShadow({mode: "closed"});

// Memasukkan element heading ke dalam shadow root
shadowRoot.appendChild(headingElement);

/**
 * Karena Shadow DOM tidak akan terpengaruh oleh styling dari luar shadow root nya,
 * maka kita dapat melkaukan styling pada shadow root nya dengan menggunakan innerHTML
 */
shadowRoot.innerHTML += `
  <style>
    h1 {
      color: green;
      font-family: 'Source Code Pro';
    }
  </style>
`

// Memasukkan elemen shadow host ke regular DOM
document.body.appendChild(divElement);