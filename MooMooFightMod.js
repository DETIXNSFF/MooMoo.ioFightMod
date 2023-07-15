// ==UserScript==
// @name MooMoo.io Fight Mod & Disable Right Click
// @version 0.1
// @description Customize your MooMoo.io gameplay with the Fight(1vs1) Mod. Remove unnecessary visual elements, boost FPS, and enjoy smoother fights
// @author DETIX aka D.Roy || discord => detixthegoat
// @match ://.moomoo.io/*
// @license CC-BY 4.0
// ==/UserScript==
/*
 - This script is licensed under CC-BY 4.0 (Creative Commons Attribution 4.0 International License).
 - Please respect the license by giving appropriate credit and adhering to the terms.
 - For more information, visit: https://creativecommons.org/licenses/by/4.0/
*/

let __1v1Mod = !!0;

const __toggleMod = () => {
    __1v1Mod = !__1v1Mod;
    __mm();
};

const __colors = {
    on: "#00ff00",
    off: "#ff0000",
    hoverOn: "#00e600",
    hoverOff: "#e60000"
};

const __i = [
    "actionBar",
    "resDisplay",
    "topInfoHolder",
    "ageBarContainer",
    "mapDisplay",
    "allianceButton",
    "chatButton",
    "ageText"
];

const __mm = () => {
    __i.map((d) => { // you can replace -map- with -forEach-
        const l = document.getElementById(d);
        if (l) {
            l.style.display = __1v1Mod ? "none" : "block";
        }
    });
};

(function (__e, __t) {
    __e = document.querySelector('#enterGame');
    __e.addEventListener('click', function() {
        __t = document.createElement("button");
        __t.innerText = `Toggle Fight Mod -> ${__1v1Mod ? 'ON' : 'OFF'}`;
        __t.style = `
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 9999;
            padding: 10px 20px;
            border: 3px solid ;
            border-radius: 7px;
            background-color: ${__1v1Mod ? __colors.on : __colors.off};
            color: #010101;
            font-weight: bold;
            font-size: 16px;
            outline: none;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
            `;
        __t.style.width = "180px";
        __t.addEventListener("click", function() {
            __toggleMod();
            __t.style.backgroundColor = __1v1Mod ? __colors.on : __colors.off;
            __t.style.transform = __1v1Mod ? "scale(1.2)" : "scale(1)";
            __t.innerText = `Toggle Fight Mod -> ${__1v1Mod ? 'ON' : 'OFF'}`;
        });
        __t.addEventListener("mouseover", function () {
            __t.style.backgroundColor = __1v1Mod ? __colors.hoverOn : __colors.hoverOff;
            __t.style.transform = "scale(1.2)";
        });
        __t.addEventListener("mouseout", function () {
            __t.style.backgroundColor = __1v1Mod ? __colors.on : __colors.off;
            __t.style.transform = "scale(1)";
        });
        document.body.appendChild(__t);
    });
})();

// Disable Right Click
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});
