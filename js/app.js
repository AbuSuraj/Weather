const api_key = `a3f3174c5aaa1767ccdbd0a262c0bdf7`;
const loadData = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data, city));
};
const displayData = (data, city) => {
  //   console.log(data.message);
  if (data.message == "city not found") {
    document.getElementById("city").innerText = "city not Available";
    return 0;
  } else {
    document.getElementById("city").innerText = city;
  }
  document.getElementById("temperature").innerText = data.main.temp;
  document.getElementById("condition").innerText = data.weather[0].main;
};
// loadData("Abu Dabi");
const getcityName = () => {
  const inputField = document.getElementById("input-field");
  const city = inputField.value;
  inputField.value = "";
  //   document.getElementById("city").innerText = city;
  return city;
};
document.getElementById("btn-search").addEventListener("click", function () {
  const cityName = getcityName();

  loadData(cityName);
});
