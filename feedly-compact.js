// ==UserScript==
// @name         Feedly Unite Compact
// @namespace    http://feedly.com
// @version      1.0.0
// @description  Userscript / Unite style for a more compact Feedly.com
// @author       Zaph
// @updateURL    https://raw.githubusercontent.com/zapher/Feedly-Compact/refs/heads/main/feedly-compact.js?token=GHSAT0AAAAAAC46XUMYT4P2XMYIC7SE4NMYZ35SJOA
// @downloadURL  https://raw.githubusercontent.com/zapher/Feedly-Compact/refs/heads/main/feedly-compact.js?token=GHSAT0AAAAAAC46XUMYT4P2XMYIC7SE4NMYZ35SJOA
// @match        https://feedly.com/i/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=feedly.com
// @grant        none
// @noframes
// ==/UserScript==


// Scroll detection
setTimeout(() => {
     console.log("Waited for 5 seconds");
     const scroller = document.getElementById("feedlyFrame");
     const header = document.getElementsByClassName('header')[0];
     scroller.addEventListener("scroll", (e) => {
         let position = scroller.scrollTop;
         if(position > 0){
             header.classList.add("header-small");
         } else {
             header.classList.remove("header-small");
         }
     });
}, 3000);




// Refresh loop
let counter = 60;
setInterval(function() {
    if (counter === 0) {
        // Its been one hour, refresh no matter what.
        counter = 60;
        window.location.reload();

    } else {
        // Check if new content is available
        counter--;
        var y = document.getElementsByClassName('RefreshButton--update-available');
        if( y.length>0 ){
            // New articles available, check scroll position
            var position = document.getElementById('feedlyFrame').scrollTop;
            if (position === 0) {
                // Scrollbar at top, reload page
                window.location.reload();
            }
        }
    }

}, 60 * 1000);

// Add custom CSS
if (window.top != window.self) {return;}

function GM_addStyle (cssStr) {
    var D = document;
    var newNode = D.createElement ('style');
    newNode.textContent = cssStr;

    var targ = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    targ.appendChild (newNode);
}


GM_addStyle ( `

.EntryStackablePrompts {
    display: none;
    }

.shareBarHolder {
    display: none;
    }

.EntryEngagement--hot {
    color: rgba(0,0,0,0)!important;
    }

.a7491z0w0voq_A4r5Qxm {
    width:0px;
    }

.a7491z0w0voq_A4r5Qxm:has(.EntryEngagement--hot){
    border-left:4px solid rgba(107,201,130,1) !important;
    padding-left: 4px;
    }


header {
    padding-top:25px;
    padding-bottom:20px;
    padding-left:5px;
    margin:0!important;
    background: rgba(18, 18, 18, 0.9);
    /*box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);*/
    border-bottom: 1px solid rgba(38,38,38,0.51);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    /*filter: drop-shadow(0px 10px 15px rgba(18,18,18,1));*/
    transition: all 0.5s ease;
}

.header-small {
     padding-top:5px!important;
     padding-bottom:5px!important;
     padding-left:15px!important;
}

.header-small h1 {
     transition: all 0.5s ease;
     font-size:1rem;
}

.header-small button {
     transition: all 0.5s ease;
     scale: 70%;
}

.header-small h1:before {
    width:0px;
    padding:0px;
    }

div:has(header) {
    position:sticky;
    top:0;
    z-index:100;

}

header > div:first-child {
    padding-left: 0px!important;
}

.title-only {
    padding:0px!important;
    }

.Leftnav {
	display:none;
}

#feedlyFrame {
	margin-left:0px!important;
}

#barsFX {
	display:none;
}


.bgr6M8LczKBmaAn4sO0X {
	margin-top:0;
	font-size:1.4rem;
}

.bgr6M8LczKBmaAn4sO0X::before {
    content: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" fill="none" viewBox="0 0 24 24" class="icon__B4xp9 icon color--secondary__WX5GF fARySVGEaU01vV6_nWyo LeftnavDock__logo"><path fill="rgb(43, 178, 76)" d="M16.034 3.334a2.867 2.867 0 0 0-4.043 0L1.834 13.49a2.867 2.867 0 0 0 0 4.043l7.248 7.248c.504.44 1.164.706 1.886.706h6.089c.793 0 1.512-.322 2.032-.841l7.107-7.108a2.867 2.867 0 0 0 0-4.043zm-.283 18.551L14.736 22.9a.4.4 0 0 1-.29.12h-.868a.4.4 0 0 1-.27-.1l-1.033-1.034a.41.41 0 0 1 0-.577l1.449-1.45a.41.41 0 0 1 .577 0l1.45 1.45a.41.41 0 0 1 0 .577m0-6.079-4.054 4.054a.4.4 0 0 1-.29.12h-.869a.4.4 0 0 1-.269-.1l-1.034-1.035a.41.41 0 0 1 0-.577l4.489-4.488a.41.41 0 0 1 .577 0l1.45 1.45a.41.41 0 0 1 0 .576m0-6.08L8.657 16.82a.4.4 0 0 1-.29.12H7.5a.4.4 0 0 1-.27-.1l-1.034-1.035a.41.41 0 0 1 0-.577L13.724 7.7a.41.41 0 0 1 .577 0l1.45 1.45a.41.41 0 0 1 0 .576"></path></svg>');
    padding-right: 10px;
    display: inline-block;
    overflow:hidden;
    line-height:0!important;
}


.XmnGTVTK48pxwRy_NSG3 {
    display:none;
}

h2.XmnGTVTK48pxwRy_NSG3 + div {
    margin-top:0px;
}

h2.dlTgkVuFXdqUl5Vy9P3K {
	margin-bottom: 0;
	margin-top: 0;
}

#feedlyPageFX {
	padding: 0px 5px 0px 5px;
}

.SponsorPrompt {
	display: none!important;
}

.right-col {
     padding-top: 0px!important;
}

button[aria-label="Toggle AI Actions Panel"] {
     display:none;
}
button[aria-label="Close article"] {
     top:130px;
}

button[title="Create Team Newsletter"] {
     display:none;
}

.content img {
     max-width: 100%!important;
}

.entryholder {
     padding-top: 100px;
}

` );
