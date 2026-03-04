const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const nameInput = document.getElementById("name");
const bmiResult = document.getElementById("bmiResult");
const categoryText = document.getElementById("category");
const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");
const historyList = document.getElementById("historyList");

const metricBtn = document.getElementById("metricBtn");
const imperialBtn = document.getElementById("imperialBtn");
const heightLabel = document.getElementById("heightLabel");
const weightLabel = document.getElementById("weightLabel");

let isMetric = true;

window.onload = function () {
  displayHistory();
};


metricBtn.addEventListener("click", () => {
  isMetric = true;
  metricBtn.classList.add("active");
  imperialBtn.classList.remove("active");
  heightLabel.innerText = "Height (cm)";
  weightLabel.innerText = "Weight (kg)";
});

imperialBtn.addEventListener("click", () => {
  isMetric = false;
  imperialBtn.classList.add("active");
  metricBtn.classList.remove("active");
  heightLabel.innerText = "Height (feet)";
  weightLabel.innerText = "Weight (lbs)";
});

calculateBtn.addEventListener("click", () => {

  const name = nameInput.value.trim();
  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  if (!name || height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
    alert("Please enter valid positive values.");
    return;
  }

  if (!isMetric) {
    height = height * 0.3048; 
    weight = weight * 0.453592; 
  } else {
    height = height / 100;
  }

  const bmi = weight / (height * height);
  const roundedBMI = bmi.toFixed(2);

  bmiResult.innerText = `Your BMI: ${roundedBMI}`;

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
    categoryText.className = "underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal Weight";
    categoryText.className = "normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
    categoryText.className = "overweight";
  } else {
    category = "Obese";
    categoryText.className = "obese";
  }

  categoryText.innerText = category;

  saveToLocalStorage(name, roundedBMI, category);
  displayHistory();
});


clearBtn.addEventListener("click", () => {
  nameInput.value = "";
  heightInput.value = "";
  weightInput.value = "";
  bmiResult.innerText = "Your BMI: --";
  categoryText.innerText = "";
  categoryText.className = "";
});


function saveToLocalStorage(name, bmi, category) {
  let history = JSON.parse(localStorage.getItem("bmiHistory")) || [];
  history.push({ name, bmi, category });
  localStorage.setItem("bmiHistory", JSON.stringify(history));
}


function displayHistory() {
  historyList.innerHTML = "";
  const history = JSON.parse(localStorage.getItem("bmiHistory")) || [];

  history.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - BMI: ${item.bmi} (${item.category})`;
    historyList.appendChild(li);
  });
}