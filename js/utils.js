// Навішує слухача події на кнопку на подію 'click'. Кнопка тогглить стиль на переданий елемент.
// За замовчуванням блок має display: none;
function toggle(event) {
    const button = event.currentTarget;
    const id = button.dataset.id;

    const block = document.getElementById(id);
    block.classList.toggle('visible');
    console.log("Кнопка натиснута!", button, id, block);
}
