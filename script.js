function loadPhase(folder) {

  const content = document.getElementById("content");

  let files = {
    "Phase1-recon": [
      { name: "Recon Notes", path: "Phase1-recon/README.md" }
    ],

    "PHASE2-scanning": [
      { name: "DIRB Results", path: "PHASE2-scanning/dirb_results.txt" },
      { name: "Gobuster Results", path: "PHASE2-scanning/gobuster_results.txt" },
      { name: "Nikto Scan", path: "PHASE2-scanning/nikto_scan.txt" },
      { name: "Service Versions", path: "PHASE2-scanning/service_versions.txt" },
      { name: "SMB Enumeration", path: "PHASE2-scanning/smb_enum.txt" }
    ],

    "PHASE3-vuln-assesment": [
      { name: "Nessus Vulnerability Report", path: "PHASE3-vuln-assesment/nessus_vulnerability_report.html" }
    ],

    "PHASE4-exploitation": [
      { name: "Exploit Screenshot 1", path: "PHASE4-exploitation/Screenshot_2026-02-13_02-20-36.png" },
      { name: "Exploit Screenshot 2", path: "PHASE4-exploitation/Screenshot_2026-02-13_02-23-07.png" },
      { name: "Exploit Screenshot 3", path: "PHASE4-exploitation/Screenshot_2026-02-13_02-39-06.png" },
      { name: "Exploit Screenshot 4", path: "PHASE4-exploitation/Screenshot_2026-02-13_02-48-12.png" },
      { name: "Exploit Screenshot 5", path: "PHASE4-exploitation/Screenshot_2026-02-17_02-20-40.png" },
      { name: "Exploit Screenshot 6", path: "PHASE4-exploitation/Screenshot_2026-02-17_02-21-23.png" }
    ],

    "PHASE5-reporting": [
      { name: "ZAP Scanning Report", path: "PHASE5-reporting/ZAP by Checkmarx Scanning Report.html" },
      { name: "Full VAPT Report", path: "VAPT_Report_Metasploitable2.html" }
    ]
  };

  let html = `<h1>${folder}</h1>`;

  files[folder].forEach(file => {

    if (file.path.endsWith(".png")) {
      html += `
        <div class="card">
          <h3>${file.name}</h3>
          <img src="${file.path}">
        </div>
      `;
    } else {
      html += `
        <div class="card">
          <h3>${file.name}</h3>
          <a href="${file.path}" target="_blank">Open File</a>
        </div>
      `;
    }

  });

  content.innerHTML = html;
}
