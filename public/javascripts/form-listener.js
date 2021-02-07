const site_name = document.getElementById("site_name");
const title = document.getElementById("title");
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

title.addEventListener("keyup", () => {
  clearTimeout(timeout);

  timeout = setTimeout(function () {
    sample_title.innerHTML = title.value;
    if (title.value === "") {
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
    sample_image_url.innerHTML = image_url.value;
    if (image_url.value === "") {
      sample_image_url = defaultEmbed.image_url;
    }
  }, 500);
});
