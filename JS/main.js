form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const file = imageFile.files[0];
  let convertedImage;

  if (conversionType.value === "png-to-jpg") {
    const image = await Jimp.read(file);
    convertedImage = await image.quality(60).getBufferAsync(Jimp.MIME_JPEG);
  } else {
    const image = await Jimp.read(file);
    convertedImage = await image.getBufferAsync(Jimp.MIME_PNG);
  }

  const downloadLink = document.querySelector("#download-link");
  downloadLink.href = URL.createObjectURL(new Blob([convertedImage]));
  downloadLink.download = `converted.${
    conversionType.value === "png-to-jpg" ? "jpg" : "png"
  }`;
  downloadLink.style.display = "inline-block";
});
