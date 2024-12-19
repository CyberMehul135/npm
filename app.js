//                          NPM (Node Package Manager)
//                         ----------------------------


// Q : NPM Use kem Thay
// A : Project banavi vakhate ghani badhi library aapde use kariye achiye & teni cdn link ne HTML head ma connect kariye che.
//   : reason(1) - Te badhi link HTML head ma ek sathe hoy te sari naa dekhay.
//   : reason(2) - and jo emathi koi pan library jeni aapde link paste kari che teno code change thai jaay a loko ni website 
//                 par to aapune teni asar aqapda website par jova made
//               - Ex : font-awesome mathi me ek icon lidho and have a loko ni website par teno code change thai gayo
//                      to aapdi website parthi te icon gayab thai jase.
//   : solution : aapde te link ne download kari aapda local folder ma rarkhvu pade, aa kaam manually thai sake.
//                Pan NPM aa kaam ne easy banave che.
//   : NPM no use Librarys & Packages ne manage karva mate thay che.

//   : NPM ma je pan library no use kariye te global space ma aavi jaay che. global scope ne polute kare che.


// JS ni file run karavva terminal ni andar = node app.js

// process :
// npm init
// npm install axios , import axios from "axios"
// npm install parcel -D (-D atle te dependencies ma nahi, dev-dependencies ma jase)
// npx parcel index.html (Badhu Import, export karine ek diffrent local host create karse.) [ npx = node-package-execute ]
// ctrl + c = server stop karva, Terminal Accessable thai jase.

// npm i = jyare vs-code bandh kari do & pachu chalu karo tyare ek vaar aa command run karvi 
//         te badha packages ne ek sathe install kari dese ek sathe (package.json ma jai dependencies & )

// git commi karti vakhate  :
// aapda main folder ma .gitignore file banavi 
// te file ma index,style,js, .gitignore, package.json, package-lock.json file ne chodine badha na name lakhva 
// .gitignore ma je file name hase te commit ma na jase.

// Ex : 1 : Ahi Fetch ma .then() 2 vaar lakhvu pade tethi axios library no use karyo

// fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))


import axios from "axios"

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        console.log(response.data)
    })

