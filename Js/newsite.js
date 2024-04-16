	let skillarray = [];
 function addSkill(){
	 
    let skilladding = document.getElementById("skill-input").value;
    skillarray.push(skilladding);
    const mySkill = document.getElementById("skill-list");
    mySkill.innerHTML = ""; // Clear the current list
    skillarray.forEach((skill)=>{
        const li = document.createElement("li");
        const skillName = document.createElement("div"); // create a div element
        skillName.textContent = skill; // set the skill name as text content of the div
        li.appendChild(skillName); // append the div to the li element
        mySkill.appendChild(li);
    });
	 localStorage.setItem('skills', JSON.stringify(skillarray));
    document.getElementById("skill-input").value = ' ';
  }
function FIRSTNAME(){
		let firstname =  document.getElementById("firstName").value;
		document.getElementById("firstNameOutput").innerHTML = firstname;
		localStorage.setItem("getFirstName",firstname);
		}
	function LASTNAME(){
		let lastname =  document.getElementById("lastName").value;
		document.getElementById("lastNameOutput").innerHTML = lastname;
		localStorage.setItem("getLastName",lastname);
		}
	function ADDRESS(){
		let address =  document.getElementById("address").value;
		document.getElementById("addressOutput").innerHTML = address;
		localStorage.setItem("getAddress",address);
		}
	function POSTALCODE(){
		let postcode =  document.getElementById("postalCode").value;
		document.getElementById("postcode").innerHTML = postcode;
		localStorage.setItem("getPostCode",postcode);
		}
	function PHONENUM(){
		let phonenum =  document.getElementById("phoneNum").value;
		document.getElementById("phoneNumOutput").innerHTML = phonenum;
		localStorage.setItem("getPhoneNum",phonenum);
		}
	function EMAILADDRESS(){
		let email =  document.getElementById("emailAddress").value;
		document.getElementById("emailOutput").innerHTML = email;
		localStorage.setItem("getEmail",email);
		}	
	function SUMARY(){
		// Get the textarea and output elements
const myTextarea = document.getElementById('sumary');
const output = document.getElementById('sumaryOutput');

// Add an event listener that listens for input to the textarea
myTextarea.addEventListener('input', function() {
  // Set the innerHTML of the output element to the value of the textarea
  output.innerHTML = myTextarea.value.replace(/<br>/g, "\n");
   localStorage.setItem('getSumary', myTextarea.value);
});


	}
	function JOBTITLE(){
		let jobtitle =  document.getElementById("jobTitle").value;
		document.getElementById("jobsTitleOutput").innerHTML = jobtitle;
		localStorage.setItem("getJobTitle",jobtitle);
		}
	function EMPLOYER(){
		let employer =  document.getElementById("employer").value;
		document.getElementById("employerOutput").innerHTML = employer;
		localStorage.setItem("getEmployer",employer);
		}
	function CITY(){
		let city =  document.getElementById("city").value;
		document.getElementById("cityOutput").innerHTML = city;
		localStorage.setItem("getCity",city);
		}
	function COUNTRY(){
		let country =  document.getElementById("country").value;
		document.getElementById("countryOutput").innerHTML = country;
		localStorage.setItem("getCountry",country);
		}
	function STARTDATE(){
		let startdate =  document.getElementById("startDate").value;
		document.getElementById("startDateOutput").innerHTML = startdate;
		localStorage.setItem("getStartDate",startdate);
		}
	function ENDDATE(){
		let enddate =  document.getElementById("endDate").value;
		document.getElementById("endDateOutput").innerHTML = enddate;
		localStorage.setItem("getEndDate",enddate);
		}
	function SCHOOLNAME(){
		let schoolname= document.getElementById("schoolNAME").value;
		document.getElementById("schoolNameOutput").innerHTML = schoolname;
		localStorage.setItem("getSchoolName",schoolname);
	}
	function SCHOOLLOCATION(){
		let schoollocation =  document.getElementById("schoolLocation").value;
		document.getElementById("schoolCountryOutput").innerHTML = schoollocation;
		localStorage.setItem("getSchoolLocation",schoollocation);
		}
	function FIELD(){
		let field = document.getElementById("fieldOfStudy").value;
		document.getElementById("fieldOutput").innerHTML = field;
		localStorage.setItem("getField",field);
	}
	function QUALIFICATION(){
		let qualification = document.getElementById("qualification").value;
		document.getElementById("qualificationOutput").innerHTML = qualification;
		localStorage.setItem("getQualification",qualification);
	}
	function GRADE(){
		let grade=document.getElementById("grade").value;
		document.getElementById("gradeOutput").innerHTML = grade;
		localStorage.setItem("getGrade",grade);
 	}
	function HONOURS(){
		let honour = document.getElementById("honour").value;
		document.getElementById("honourOutput").innerHTML=honour;
		localStorage.setItem("getHonour",honour);
	}
	function SCHOOLSTARTDATE(){
		let schoolstart = document.getElementById("monthStart").value;
		document.getElementById("schoolStartDateOutput").innerHTML = schoolstart;
		localStorage.setItem("getSchoolStart",schoolstart);
	}
	function GRADUATE(){
		let schoolend = document.getElementById("monthEnd").value;
		document.getElementById("schoolEndDateOutput").innerHTML = schoolend;
		localStorage.setItem("getSchoolEnd",schoolend);
	}
	/*function SKILL(){
		let skill = document.getElementById("skill").value;
		document.getElementById("skillOutput").innerHTML = skill;
		}
	let skillarray=[];
	function addskill(){
		let skill= document.getElementById("skill").value;
		skillarray.push(skill);
		localStorage.setItem("getSkill",JSON.stringify(skillarray));
	}*/

	
	
