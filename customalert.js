    //Creating Toast Body
    const toast_body = document.createElement('ul');
    toast_body.className = `notifications`;
    document.querySelector('body').appendChild(toast_body);
    const notifications = document.querySelector(".notifications");

const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
}

const Toast = (icon,text,timer) => {
    // Creatig Toast
    const toast = document.createElement("li"); // Creating a new 'li' element for the toast
    toast.className = `toast ${icon}`; // Setting the classes for the toast
    // Setting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
                         <i class="${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast); // Append the toast to the notification ul
    // Setting a timeout to remove the toast after the specified duration
    toast.timeoutId = setTimeout(() => removeToast(toast), timer);
}