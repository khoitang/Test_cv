"use strict";
// Check email
const info = document.querySelector(".my-info");
const input = document.querySelector(".input-info");
const label = document.querySelector(".label");
const btn = document.querySelector(".btn");
const email = document.querySelector(".form-control");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btn.addEventListener("click", function () {
  let checkEmail = "";

  if (!email.value.match(regex)) {
    checkEmail += "Bạn phải nhập đúng email ";
  }

  if (checkEmail == "") {
    info.classList.remove("hidden");
    input.classList.add("hidden");
    return true;
  } else {
    document.querySelector(".check-email").innerHTML = checkEmail;
    label.classList.add("hidden");
    return false;
  }
});

// button View

const btnViewList = document.querySelectorAll(".btn-view");
const item = document.querySelectorAll(".item");
const item_3 = document.querySelectorAll(".item-3");
const iconList = document.querySelectorAll(".fa-solid");

// console.log(iconList);

for (let i = 0; i < btnViewList.length; i++) {
  item[i].addEventListener("mousemove", function () {
    btnViewList[i].style.backgroundColor = "#0dcaf0";
    btnViewList[i].style.color = "var(--dark-light)";
  });

  item[i].addEventListener("mouseleave", function () {
    btnViewList[i].style.backgroundColor = "white";
    btnViewList[i].style.color = "white";
  });

  btnViewList[i].addEventListener("click", function () {
    if (btnViewList[i].textContent == "View more") {
      item[i].classList.remove("grid-hidden");
      item_3[i].classList.remove("hidden");
      iconList[i].classList.replace("fa-caret-down", "fa-caret-up");
      btnViewList[i].textContent = "View less";
    } else {
      item[i].classList.add("grid-hidden");
      item_3[i].classList.add("hidden");
      iconList[i].classList.replace("fa-caret-up", "fa-caret-down");
      btnViewList[i].textContent = "View more";
    }
  });
}
