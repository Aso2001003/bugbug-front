const imageInputHandle = (imageInput, imageInputLabelText, imagePreview) => {
  imageInput.addEventListener('change', () => {
    const [file] = event.target.files;
    if (file) {
      imagePreview.setAttribute("src", URL.createObjectURL(file));
      imageInputLabelText.textContent = "画像を変更";
    }
  });
};

export { imageInputHandle };