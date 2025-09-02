'use strict';

const forms = document.querySelectorAll('form');

for (let i = 0; i < forms.length; i++) {
  const inputs = forms[i].querySelectorAll('input');

  for (let j = 0; j < inputs.length; j++) {
    const input = inputs[j];

    if (!input.id) {
      input.id = `input-${i}-${j}`;
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
