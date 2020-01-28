function togglePassword() {
  var x = document.querySelector("#txtPass");

  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function togglePassword2() {
  var x = document.querySelector("#txtPass2");

  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// navigation
$(document).ready(function() {
  $(".nav-list").on("click", "li", function() {
    $(".nav-list li.current-page").removeClass("current-page");
    $(this).addClass("current-page");
  });
});

function selectPage() {
  $(".pagination").on("click", "a", function() {
    $(".pagination a.active").removeClass("active");
    $(this).addClass("active");
  });
}

function toggleMenu() {
  const menu = document.querySelector("#nav");
  const content = document.querySelector(".content");
  const menuBtn = document.querySelector(".menu-btn");

  menu.classList.toggle("show");
  content.classList.toggle("blur");
  menuBtn.classList.toggle("hidden");
}

// Birthday Picker
$(".bdayPicker").each(function() {
  //Create jQueryUI datepicker
  $(this).datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "-80:-18"
  });
});

// Date Picker
$(".datePicker").each(function() {
  //Create jQueryUI datepicker
  $(this).datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "-20:+0"
  });
});

// Leave Picker
$(".leavePicker").each(function() {
  //Create jQueryUI datepicker
  $(this).datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "-0:+1"
  });
});

// Termination Date Picker
$(".terminationDatePicker").each(function() {
  //Create jQueryUI datepicker
  $(this).datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "-1:+1"
  });
});

// Show Employee based on selected option
function getEmployeeBy() {
  const select = document.querySelector("#showEmployeeBy");
  const showEmployeeByCategory = document.querySelector(
    "#showEmployeeByCategory"
  );
  removeOptions(showEmployeeByCategory);
  const departments = ["Programming", "Marketing", "Sales", "Human Resource"];
  const positions = ["Manager", "Programmer", "Sales Assistant", "Technical"];

  if (select.options[select.selectedIndex].value == "department") {
    for (dept in departments) {
      showEmployeeByCategory.appendChild(new Option(departments[dept]));
    }
  } else if (select.options[select.selectedIndex].value == "position") {
    for (pos in positions) {
      showEmployeeByCategory.appendChild(new Option(positions[pos]));
    }
  } else {
  }
}

// Show Employee based on selected option
function getEmployeeByModal() {
  const select = document.querySelector("#showEmployeeByModal");
  const showEmployeeByCategory = document.querySelector(
    "#showEmployeeByCategoryModal"
  );
  removeOptions(showEmployeeByCategory);
  const departments = ["Programming", "Marketing", "Sales", "Human Resource"];
  const positions = ["Manager", "Programmer", "Sales Assistant", "Technical"];

  if (select.options[select.selectedIndex].value == "department") {
    for (dept in departments) {
      showEmployeeByCategory.appendChild(new Option(departments[dept]));
    }
  } else if (select.options[select.selectedIndex].value == "position") {
    for (pos in positions) {
      showEmployeeByCategory.appendChild(new Option(positions[pos]));
    }
  } else {
  }
}

// Clear Options
function removeOptions(select_box) {
  let i;
  for (i = select_box.options.length - 1; i >= 0; i--) {
    select_box.remove(i);
  }
}

function openModal(btn_id) {
  // List modal
  const modalTimeAlteration = document.querySelector(".modal-time-alteration");
  const modalOvertimeRecord = document.querySelector(
    ".modal-overtime-application"
  );
  const modalFileLeave = document.querySelector(".modal-file-leave");
  const modalCreatePayroll = document.querySelector(".modal-create-payroll");
  const modalAddEmployee = document.querySelector(".modal-add-employee");
  const modalViewEmployee = document.querySelector(".modal-view-employee");
  const modalAddEmployeeHeader = document.querySelector("#add-employee-header");
  const modalAddEmployeeBtn = document.querySelector("#btnModalAddEmployee");
  const modalUpdateEmployeeBtn = document.querySelector(
    "#btnModalUpdateEmployee"
  );

  // get open modal button
  const modalBtn = btn_id;

  if (modalBtn === "#btnTimeAlteration") {
    modalTimeAlteration.style.display = "flex";
  } else if (modalBtn === "#btnOvertimeApplication") {
    modalOvertimeRecord.style.display = "flex";
  } else if (modalBtn === "#btnFileLeave") {
    modalFileLeave.style.display = "flex";
  } else if (modalBtn === "#btnCreatePayroll") {
    modalCreatePayroll.style.display = "flex";
  } else if (modalBtn === "#btnAddEmployee") {
    modalAddEmployee.style.display = "flex";
    modalAddEmployeeHeader.innerHTML = "Add Employment Information";
    modalAddEmployeeBtn.classList.remove("hidden");
    modalUpdateEmployeeBtn.classList.add("hidden");
  } else if (modalBtn === "#btnUpdateEmployee") {
    modalAddEmployee.style.display = "flex";
    modalAddEmployeeHeader.innerHTML = "Update Employment Information";
    modalAddEmployeeBtn.classList.add("hidden");
    modalUpdateEmployeeBtn.classList.remove("hidden");
  } else if (modalBtn === "#btnViewEmployee") {
    modalViewEmployee.style.display = "flex";
  }

  //set tab back to primary-info
  defaultTab("primary-info");
}

function closeModal(btn_id) {
  // List modal
  const modalTimeAlteration = document.querySelector(".modal-time-alteration");
  const modalOvertimeRecord = document.querySelector(
    ".modal-overtime-application"
  );
  const modalFileLeave = document.querySelector(".modal-file-leave");
  const modalCreatePayroll = document.querySelector(".modal-create-payroll");
  const modalAddEmployee = document.querySelector(".modal-add-employee");
  const modalViewEmployee = document.querySelector(".modal-view-employee");
  const modalUpdateEmployee = document.querySelector(".modal-update-employee");

  // get open modal button
  const modalBtn = btn_id;

  if (modalBtn === "#btnCloseTimeAlteration") {
    modalTimeAlteration.style.display = "none";
  } else if (modalBtn === "#btnCloseOvertimeApplication") {
    modalOvertimeRecord.style.display = "none";
  } else if (modalBtn === "#btnCloseFileLeave") {
    modalFileLeave.style.display = "none";
  } else if (modalBtn === "#btnCloseCreatePayroll") {
    modalCreatePayroll.style.display = "none";
  } else if (modalBtn === "#btnCloseAddEmployee") {
    modalAddEmployee.style.display = "none";
  } else if (modalBtn === "#btnCloseViewEmployee") {
    modalViewEmployee.style.display = "none";
  }

  //set tab back to primary-info
  defaultTab("primary-info");
}

function reset(frm_id) {
  document.getElementById(frm_id).reset();
}

function openModalWithPay() {
  // List modal
  const modalWithPay = document.querySelector(".modal-with-pay");
  modalWithPay.style.display = "flex";
}

function closeModalWithPay() {
  // List modal
  const modalWithPay = document.querySelector(".modal-with-pay");

  modalWithPay.style.display = "none";
}

function openModalConfirmation() {
  const modalConfirmation = document.querySelector(".modal-confirmation");
  modalConfirmation.style.display = "flex";
}

function closeModalConfirmation() {
  const modalConfirmation = document.querySelector(".modal-confirmation");
  modalConfirmation.style.display = "none";
}

function loadModal() {
  document.querySelector(".modal").innerHTML = "confirmation.html";
  openModalConfirmation();
}

function openTab(tabName) {
  var x = document.getElementsByClassName("tabNameHrModal");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "flex";

  $(".tab-list").on("click", "li", function() {
    $(".tab-list li.current-tab").removeClass("current-tab");
    $(this).addClass("current-tab");
  });
}

function defaultTab(tabName) {
  var x = document.getElementsByClassName("tabNameHrModal");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "flex";

  $(".tab-list li.current-tab").removeClass("current-tab");
  $(".tab-list li:first-child").addClass("current-tab");
}

function toggleEndo() {
  const selectEmploymentStatus = $("#selectEmploymentStatus")
    .find(":selected")
    .text();
  const lblLeave = document.querySelector("#txtLeaveLabel");
  const lblSickLeave = document.querySelector("#txtSickLeaveLabel");
  const txtSickLeave = document.querySelector("#txtSickLeave");
  const lblVELeave = document.querySelector("#txtVELeaveLabel");
  const txtVELeave = document.querySelector("#txtVELeave");
  const dtTermDateLabel = document.querySelector("#dtTermDateLabel");
  const dtTermDate = document.querySelector("#dtTermDate");

  lblLeave.classList.add("disabled");
  lblSickLeave.classList.add("disabled");
  txtSickLeave.classList.add("disabled");
  lblVELeave.classList.add("disabled");
  txtVELeave.classList.add("disabled");
  dtTermDateLabel.classList.add("disabled");
  dtTermDate.classList.add("disabled");

  if (selectEmploymentStatus === "Regular") {
    lblLeave.classList.remove("disabled");
    lblSickLeave.classList.remove("disabled");
    txtSickLeave.classList.remove("disabled");
    lblVELeave.classList.remove("disabled");
    txtVELeave.classList.remove("disabled");
  } else if (selectEmploymentStatus === "End of Contract") {
    dtTermDateLabel.classList.remove("disabled");
    dtTermDate.classList.remove("disabled");
  }
}

function enableReq() {
  const req1 = document.querySelector("#req1");
  const req2 = document.querySelector("#req2");
  const req3 = document.querySelector("#req3");
  req1.classList.remove("disabled");
  req2.classList.remove("disabled");
  req3.classList.remove("disabled");
}

function disableReq() {
  const req1 = document.querySelector("#req1");
  const req2 = document.querySelector("#req2");
  const req3 = document.querySelector("#req3");
  req1.classList.add("disabled");
  req2.classList.add("disabled");
  req3.classList.add("disabled");
}

function enableAccessRole() {
  const selectRoleLabel = document.querySelector("#selectRoleLabel");
  const selectRole = document.querySelector("#selectRole");
  const txtPasswordLabel = document.querySelector("#txtPasswordLabel");
  const txtPassword = document.querySelector("#txtPassword");
  selectRoleLabel.classList.remove("disabled");
  selectRole.classList.remove("disabled");
  txtPasswordLabel.classList.remove("disabled");
  txtPassword.classList.remove("disabled");
}

function disableAccessRole() {
  const selectRoleLabel = document.querySelector("#selectRoleLabel");
  const selectRole = document.querySelector("#selectRole");
  const txtPasswordLabel = document.querySelector("#txtPasswordLabel");
  const txtPassword = document.querySelector("#txtPassword");
  selectRoleLabel.classList.add("disabled");
  selectRole.classList.add("disabled");
  txtPasswordLabel.classList.add("disabled");
  txtPassword.classList.add("disabled");
}

// function disableButton(formid, btnid) {
//   $(btnid).on("click", function() {
//     $(btnid)
//       .val("Please wait ...")
//       .attr("disabled", "disabled");
//     $(formid).submit();
//   });
//   alert(btn_id + " __ " + form_id);
// }
