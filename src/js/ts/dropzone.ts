const dropzone = (selectorInput: string, selectorDropzone): void => {
  const hiddenInput = document.querySelector(selectorInput);
  const dropzone = document.querySelector(selectorDropzone);

  dropzone.addEventListener("click", () => hiddenInput.click());
};

export { dropzone };
