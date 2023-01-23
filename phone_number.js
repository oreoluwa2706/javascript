document.getElementById("myForm").onsubmit = (e) => {
  e.preventDefault();

  checkNumber();
};

function checkNumber() {
  let digitList = ["+", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let mtnList = [
    "0803",
    "0816",
    "0903",
    "0810",
    "0806",
    "0703",
    "0706",
    "0813",
    "0814",
    "0906",
    "+234S803",
    "+234816",
    "+234903",
    "+234810",
    "+234806",
    "+234703",
    "+234706",
    "+234813",
    "+234814",
    "+234906",
  ];

  let airtelList = [
    "0907",
    "0708",
    "0802",
    "0902",
    "0812",
    "0808",
    "0701",
    "0904",
    "+234907",
    "+234708",
    "+234802",
    "+234902",
    "+234812",
    "+234808",
    "+234904",
    "+234701",
  ];

  let gloList = [
    "0805",
    "0905",
    "0807",
    "0811",
    "0705",
    "0815",
    "+234805",
    "+234905",
    "+234807",
    "+234811",
    "+234705",
    "+234815",
  ];

  let gMobileList = [
    "0909",
    "0908",
    "0818",
    "0809",
    "0817",
    "+234909",
    "+234908",
    "+234818",
    "+234809",
    "+234817",
  ];
  let phoneNumber = document.getElementById("phoneNumber").value;
  let network = document.getElementById("networkLogoId");
  let myNetworkName = document.getElementById("networkName");

  for (let i = 0; i < phoneNumber.length; i++) {
    if (!digitList.includes(phoneNumber.charAt(i))) {
      network.src = "";
      myNetworkName.innerText =
        "Phone number cannot contain letters, try again!";
      return;
    }
  }

  if (phoneNumber.startsWith("+234") && phoneNumber.length != 14) {
    network.src = "";
    myNetworkName.innerText = "Incorrect phone number, try again!";
    return;
  }
  if (phoneNumber.startsWith("0") && phoneNumber.length != 11) {
    network.src = "";
    myNetworkName.innerText = "Incorrect phone number, try again!";
    return;
  }

  if (
    mtnList.some(function (prefix) {
      return phoneNumber.startsWith(prefix);
    })
  ) {
    network.src = "./image/mtn.png";
    myNetworkName.innerText = "MTN";
    return;
  } else if (
    gMobileList.some(function (prefix) {
      return phoneNumber.startsWith(prefix);
    })
  ) {
    network.src = "./image/9mobile.png";
    myNetworkName.innerText = "9MOBILE";
  } else if (
    gloList.some(function (prefix) {
      return phoneNumber.startsWith(prefix);
    })
  ) {
    network.src = "./image/glo.jpg";
    myNetworkName.innerText = "GLO";
    return;
  } else if (
    airtelList.some(function (prefix) {
      return phoneNumber.startsWith(prefix);
    })
  ) {
    network.src = "./image/airtel.png";
    myNetworkName.innerText = "AIRTEL";
    return;
  } else {
    myNetworkName.innerText = "Invalid Number";
  }
}
