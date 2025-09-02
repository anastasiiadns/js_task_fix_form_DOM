'use strict';

const forms = document.querySelectorAll('form');

for (const form of forms) {
  const inputs = form.querySelectorAll('input');

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    if (!input.id) {
      input.id = 'input' + i;
    }

    const label = document.createElement('label');

    label.textContent = 'Text';
    label.className = 'field-label';
    label.setAttribute('for', input.id);

    if (input.name) {
      label.textContent =
        input.name.charAt(0).toUpperCase() + input.name.slice(1);

      input.placeholder = label.textContent;
    }
    input.parentNode.appendChild(label);
  }
}
