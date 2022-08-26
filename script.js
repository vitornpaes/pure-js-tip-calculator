const billElement = document.getElementById("bill");
const billInputElement = document.getElementById("bill-input");
const peopleElement = document.getElementById("people");
const peopleInputElement = document.getElementById("people-input");
const customInputElement = document.getElementById("custom");
const tipResultElement = document.getElementById("tip-result");
const totalResultElement = document.getElementById("total-result");
const tipElements = document.getElementsByName("tip");

const resetValues = () => {
  billInputElement.value = "";
  peopleInputElement.value = "";
  customInputElement.value = "";
  tipResultElement.innerHTML = "$0.00";
  totalResultElement.innerHTML = "$0.00";
  tipElements[0].checked = true;
};

const onBillChange = () => {
  const value = Number(billInputElement.value);

  if (value === 0) {
    billElement.classList.add("error");
  } else {
    billElement.classList.remove("error");
  }
};

const onPeopleChange = () => {
  const value = Number(peopleInputElement.value);

  if (value === 0) {
    peopleElement.classList.add("error");
  } else {
    peopleElement.classList.remove("error");
  }
};

const calculateValues = (type) => {
  if (type === "bill") {
    onBillChange();
  }

  if (type === "people") {
    onPeopleChange();
  }

  let tipValue;
  const billValue = Number(billInputElement.value);
  const peopleValue = Number(peopleInputElement.value);

  if (type === "custom") {
    tipValue = Number(customInputElement.value);
  } else {
    tipElements.forEach((item) => {
      if (item.checked) {
        tipValue = Number(item.value);
      }
    });
  }

  if (billValue && peopleValue) {
    const tipAmount = Math.round(
      (billValue * (tipValue / 100)) / peopleValue
    ).toFixed(2);
    const totalAmount = Math.round(
      billValue / peopleValue + Number(tipAmount)
    ).toFixed(2);

    tipResultElement.innerHTML = `$${tipAmount}`;
    totalResultElement.innerHTML = `$${totalAmount}`;
  }
};
