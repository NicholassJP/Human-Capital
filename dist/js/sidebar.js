
  $(document).ready(function () {
    $("#sidebarRemove").on("click", function () {
      $("#sidebar").removeClass("active");
      $("#section-header").removeClass("active");
      $("#section-body").removeClass("active");
    });
  });

  var lala = $("#sidebar-loop");
  var judulSide = [
    "Employee Profile",
    "Attendance Online",
    "Over Time",
    "Time Management",
    "Medical Claim",
    "Employee Message",
    "Performance",
    "KPI Operation",
    "KK-SK Online",
    "Termination",
    "Pekerja Harian Lepas",
    "Internal Career System",
    "Man Power Planning",
    "IKT Online",
    "Champs Check",
    "Prakerin",
    "Approval SO Karyawan",
    "Update Data HC",
    "Employee Relation",
    "Talent Management",
    "Performance Dashboard",
    "SO Karyawan Warehouse",
    "Perjanjian Kerja",
  ];
  var linkSide = [
    "/",
    "attendance_online.html",
    "over_time.html",
    "time_management.html",
    "medial_claim.html",
    "employee_message.html",
    "performance.html",
    "kpi_operation.html",
    "kk_sk_online.html",
    "termination.html",
    "pekerja_harian_lepas.html",
    "internal_career_system.html",
    "man_power_planning.html",
    "ikt_online.html",
    "champs_check.html",
    "prakerin.html",
    "approval_so_karyawan.html",
    "update_data_hc.html",
    "employee_relation.html",
    "talent_management.html",
    "performance_dashboard.html",
    "so_karyawan_warehouse.html",
    "perjanjian_kerja.html",
  ];

  for (var i = 0; i < judulSide.length; i++) {
    lala.append(
      '<div class="col-md-12 col-6 overflow-wrap-any"> <li class="text-center pb-1"> <a class="pb-2 pt-2" href="' +
        linkSide[i] +
        '"> <img src="/dist/img/sidebar/' +
        judulSide[i] +
        '.png" /> <p>' +
        judulSide[i] +
        "</p> </a> </li> </div>"
    );
  }
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a").forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });