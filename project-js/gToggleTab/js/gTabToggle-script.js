/**
 * Tab Toggle - v1.0.0
 * Scrollbars, simpler.
 * https://github.com/GartyCoding/Garty-Coding-Playground/project-js
 *
 * Made by Garty
 */


const gTabPlugin = {};

gTabPlugin.TabToggle = (function () {
  const gFloat = document.querySelectorAll(".g-float");
  const initSimpleBar = function (elm) {
    return new SimpleBar(elm, {
      autoHide: false,
      forceVisible: false,
    });
  };

  const setScrollLeft = (id, d) =>
    $("#" + id)
      .find(".simplebar-content-wrapper")
      .animate({ scrollLeft: d }, 400);

  const closeGFloat = function () {
    Array.from(gFloat).forEach((el) => {
      el.classList.remove("active");
    });
  };

  const menuFloatSelect = (idTab, _id) => {
    const allMenu = idTab.querySelectorAll(".float-tab-link");

    Array.from(allMenu).forEach((v, i) => {
      v.addEventListener("click", function () {
        Array.from(allMenu).forEach((_v, _i) => {
          _v.classList.remove("active");
        });

        v.classList.add("active");
        closeGFloat();

        const gTabListMenu = idTab.querySelectorAll(".g-tab-list");
        Array.from(gTabListMenu).forEach((elm, idx) => {
          if (idx === i) {
            gTabListHandleClick(idTab, _id, elm, idx);
          }
        });
      });
    });
  };

  const genFloat = function (idTab, _id) {
    const allTab = idTab.querySelectorAll(".g-tab-list");
    const labelCustom = idTab.querySelectorAll(".g-float-custom-label");
    let setCustomLabel = "Please select an option below";

    Array.from(labelCustom).forEach((v) => {
      setCustomLabel = v.innerText;
    });

    let html = `<div class="g-float-head">
                <div class="g-float-label">${setCustomLabel}</div>
                <button type="button" class="g-float-button">
                    <i class="g-tab-arrow"></i>
                </button>
              </div>

              <div class="g-float-all-tab">
                <ul class="g-float-wrapper">`;

    Array.from(allTab).forEach((e, idx) => {
      html += ` <li class="float-tab-link  ${idx === 0 ? `active` : ``}">${
        e.innerText
      }</li>`;
    });

    html += ` </ul>
              </div>`;

    idTab.querySelector(".g-float").innerHTML = html;

    const gFloatButton = idTab.querySelectorAll(".g-float-button");

    Array.from(gFloatButton).forEach((elm) => {
      elm.addEventListener("click", function () {
        closeGFloat();
      });
    });

    menuFloatSelect(idTab, _id);
  };

  const displayContentTab = function (idTab, idx) {
    const gContent = idTab.querySelectorAll(".g-content");

    Array.from(gContent).forEach((elm, i) => {
      elm.classList.remove("active");
      if (idx === i) {
        elm.classList.add("active");
      }
    });
  };

  const gTabListHandleClick = function (idTab, id, elm, idx) {
    const gTabList = idTab.querySelectorAll(".g-tab-list");

    let arrayWidth = [];
    Array.from(gTabList).forEach((item) => {
      item.classList.remove("active");
      arrayWidth.push(item.clientWidth);
    });

    let totalWidth = 0;
    for (let i = 0; i < idx; i++) {
      totalWidth = arrayWidth[i] + totalWidth;
    }

    elm.classList.add("active");
    setScrollLeft(id, totalWidth);
    displayContentTab(idTab, idx);
  };

  const initTabToggle = function (...id) {
    id.forEach((_id) => {
      const idTab = document.querySelector("#" + _id);
      const elmTabTogle = idTab.querySelectorAll(".g-tab-toggle");
      const gTabList = idTab.querySelectorAll(".g-tab-list");
      const gTabButton = idTab.querySelectorAll(".g-tab-button");

      genFloat(idTab, _id);

      Array.from(elmTabTogle).map((elm) => {
        initSimpleBar(elm);
      });

      Array.from(gTabList).forEach((elm, idx) => {
        elm.addEventListener("click", function (e) {
          gTabListHandleClick(idTab, _id, elm, idx);
        });
      });

      Array.from(gTabButton).forEach((elm) => {
        elm.addEventListener("click", function () {
          closeGFloat();
          elm.parentElement.querySelector(".g-float").classList.add("active");
        });
      });

      document.addEventListener("click", function (e) {
        if (
          !e.target.closest(".g-float-button") &&
          !e.target.closest(".g-tab-button")
        ) {
          closeGFloat();
        }
      });
    });
  };

  const initTabBasic = function (...id) {
    id.forEach((_id) => {
      const idTab = document.querySelector("#" + _id);
      const gTabList = idTab.querySelectorAll(".g-tab-list");

      Array.from(gTabList).forEach((elm, idx) => {
        elm.addEventListener("click", function (e) {
          gTabListHandleClick(idTab, _id, elm, idx);
        });
      });
    });
  };

  return {
    init: initTabToggle, 
    initTabBasic: initTabBasic
  };
})();
