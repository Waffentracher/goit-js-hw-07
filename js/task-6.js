function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 
    const input = document.querySelector('input');
    const createBtn = document.querySelector('[data-create]');
    const destroyBtn = document.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    createBtn.addEventListener('click', () => createBoxes(input.value));
    destroyBtn.addEventListener('click', destroyBoxes);

    function createBoxes(amount) {
      if (amount < 1 || amount > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
      }

      const fragment = document.createDocumentFragment();
      for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.marginBottom = '10px';
        fragment.appendChild(box);
      }
      boxesContainer.appendChild(fragment);
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }