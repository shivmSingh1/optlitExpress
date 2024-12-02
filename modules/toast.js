import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const success = "rgb(25, 135, 84)"  //green
export const warning = "rgb(255, 193, 7)"  //yellow/orange
export const info = "rgb(13, 202, 240)"   //yellow
export const danger = "rgb(220, 53, 69)"   //red
export const primary = "rgb(13, 110, 253)"   //blue



// we use this for giving instruction to user when any event occur(like registration successful , failed, etc).

export const shToast = (text, bgColor, color = "white", destination = "null", duration = 3000) => {

    Toastify({
        text: `${text}`,
        duration: `${duration}`,
        destination: `${destination}`,
        // newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: `${bgColor}`,
            color: `${color}`
        },
        // onClick: function () { } // Callback after click
    }).showToast()

}




/* 

Instruction For Using This Toast:

1) Your js file type must be module in your html page for example - (<script type="module" src="/scripts/login.js"></script>).

2) In your js file import shToast function and one bgColor according to your need from module / toast.js, eg(import { shToast, danger } from "../modules/toast").

3) Call shToast() function when any event occur.

4) shToast() function takes 3 parameter(1 - Message, 2 - bgColor, 3 - textColor), 3rd one is optional.eg(shToast("login form not available", danger, "black")) for better understanding check login.js & login.html file.

*/