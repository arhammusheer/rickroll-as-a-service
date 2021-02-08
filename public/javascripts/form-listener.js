const site_name = document.getElementById("site_name");
const _title = document.getElementById("_title");
const description = document.getElementById("description");
const image_url = document.getElementById("image_url");

const defaultEmbed = {
  site_name: "Croissant world",
  title: "The amazing world of croissant",
  description:
    "This webpage is about the amazing world of croissant and how it'll change you from a human to a croissant",
  image_url: "/images/croissant-1.jpg",
  link: "#",
};

const sample_site_name = document.getElementById("sample_site_name");
const sample_title = document.getElementById("sample_title");
const sample_description = document.getElementById("sample_description");
const sample_image_url = document.getElementById("sample_image_url");

let timeout = null;

site_name.addEventListener("keyup", () => {
  clearTimeout(timeout);

  timeout = setTimeout(function () {
    sample_site_name.innerHTML = site_name.value;
    if (site_name.value === "") {
      sample_site_name.innerHTML = defaultEmbed.site_name;
    }
  }, 500);
});

_title.addEventListener("keyup", () => {
  clearTimeout(timeout);

  timeout = setTimeout(function () {
    sample_title.innerHTML = _title.value;
    if (_title.value === "") {
      sample_title.innerHTML = defaultEmbed.title;
    }
  }, 500);
});

description.addEventListener("keyup", () => {
  clearTimeout(timeout);

  timeout = setTimeout(function () {
    sample_description.innerHTML = description.value;
    if (description.value === "") {
      sample_description.innerHTML = defaultEmbed.description;
    }
  }, 500);
});

sample_image_url.addEventListener("keyup", () => {
  clearTimeout(timeout);

  timeout = setTimeout(function () {
    sample_image_url.src = `${image_url.value}?t=${new Date().getTime()}`;
    if (image_url.value === "") {
      sample_image_url.src = `${defaultEmbed.image_url}?t=${new Date().getTime()}`;
    }
  }, 500);
});

function encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    image_url.value =reader.result;
    sample_image_url.src = reader.result;
    console.log('RESULT', reader.result)
  }
  reader.readAsDataURL(file);
}