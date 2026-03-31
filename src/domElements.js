export let modal;

export function startModal() {
  modal = document.createElement('div');
  modal.classList.add('modal-overlay');
  document.body.append(modal);
}

export function getModal() {
  return modal;
}
