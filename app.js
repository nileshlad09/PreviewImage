const uploadImg = document.getElementById("uploadImg");
const choosebtn = document.getElementById("chooseBtn");
const preImage = document.getElementById("preImage");
const imageDiv_2 = document.querySelector(".imageDiv_2");
const imageDiv_1 = document.querySelector(".imageDiv_1");
const image_name = document.querySelector(".image-name");
const close = document.querySelector(".close");
const imagePre = document.querySelector(".imagePre");

const chooseBtn = () => {
  uploadImg.click();
};

uploadImg.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const render = new FileReader();
    render.addEventListener("load", function () {
      preImage.setAttribute("src", this.result);
      imageDiv_1.style.display = "block";
      imageDiv_2.style.display = "none";
      imagePre.classList.remove('active')
      image_name.textContent = file.name;
      
      close.addEventListener("click", () => {
        preImage.setAttribute("src", "");
        imageDiv_1.style.display = "none";
        imageDiv_2.style.display = "flex";
        imagePre.classList.add('active')
      });

    });
    render.readAsDataURL(file);
  }
});
