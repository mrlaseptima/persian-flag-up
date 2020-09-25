import React from "react";
import Contact from "../components/examples/Contact/Contact";
import { PersianInput } from "../components/examples/PersianInput/PersianInput";
import Factor from "../components/examples/Factor/Factor";
import Text from "../components/examples/Text/Text";
import { PhoneInput } from "../components/examples/PhoneInput/PhoneInput";

export const POPULAR_EXAMPLES_CONSTS = [
    {
        id: "persianInput",

        code: `     
import { valid } from "persian-flag-up";

const input = document.querySelector("yourInputSelector");

input.addEventListener("keypress", (e) => {
    const {value} = e.target;

    if(!valid(value))  e.preventDefault();
});
    
        `,
        component: <PersianInput />

    },
    {
        id: "contact",
        code: `     
import { phone } from "persian-flag-up";
const phoneNumber = document.querySelector("yourNumberSelector");
const text = phoneNumber.innerHTML;

    phoneNumber.innerHTML = phone(text, {
        addCountryCode: true,
        toPersian: true,
        beautify: true
    })
`,
        component: <Contact />

    },
    {
        id: "factor",
        code: `     
import { price } from "persian-flag-up";

const input = document.querySelector("yourInputSelector");
const factor = document.querySelector("yourFactorSelector");

input.addEventListener("keypress", (e) => {
    const { value } = e.target;

    factor.innerHTML = price( value , {
        suffix: "ریال",
        toRial: true,
        toPersian: true,
        addCommas: true
    }) 
});
        `,
        component: <Factor />

    },
    {
        id: "text",
        code: `     
import { toPersian } from "persian-flag-up";

const mixedText = document.querySelector("yourTextSelector");
const text = mixedText.innerHTML;

mixedText.innerHTML = toPersian(text)
        `,
        component: <Text />

    },
    {
        id: "phoneInput",
        code: `     

import { valid } from "persian-flag-up";

const input = document.querySelector("yourInputSelector");
const phoneValid = document.querySelector("yourSelector");

input.addEventListener("keypress", (e) => {
    const {value} = e.target;

    if(valid(value, { 
        allowEmpty: false,
        type: "phone" 
    }))  phoneValid.innerHTML = "Your phone is valid";
    else phoneValid.innerHTML = "Your phone is not valid !!!";
});
    

        `,
        component: <PhoneInput />

    }
]