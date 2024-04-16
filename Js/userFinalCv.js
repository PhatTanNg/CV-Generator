
  window.onload = function() {
  readLocalStorage();
};

function readLocalStorage() {
  const firstName = localStorage.getItem('getFirstName');

  const lastName = localStorage.getItem('getLastName');
  const phone = localStorage.getItem('getPhoneNum');
  const email = localStorage.getItem('getEmail');
  const address = localStorage.getItem('getAddress');
  const postal = localStorage.getItem('getPostCode');
  const summary = localStorage.getItem('getSumary');
  const jobTitle = localStorage.getItem('getJobTitle');
  const employer = localStorage.getItem('getEmployer');
  const city = localStorage.getItem('getCity');
  const country = localStorage.getItem('getCountry');
  const startDate = localStorage.getItem('getStartDate');
  const endDate = localStorage.getItem('getEndDate');
  const schoolName = localStorage.getItem('getSchoolName');
  const schoolCountry = localStorage.getItem('getSchoolLocation');
  const schoolStartDate = localStorage.getItem('getSchoolStart');
  const schoolEndDate = localStorage.getItem('getSchoolEnd');
  const field = localStorage.getItem('getField');
  const qualification = localStorage.getItem('getQualification');
  const grade = localStorage.getItem('getGrade');
  const honour = localStorage.getItem('getHonour');

  document.getElementById("firstNameCV").innerHTML = firstName;
  document.getElementById("lastNameCv").innerHTML = lastName;
  document.getElementById("phoneCV").innerHTML = phone;
  document.getElementById("emailCV").innerHTML = email;
  document.getElementById("addressCV").innerHTML = address;
  document.getElementById("postalCV").innerHTML = postal;
  document.getElementById("sumaryOutputCV").innerHTML = summary;
  document.getElementById("jobsTitleOutputCV").innerHTML = jobTitle;
  document.getElementById("employerOutputCV").innerHTML = employer;
  document.getElementById("cityOutputCV").innerHTML = city;
  document.getElementById("countryOutputCV").innerHTML = country;
  document.getElementById("startDateOutputCV").innerHTML = startDate;
  document.getElementById("endDateOutputCV").innerHTML = endDate;
  document.getElementById("schoolNameOutputCV").innerHTML = schoolName;
  document.getElementById("schoolCountryOutputCV").innerHTML = schoolCountry;
  document.getElementById("schoolStartDateOutputCV").innerHTML = schoolStartDate;
  document.getElementById("schoolEndDateOutputCV").innerHTML = schoolEndDate;
  document.getElementById("fieldOutputCV").innerHTML = field;
  document.getElementById("qualificationOutputCV").innerHTML = qualification;
  document.getElementById("gradeOutputCV").innerHTML = grade;
  document.getElementById("honourOutputCV").innerHTML = honour;
  
	const mySkill = document.getElementById("skill-list");
  mySkill.innerHTML = "";
 let skillarray = JSON.parse(localStorage.getItem('skills')) || [];
  skillarray.forEach((skill) => {
    const li = document.createElement("li");
    const skillName = document.createElement("div"); // create a div element
    skillName.textContent = skill; // set the skill name as text content of the div
    li.appendChild(skillName); // append the div to the li element
    mySkill.appendChild(li);
  });

}



function again() {
  localStorage.clear();
}
