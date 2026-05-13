/* =========
   A100 · Interacción con notificaciones mediante eventos
   ========= */

//Seleccion de elementos
const notificationContainer = document.querySelector(".notification-list");
console.log(notificationContainer);
const allNotifications = document.querySelectorAll(".card--notification");
console.log(allNotifications[2]);
const ramdomNotificationTitle = allNotifications[2].querySelector("notification__title");
console.log(ramdomNotificationTitle);
const thirdNotificationBtn = allNotifications[2].querySelector(".notification__button");
console.log(thirdNotificationBtn);

//Marcar una notificacion como leida al hacer click
const secondNotification = allNotifications[1];
function isRead() {
   secondNotification.classList.toggle("is-read");
}
secondNotification.addEventListener("click", isRead);
console.log(secondNotification);

//Destacar una notificacion al pasar el cursor
const fourthNotification = allNotifications[3];
function isHighlighted() {
   fourthNotification.classList.toggle("is-highlighted");
}
fourthNotification.addEventListener("mouseover", isHighlighted);
fourthNotification.addEventListener("mouseout", isHighlighted);
console.log(fourthNotification);

//Ocultar una notificacion mediante su boton ESTA NO ESTA TERMINADO
const thirdNotification = allNotifications[2];
console.log(thirdNotification);
function isHidden() {
   thirdNotification.classList.toggle("is-hidden");
}
thirdNotificationBtn.addEventListener("click", isHidden);
console.log(thirdNotification);