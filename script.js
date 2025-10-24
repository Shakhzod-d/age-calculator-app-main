// we select the output elements
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");
// INPUT ELEMENTS
let isValid = false;
const input_year = document.querySelector("#year");
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");
// const submit_btn = document.querySelector(".submit-btn");
// ERROR ELEMENTS
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

submit_btn.addEventListener("click", CalculateDate);

input_day.addEventListener("input", (e) => {
  if (+input_day.value > 31) {
    error_day.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_day.textContent = "";
  }
  if (+input_day.value === 0) {
    isValid = false;
    error_day.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_day.textContent = "";
  }
});

input_month.addEventListener("input", (e) => {
  if (+input_month.value > 12) {
    error_month.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_month.textContent = "";
  }
  if (+input_month.value === 0) {
    isValid = false;
    error_month.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_month.textContent = "";
  }
});

input_year.addEventListener("input", (e) => {
  if (+input_year.value > 2023) {
    error_year.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_year.textContent = "";
  }
  if (+input_year.value === 0) {
    isValid = false;
    error_year.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
  }
});

function CalculateDate() {
  if (!isValid) {
    alert("error");
    return;
  }

  const birthDate = new Date(
    `${input_year.value}-${input_month.value}-${input_day.value}`
  );
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  output_year.textContent = years;
  output_month.textContent = months;
  output_day.textContent = days;
}
