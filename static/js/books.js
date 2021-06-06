function random_function() {
  var a = document.getElementById("input").value;
  if (a == "BCA") {
    var arr = ["Select Semester", "1", "2", "3", "4", "5", "6"];
  } else if (a == "BBA") {
    arr = ["Select Semester", "1", "2", "3", "4", "5", "6"];
  } else if (a === "MCA") {
    arr = ["Select Semester", "1", "2", "3", "4"];
  } else {
    arr = ["Select Semester", "1", "2", "3", "4", "5", "6", "7", "8"];
  }
  var string = "";

  for (i = 0; i < arr.length; i++) {
    string = string + "<option value=" + arr[i] + ">" + arr[i] + "</option>";
  }
  document.getElementById("output").innerHTML = string;
}

function random_function_sem() {
  var a = document.getElementById("input").value;
  var b = document.getElementById("output").value;

  // =========================BCA============================

  if (a == "BCA" && b == "1") {
    var arr2 = [
      "Select Subject",
      "BCAN-101",
      "BCAN-102",
      "BCAN-103",
      "BMN-101",
    ];
  } else if (a == "BCA" && b == "2") {
    arr2 = [
      "Select Subject",
      "BCAN-201",
      "BCAN-202",
      "BCAN-203",
      "BMN-101",
      "HUN-201",
    ];
  } else if (a == "BCA" && b == "3") {
    arr2 = ["Select Subject", "BCAN-301", "BCAN-E302A", "BCAN-303", "BMN-301"];
  } else if (a == "BCA" && b == "4") {
    arr2 = ["Select Subject", "BCAN-401", "BCAN-402", "BCAN-403", "BMN-401"];
  } else if (a == "BCA" && b == "5") {
    arr2 = ["Select Subject", "BCAN-501", "BCAN-502", "BCA(BBA)N-504"];
  } else if (a == "BCA" && b == "6") {
    arr2 = [
      "Select Subject",
      "BCAN-601B",
      "BCAN-E601C",
      "BCAN-E602B",
      "BCAN E602C",
      "HUN-601",
    ];
  }

  // =========================BBA============================
  else if (a == "BBA" && b == "1") {
    arr2 = [
      "Select Subject",
      "BBA(N)-101",
      "BBA(N)-102",
      "BBA(N)-103",
      "BBA(N)-104",
      "BBA(N)-105",
    ];
  } else if (a == "BBA" && b == "2") {
    arr2 = [
      "Select Subject",
      "BBA(N)-201",
      "BBA(N)-202",
      "BBA(N)-203",
      "BBA(N)-204",
      "BBA(N)-205",
    ];
  } else if (a == "BBA" && b == "3") {
    arr2 = [
      "Select Subject",
      "BBA(N)-301",
      "BBA(N)-302",
      "BBA(N)-303",
      "BBA(N)-304",
      "BBA(N)-305",
    ];
  } else if (a == "BBA" && b == "4") {
    arr2 = [
      "Select Subject",
      "BBA(N)-401",
      "BBA(N)-402",
      "BBA(N)-403",
      "BBA(N)-405",
      "BBA(N)-405",
    ];
  } else if (a == "BBA" && b == "5") {
    arr2 = [
      "Select Subject",
      "BBA(N)-501",
      "BBA(N)-502",
      "BBA(N)-503",
      "BBA(N)-505",
      "BBA(N)-505",
    ];
  } else if (a == "BBA" && b == "6") {
    arr2 = [
      "Select Subject",
      "BBA(N)-601",
      "BBA(N)-602",
      "BBA(N)-603",
      "BBA(N)-604",
    ];
  }
  // =========================MCA============================
  else if (a == "MCA" && b == "1") {
    arr2 = [
      "Select Subject",
      "MCA-101",
      "MCA-102",
      "MCA-103",
      "HU-101",
      "MM-101",
    ];
  } else if (a == "MCA" && b == "2") {
    arr2 = [
      "Select Subject",
      "MCA-201",
      "MCA-202",
      "MCA-203",
      "MCA-204",
      "MCA-205",
    ];
  } else if (a == "MCA" && b == "3") {
    arr2 = ["Select Subject", "MCA-301", "MCA-302", "MCA-303", "MM-301"];
  } else if (a == "MCA" && b == "4") {
    arr2 = [
      "Select Subject",
      "MCA-401",
      "MCA-402",
      "MCA-403",
      "HU-401",
      "MM-401",
    ];
  }

  // =========================B-TECH (ME)============================
  else if (a == "ME" && b == "1") {
    arr2 = [
      "Select Subject",
      "BS-PH101",
      "BS-CH101",
      "BS-M101",
      "BS-M102",
      "ES-EE101",
    ];
  } else if (a == "ME" && b == "2") {
    arr2 = [
      "Select Subject",
      "BS-PH101",
      "BS-CH101",
      "BS-M101",
      "BS-M102",
      "ES-EE101",
    ];
  } else if (a == "ME" && b == "3") {
    arr2 = [
      "Select Subject",
      "BS-M301",
      "BS-BIO301",
      "BS-ECE301",
      "ES-ME301",
      "PC-ME301",
      "PC-ME302",
    ];
  } else if (a == "ME" && b == "4") {
    arr2 = [
      "Select Subject",
      "ES-ME-401",
      "PC-ME-401",
      "PC-ME-402",
      "PC-ME-403",
      "PC-ME-404",
    ];
  } else if (a == "ME" && b == "5") {
    arr2 = [
      "Select Subject",
      "PC-ME-501",
      "PC-ME-502",
      "PC-ME-503",
      "HM-HU-501",
    ];
  }
  // else if(a=="ME" && b=="6")
  // {
  //     arr2=["Select Subject","BS-PH101","BS-CH101","BS-M101","BS-M102","ES-EE101"];
  // }
  // else if(a=="ME" && b=="7")
  // {
  //     arr2=["Select Subject","BS-PH101","BS-CH101","BS-M101","BS-M102","ES-EE101"];
  // }
  // else if(a=="ME" && b=="8")
  // {
  //     arr2=["Select Subject","BS-PH101","BS-CH101","BS-M101","BS-M102","ES-EE101"];
  // }

  var string2 = "";

  for (i = 0; i < arr2.length; i++) {
    string2 =
      string2 + "<option value=" + arr2[i] + ">" + arr2[i] + "</option>";
  }
  document.getElementById("output2").innerHTML = string2;
}
