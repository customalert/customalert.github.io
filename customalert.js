		// Create new link Element
		var link = document.createElement('link');

		// set the attributes for link element
		link.rel = 'stylesheet';
	
		link.type = 'text/css';
	
		link.href = 'https://cdn.jsdelivr.net/npm/@customalert/customalert/dist/customalert.css';

		// Get HTML head element to append
		// link element to it
		document.getElementsByTagName('HEAD')[0].appendChild(link);			
        
const toast_body = document.createElement("ul");
(toast_body.className = "notifications"), document.querySelector("body").appendChild(toast_body);
const header = document.querySelector("header");
if(header){
    const h = header.offsetHeight;
    document.querySelector('.notifications').style.top = h+'px';
}
const notifications = document.querySelector(".notifications"),
    removeToast = (t) => {
        t.classList.add("hide"), t.timeoutId && clearTimeout(t.timeoutId), setTimeout(() => t.remove(), 500);
    },
    Toast = ({ icon: t, text: e, timer: o = 3000 }) => {
        const n = document.createElement("li"),
            i = "tm" + o;
        (n.className = `toast ${t} ${i}`),
            (n.innerHTML = `<div class="column">\n                         <i class="${t}"></i>\n                         <span>${e}</span>\n                      </div>\n                      <i class="xmark" onclick="removeToast(this.parentElement)"></i>`),
            notifications.appendChild(n),
            (n.timeoutId = setTimeout(() => removeToast(n), o));
    },
    removePopup = (t) => {
        t.classList.add("hide"), t.timeoutId && clearTimeout(t.timeoutId), setTimeout(() => t.remove(), 500);
    },
    Popup = ({ icon: t, title: e = "", text: o }) => {
        const n = document.createElement("div");
            if(e==""){
                (n.className = "popup_body"),
                document.querySelector("body").appendChild(n),
                (n.innerHTML = `\n    <div class="popup">\n    <i class="${t}"></i>\n  <p class="text">\n      ${o}\n    </p>\n    <div class="buttons">\n      <button class="btn ok" id="info">\n        Ok\n      </button>\n    </div>\n  </div>`),
                n.querySelector(".buttons .ok").addEventListener("click", () => {
                    removePopup(n);
                });
            }else{
                (n.className = "popup_body"),
                document.querySelector("body").appendChild(n),
                (n.innerHTML = `\n    <div class="popup">\n    <i class="${t}"></i>\n  <h2 class='popup-title'>\n ${e}\n </h2>\n  <p class="text">\n      ${o}\n    </p>\n    <div class="buttons">\n      <button class="btn ok" id="info">\n        Ok\n      </button>\n    </div>\n  </div>`),
                n.querySelector(".buttons .ok").addEventListener("click", () => {
                    removePopup(n);
                });
            }
    };

