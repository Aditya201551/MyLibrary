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
      "BS-PH201",
      "BS-CH201",
      "BS-M201",
      "BS-M202",
      "ES-CS201",
      "HM-HU201",
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
  }else if(a=="ME" && b=="6"){
    arr2=[
      "Select Subject",
      "HM-HU601",
      "PC-ME601",
      "PC-ME602",
      "PC-ME601D",
      "PE-ME602I",
      "MC-601",
    ];
  }
  else if(a=="ME" && b=="7"){
    arr2=[
      "Select Subject",
      "BS-PH101",
      "BS-CH101",
      "BS-M101",
      "BS-M102",
      "ES-EE101"
    ];
  }
  else if(a=="ME" && b=="8"){
    arr2=[
      "Select Subject",
      "ME-801(HU)",
      "ME-802A",
      "ME-802B",
      "ME-802C",
      "ME-803B",
      "ME-803D",
      
    ];
  }

  // =========================B-TECH (CSE)============================
  else if (a == "CSE" && b == "1") {
    arr2 = [
      "Select Subject",
      "BS-PH101",
      "BS-CH101",
      "BS-M101",
      "BS-M102",
      "ES-EE101",
    ];
  } 
  else if (a == "CSE" && b == "2") {
    arr2 = [
      "Select Subject",
      "BS-PH201",
      "BS-CH201",
      "BS-M201",
      "BS-M202",
      "ES-CS201",
      "HM-HU201"
    ];
  } 
  else if (a == "CSE" && b == "3") {
    arr2 = [
      "Select Subject",
      "ESC-301",
      "PCC-CS-301",
      "PCC-CS-302",
      "BSC-301",
      "HSMC-301",
    ];
  } 
  else if (a == "CSE" && b == "4") {
    arr2 = [
      "Select Subject",
      "PCC-CS-401",
      "PCC-CS-402",
      "PCC-CS-403",
      "PCC-CS-404",
      "MCA-401",
      "BSC-401",
    ];
  } 
  else if (a == "CSE" && b == "5") {
    arr2 = [
      "Select Subject",
      "ESC-501",
      "PCC-CS-501",
      "PCC-CS-502",
      "PCC-CS-503",
      "PEC-IT-501-B",
      "PEC-IT-501-D",
      "HSMC-501",
    ];
  }  else if (a == "CSE" && b == "6") {
    arr2 = [
      "Select Subject",
      "PCC-CS601",
      "PCC-CS602",
      "PEC-IT601A",
      "PEC-IT601B",
      "PEC-IT601C",
      "PEC-IT601D",
      "PEC-IT602B",
    ];
  }  else if (a == "CSE" && b == "7") {
    arr2 = [
      "Select Subject",
      "CS-701",
      "CS-702",
      "CS-703",
      "CS-704A",
      "CS-704B",
      "CS-704C",
      "CS-704E",
      "CS-705A",
      "CS-705B",
    ];
  } 
  else if (a == "CSE" && b == "8") {
    arr2 = [
      "Select Subject",
      "HU801A",
      "HU801B",
      "CS801A",
      "CS801D",
      "CS802B",
      "CS802C",
      "CS802E",
    ];
  } 


  
  // =========================B-TECH (EI)============================
  else if (a == "EI" && b == "1") {
    arr2 = [
      "Select Subject",
      "BS-PH101",
      "BS-CH101",
      "BS-M101",
      "BS-M102",
      "ES-EE101",
    ];
  } 
  else if (a == "EI" && b == "2") {
    arr2 = [
      "Select Subject",
      "BS-PH201",
      "BS-CH201",
      "BS-M201",
      "BS-M202",
      "ES-CS201",
      "HM-HU201",
    ];
  }
  else if (a == "EI" && b == "3") {
    arr2 = [
      "Select Subject",
      "BS-M-301",
      "PC-EI-301",
      "PC-EI-304",
      "MC-ES-301",
    ];
  }
  else if (a == "EI" && b == "4") {
    arr2 = [
      "Select Subject",
      "BS-BIO-401",
      "PC-EI-401",
      "PC-EI-402",
      "PC-EI-403",
      "ES-CS-401",
      "HM-HU-401"
    ];
  }
  else if (a == "EI" && b == "5") {
    arr2 = [
      "Select Subject",
      "PC-EI501",
      "PC-EI502",
      "PC-EI503",
      "PE-EI501",
      "PE-EI502",
      "PE-EI503",
      "PE-EI504",
      "OE-EI501",
      "OE-EI502",
    ];
  }
  else if (a == "EI" && b == "6") {
    arr2 = [
      "Select Subject",
      "PC-EI601",
      "PC-EI602",
      "OE-EI601",
      "OE-EI602",
      "OE-EI603",
      "OE-EI604",
      "HM-HU-601",
      "MC-ES-601",
    ];
  }
  else if (a == "EI" && b == "7") {
    arr2 = [
      "Select Subject",
      "EI 701",
      "EI 702",
      "EI 703",
      "EI 704A",
      "EI 705A(CS)",
      "EI 705E(IT)",
    ];
  }
  else if (a == "EI" && b == "8") {
    arr2 = [
      "Select Subject",
      "HU 801A",
      "EC 801B",
      "EC 803C",
      "EC 802A",
      "EC 802B",
      "EC 802C",
    ];
  }

  var string2 = "";

  for (i = 0; i < arr2.length; i++) {
    string2 =
      string2 + "<option value=" + arr2[i] + ">" + arr2[i] + "</option>";
  }
  document.getElementById("output2").innerHTML = string2;
}
