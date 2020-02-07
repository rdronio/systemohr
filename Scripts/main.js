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

// function selectNav() {
//   $(".nav").on("click", "li", function() {
//     $(".nav-list li.current-page").removeClass("current-page");
//     $(this).addClass("current-page");
//   });
// }

function selectPage() {
  $(".pagination-container").on("click", "a", function() {
    $(".pagination a.active").removeClass("active");
    $(this).addClass("active");
  });
}

function selectTab() {
  $("#tab").on("click", "li", function() {
    $(".tab-list li.current-tab").removeClass("current-tab");
    $(this).addClass("current-tab");
  });
}

function selectTabEI() {
  $(".tabIE").on("click", "li", function() {
    $(".modal-tab-list li.current-tab").removeClass("current-tab");
    $(this).addClass("current-tab");
  });
}
function selectTabViewEI() {
  $("#tabViewIE").on("click", "li", function() {
    $(".modal-tab-list li.current-tab").removeClass("current-tab");
    $(this).addClass("current-tab");
  });
}

function showEM() {
  const card1 = document.querySelector(
    "#employee-masterlist .container .card-1"
  );
  const card2 = document.querySelector(
    "#employee-masterlist .container .card-2"
  );

  card2.classList.add("hidden");
  card1.classList.remove("hidden");
}

function showIM() {
  const card1 = document.querySelector(
    "#employee-masterlist .container .card-1"
  );
  const card2 = document.querySelector(
    "#employee-masterlist .container .card-2"
  );

  card2.classList.remove("hidden");
  card1.classList.add("hidden");
}

function showER() {
  const card1 = document.querySelector("#expense-records .container .card-1");
  const card2 = document.querySelector("#expense-records .container .card-2");

  card2.classList.add("hidden");
  card1.classList.remove("hidden");
}

function showPE() {
  const card1 = document.querySelector("#expense-records .container .card-1");
  const card2 = document.querySelector("#expense-records .container .card-2");

  card2.classList.remove("hidden");
  card1.classList.add("hidden");
}

function showTR() {
  const card1 = document.querySelector("#time-records .container .card-1");
  const card2 = document.querySelector("#time-records .container .card-2");

  card2.classList.add("hidden");
  card1.classList.remove("hidden");
}
function showPTA() {
  const card1 = document.querySelector("#time-records .container .card-1");
  const card2 = document.querySelector("#time-records .container .card-2");

  card2.classList.remove("hidden");
  card1.classList.add("hidden");
}

function showLR() {
  const card1 = document.querySelector("#leaverecords .container .card-1");
  const card2 = document.querySelector("#leaverecords .container .card-2");

  card2.classList.add("hidden");
  card1.classList.remove("hidden");
}

function showPLA() {
  const card1 = document.querySelector("#leaverecords .container .card-1");
  const card2 = document.querySelector("#leaverecords .container .card-2");

  card2.classList.remove("hidden");
  card1.classList.add("hidden");
}

function showOR() {
  const card1 = document.querySelector("#overtime-records .container .card-1");
  const card2 = document.querySelector("#overtime-records .container .card-2");

  card2.classList.add("hidden");
  card1.classList.remove("hidden");
}

function showPOA() {
  const card1 = document.querySelector("#overtime-records .container .card-1");
  const card2 = document.querySelector("#overtime-records .container .card-2");

  card2.classList.remove("hidden");
  card1.classList.add("hidden");
}

function toggleMenu() {
  const menu = document.querySelector("#nav");
  const content = document.querySelector(".content");
  const menuBtn = document.querySelector(".menu-btn");
  const body = document.querySelector("body");

  menu.classList.toggle("show");
  content.classList.toggle("blur");
  menuBtn.classList.toggle("hidden");
  body.classList.toggle("noscroll");
}

// Time Picker
$(".timepicker").each(function() {
  $(this).timepicker({
    timeFormat: "hh:mm p",
    interval: 60,
    minTime: "8",
    maxTime: "5:00pm",
    defaultTime: "8",
    startTime: "8:00",
    dynamic: false,
    dropdown: true,
    scrollbar: true
  });
});

// Birthday Picker
$(".bdayPicker").each(function() {
  //Create jQueryUI datepicker
  $(this).datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "-80:-18"
  });
});

// datePicker Payroll
$(".datePickerPayroll").each(function() {
  //Create jQueryUI datepicker
  $(this).datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "-10:+10"
  });
});

// Date Picker
$(".datePicker").each(function() {
  //Create jQueryUI datepicker
  $(this).datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "-10:+10",
    beforeShowDay: $.datepicker.noWeekends
  });
});

// Leave Picker
$(".leavePicker").each(function() {
  //Create jQueryUI datepicker
  $(this).datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "-10:+10",
    beforeShowDay: $.datepicker.noWeekends
  });
});

// OT Picker
$(".otPicker").each(function() {
  //Create jQueryUI datepicker
  $(this).datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "-10:+10",
    beforeShowDay: $.datepicker.noWeekends
  });
});

// Termination Date Picker
$(".terminationDatePicker").each(function() {
  //Create jQueryUI datepicker
  $(this).datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "-10:+10",
    beforeShowDay: $.datepicker.noWeekends
  });
});

function calcBusinessDays(dDate1, dDate2) {
  // input given as Date objects
  var iWeeks,
    iDateDiff,
    iAdjust = 0;
  if (dDate2 < dDate1) return -1; // error code if dates transposed
  var iWeekday1 = dDate1.getDay(); // day of week
  var iWeekday2 = dDate2.getDay();
  iWeekday1 = iWeekday1 == 0 ? 7 : iWeekday1; // change Sunday from 0 to 7
  iWeekday2 = iWeekday2 == 0 ? 7 : iWeekday2;
  if (iWeekday1 > 5 && iWeekday2 > 5) iAdjust = 1; // adjustment if both days on weekend
  iWeekday1 = iWeekday1 > 5 ? 5 : iWeekday1; // only count weekdays
  iWeekday2 = iWeekday2 > 5 ? 5 : iWeekday2;

  // calculate differnece in weeks (1000mS * 60sec * 60min * 24hrs * 7 days = 604800000)
  iWeeks = Math.floor((dDate2.getTime() - dDate1.getTime()) / 604800000);

  if (iWeekday1 < iWeekday2) {
    //Equal to makes it reduce 5 days
    iDateDiff = iWeeks * 5 + (iWeekday2 - iWeekday1);
  } else {
    iDateDiff = (iWeeks + 1) * 5 - (iWeekday1 - iWeekday2);
  }

  iDateDiff -= iAdjust; // take into account both days on weekend

  return iDateDiff + 1; // add 1 because dates are inclusive
}

// leave records From To Counter
function getBusinessDateCount(startDate, endDate) {
  var elapsed, daysBeforeFirstSaturday, daysAfterLastSunday;
  var ifThen = function(a, b, c) {
    return a == b ? c : a;
  };

  elapsed = endDate - startDate;
  elapsed /= 86400000;

  daysBeforeFirstSunday = (7 - startDate.getDay()) % 7;
  daysAfterLastSunday = endDate.getDay();

  elapsed -= daysBeforeFirstSunday + daysAfterLastSunday;
  elapsed = (elapsed / 7) * 5;
  elapsed +=
    ifThen(daysBeforeFirstSunday - 1, -1, 0) +
    ifThen(daysAfterLastSunday, 6, 5);

  return Math.ceil(elapsed);
}

function calc() {
  let start = document.querySelector("#txtDateFrom").value,
    end = document.querySelector("#txtDateTo").value,
    result = getBusinessDateCount(new Date(start), new Date(end));
  document.querySelector("#result").innerHTML = result;
}

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

function scrollTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollTopModal() {
  document.querySelector(".modal-content").scrollTop = 0;
}

function openModal(btn_id) {
  try {
    // List modal
    const modalTimeAlteration = document.querySelector(
      ".modal-time-alteration"
    );
    const modalOvertimeRecord = document.querySelector(
      ".modal-overtime-application"
    );
    const modalExpenseRecord = document.querySelector(
      ".modal-expense-application"
    );
    const modalFileLeave = document.querySelector(".modal-file-leave");
    const modalCreatePayroll = document.querySelector(".modal-create-payroll");
    const modalAddEmployee = document.querySelector(".modal-add-employee");
    const modalAddEmployeeHeader = document.querySelector(
      "#add-employee-header"
    );
    const modalAddEmployeeBtn = document.querySelector("#btnModalAddEmployee");
    const modalUpdateEmployeeBtn = document.querySelector(
      "#btnModalUpdateEmployee"
    );
    const selectDept = document.querySelector("#drpDepartment");
    const selectDeptUpdate = document.querySelector("#drpDepartmentUpdate");
    // const modalUpdateEmployee = document.querySelector(
    //   ".modal-update-employee"
    // );
    const modalViewEmployee = document.querySelector(".modal-view-employee");
    const modalAddEmpTask = document.querySelector(".modal-add-inprogresstask");

    // get open modal button
    const modalBtn = btn_id;

    if (modalBtn === "#btnTimeAlteration") {
      modalTimeAlteration.style.display = "flex";
    } else if (modalBtn === "#btnOvertimeApplication") {
      modalOvertimeRecord.style.display = "flex";
    } else if (modalBtn === "#btnFileLeave") {
      modalFileLeave.style.display = "flex";
    } else if (modalBtn === "#btnAddExpense") {
      modalExpenseRecord.style.display = "flex";
    } else if (modalBtn === "#btnCreatePayroll") {
      modalCreatePayroll.style.display = "flex";
    } else if (modalBtn === "#btnAddEmployee") {
      modalAddEmployee.style.display = "flex";
      modalAddEmployeeHeader.innerHTML = "Add Employment Information";
      modalAddEmployeeBtn.classList.remove("hidden");
      modalUpdateEmployeeBtn.classList.add("hidden");
      selectDept.classList.remove("hidden");
      selectDeptUpdate.classList.add("hidden");
    } else if (modalBtn === "#btnUpdateEmployee") {
      modalAddEmployee.style.display = "flex";
      modalAddEmployeeHeader.innerHTML = "Update Employment Information";
      modalAddEmployeeBtn.classList.add("hidden");
      modalUpdateEmployeeBtn.classList.remove("hidden");
      selectDept.classList.add("hidden");
      selectDeptUpdate.classList.remove("hidden");
      // defaultTabUpdate("primary-info-update");
    } else if (modalBtn === "#btnViewEmployee") {
      modalViewEmployee.style.display = "flex";
      hideBasicInfo("view-primary-info");
    } else if (modalBtn === "#btnAddEmpTask") {
      modalAddEmpTask.style.display = "flex";
    }

    //set tab back to primary-info
    defaultTab("primary-info");
    scrollTopModal();
  } catch (ex) {}
}

function closeModal(btn_id) {
  try {
    // List modal
    const modalTimeAlteration = document.querySelector(
      ".modal-time-alteration"
    );
    const modalOvertimeRecord = document.querySelector(
      ".modal-overtime-application"
    );
    const modalExpenseRecord = document.querySelector(
      ".modal-expense-application"
    );
    const modalFileLeave = document.querySelector(".modal-file-leave");
    const modalCreatePayroll = document.querySelector(".modal-create-payroll");
    const modalAddEmployee = document.querySelector(".modal-add-employee");
    // const modalUpdateEmployee = document.querySelector(
    //   ".modal-update-employee"
    // );
    const modalViewEmployee = document.querySelector(".modal-view-employee");
    const modalAddEmpTask = document.querySelector(".modal-add-inprogresstask");
    
    // get open modal button
    const modalBtn = btn_id;

    if (modalBtn === "#btnCloseTimeAlteration") {
      modalTimeAlteration.style.display = "none";
    } else if (modalBtn === "#btnCloseOvertimeApplication") {
      modalOvertimeRecord.style.display = "none";
    } else if (modalBtn === "#btnCloseFileLeave") {
      modalFileLeave.style.display = "none";
    } else if (modalBtn === "#btnCloseAddExpense") {
      modalExpenseRecord.style.display = "none";
    } else if (modalBtn === "#btnCloseCreatePayroll") {
      modalCreatePayroll.style.display = "none";
    } else if (modalBtn === "#btnCloseAddEmployee") {
      modalAddEmployee.style.display = "none";
    }
    //  else if (modalBtn === "#btnCloseUpdateEmployee") {
    //   modalUpdateEmployee.style.display = "none";
    // }

    
    else if (modalBtn === "#btnCloseViewEmployee") {
      modalViewEmployee.style.display = "none";
    } else if (modalBtn === "#btnCloseAddEmpTask") {
      modalAddEmpTask.style.display = "none";
      resetAddEmpProj();
    }

    //set tab back to primary-info
    defaultTab("primary-info");
    // defaultTabUpdate("primary-info-update");
    defaultTabViewIE("view-primary-info");
  } catch (ex) {}
}

function openTabHrInfo() {
  try {
    const modalAddEmployee = document.querySelector(".modal-add-employee");
    const modalAddEmployeeBtn = document.querySelector("#btnModalAddEmployee");
    const modalUpdateEmployeeBtn = document.querySelector(
      "#btnModalUpdateEmployee"
    );

    modalAddEmployee.style.display = "flex";
    modalAddEmployeeBtn.classList.remove("hidden");
    modalUpdateEmployeeBtn.classList.add("hidden");

    const x = document.getElementsByClassName("tabNameHrModal");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById("hr-info").style.display = "flex";

    $(".modal-tab-list li.current-tab").removeClass("current-tab");
    $(".modal-tab-list li:nth-child(2)").addClass("current-tab");

    scrollTopModal();
  } catch (ex) {}
}

function reset(frm_id) {
  document.getElementById(frm_id).reset();
}

function openModalWithPay() {
  const modalWithPay = document.querySelector(".modal-with-pay");
  modalWithPay.style.display = "flex";
}

function closeModalWithPay() {
  const modalWithPay = document.querySelector(".modal-with-pay");
  modalWithPay.style.display = "none";
}

function openModalLeaveRemarks() {
  const modalLeaveRemarks = document.querySelector(".modal-leave-remarks");
  modalLeaveRemarks.style.display = "flex";
}

function closeModalLeaveRemarks() {
  const modalLeaveRemarks = document.querySelector(".modal-leave-remarks");
  modalLeaveRemarks.style.display = "none";
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

function openModalSetLeave() {
  const modal = document.querySelector(".modal-set-leave");
  modal.style.display = "flex";
}

function closeModalSetLeave() {
  const modal = document.querySelector(".modal-set-leave");
  modal.style.display = "none";
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

function openViewEmpInfoTab(tabName) {
  var x = document.getElementsByClassName("tabViewIEList");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "flex";

  hideBasicInfo(tabName);

  $(".tab-list").on("click", "li", function() {
    $(".tab-list li.current-tab").removeClass("current-tab");
    $(this).addClass("current-tab");
  });
}

function hideBasicInfo(tabName) {
  const basicInfo = document.querySelector(".summary-employee-info-container");
  if (tabName === "view-primary-info") {
    basicInfo.classList.add("hidden");
  } else {
    basicInfo.classList.remove("hidden");
  }
}

function redirectModalToUpdateEmployee() {
  const modalViewEmployee = document.querySelector(".modal-view-employee");
  modalViewEmployee.style.display = "none";
  openModal(`#btnUpdateEmployee`);
}

function defaultTab(tabName) {
  var x = document.getElementsByClassName("tabNameHrModal");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "flex";

  $(".modal-tab-list li.current-tab").removeClass("current-tab");
  $(".modal-tab-list li:first-child").addClass("current-tab");
}

function defaultTabUpdate(tabName) {
  var x = document.getElementsByClassName("tabNameHrModal");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "flex";

  $(".modal-tab-list li.current-tab").removeClass("current-tab");
  $(".modal-tab-list li:nth-child(1)").addClass("current-tab");
}

function defaultTabViewIE(tabName) {
  var x = document.getElementsByClassName("tabViewIEList");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "flex";

  $(".modal-tab-list li.current-tab").removeClass("current-tab");
  $(".modal-tab-list li:first-child").addClass("current-tab");
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

function removeHidden() {
    const inputProjectTask = document.querySelector("input.txtTaskField.hidden");
    inputProjectTask.classList.remove("hidden");

    const lastTaskField = document.querySelector("#txtTaskField_15");
    const btnProjectTask = document.querySelector(".btnAddTask");

    if (lastTaskField.classList.contains("hidden") == false) {
      btnProjectTask.classList.add("hidden");
    }
}

function resetAddEmpProj() {
  const resetEmpProj = document.querySelectorAll(".txtTaskName-container .txtTaskField");

  resetEmpProj.forEach(element => {
    element.classList.add("hidden");
  });
  
  
  const firstTaskField = document.querySelector("#txtTaskField_1");
  firstTaskField.classList.remove("hidden");


  const lastTaskField = document.querySelector("#txtTaskField_15");
  const btnProjectTask = document.querySelector(".btnAddTask");

  if (lastTaskField.classList.contains("hidden") == true) {
    btnProjectTask.classList.remove("hidden");
  }


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
