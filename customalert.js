const toast_body = document.createElement("ul");
(toast_body.className = "notifications"), document.querySelector("body").appendChild(toast_body);
const notifications = document.querySelector(".notifications"),
    removeToast = (t) => {
        t.classList.add("hide"), t.timeoutId && clearTimeout(t.timeoutId), setTimeout(() => t.remove(), 500);
    },
    Toast = ({ icon: t, text: e, timer: o }) => {
        const n = document.createElement("li");
        const tm = 'tm'+o;
        (n.className = `toast ${t} ${tm}`),
            (n.innerHTML = `<div class="column">\n                         <i class="${t}"></i>\n                         <span>${e}</span>\n                      </div>\n                      <i class="xmark" onclick="removeToast(this.parentElement)"></i>`),
            notifications.appendChild(n),
            (n.timeoutId = setTimeout(() => removeToast(n), o));
    },
    removePopup = (t) => {
        t.classList.add("hide"), t.timeoutId && clearTimeout(t.timeoutId), setTimeout(() => t.remove(), 500);
    },
    Popup = ({ icon: t, title: tl, text: e }) => {
        const o = document.createElement("div");
        (o.className = "popup_body"),
            document.querySelector("body").appendChild(o),
            (o.innerHTML = `\n    <div class="popup">\n    <i class="${t}"></i>\n  <h2 class='popup-title'>\n ${tl}\n </h2>\n  <p class="text">\n      ${e}\n    </p>\n    <div class="buttons">\n      <button class="btn ok" id="info">\n        Ok\n      </button>\n    </div>\n  </div>`),
            o.querySelector(".buttons .ok").addEventListener("click", () => {
                removePopup(o);
            });
    };
