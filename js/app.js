function getQrCode() {
  const qrCode = generateQrCode();
  const qrCodeString = qrCode + "";
  if (qrCodeString.length === 6) {
    return qrCode;
  } else {
    return getQrCode();
  }
}

function generateQrCode() {
  const random = Math.round(Math.random() * 1000000);
  return random;
}

document
  .getElementById("generateQrCode")
  .addEventListener("click", function () {
    let count = 0;
    const qrCode = getQrCode();
    document.getElementById("displayQrCode").value = qrCode;
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    qrImage.style.display = "block";
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=" + qrCode;
  });

document.getElementById("calculator").addEventListener("click", function (e) {
  //   console.log(parseInt(e.target.innerText));

  const typedNumberField = document.getElementById("typed-number");
  const previousTypedNumber = typedNumberField.value;
  const number = e.target.innerText;
  if (isNaN(number)) {
    if (number === "C") {
      typedNumberField.value = "";
    } else if (number === "<") {
      // string_variable.split() make a string to array
      const digits = previousTypedNumber.split("");
      digits.pop();
      // array_variable.join()make a string to array
      const remainingDigits = digits.join("");
      typedNumberField.value = remainingDigits;
    }
  } else {
    typedNumberField.value = previousTypedNumber + number;
  }
});
var count = 0;
document.getElementById("verify-qr").addEventListener("click", function () {
  const currentQrNumber = document.getElementById("displayQrCode").value;
  const currentTypedNumber = document.getElementById("typed-number").value;

  if (currentQrNumber == currentTypedNumber) {
    document.getElementById("success-notification").style.display = "block";
    document.getElementById("error-notification").style.display = "none";
    // document.getElementById("success").style.display = "block";
    // document.getElementById("success").innerText = "Congratulation";
    // document.getElementById("success").style.color = "green";
    // document.getElementById("error").style.display = "none";
    document.getElementById("countTry").style.display = "none";
  } else {
    // document.getElementById("error").style.display = "block";
    // document.getElementById("error").innerText = "Please try again!!!";
    // document.getElementById("error").style.color = "red";
    // document.getElementById("success").style.display = "none";
    ++count;
    document.getElementById("countTry").style.display = "block";
    document.getElementById("countTry").innerText = `${count} try left`;
    document.getElementById("countTry").style.color = "red";
    document.getElementById("error-notification").style.display = "block";
    document.getElementById("success-notification").style.display = "none";
  }
});
