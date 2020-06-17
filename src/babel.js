

const toggleFolder = document.getElementById('js_toggle-folder');
const folder = document.getElementById('js_folder');

folder.classList.toggle('isClosed');

toggleFolder.addEventListener('click', () => {
  folder.classList.toggle('isOpen');
  folder.classList.toggle('isClosed');
});







