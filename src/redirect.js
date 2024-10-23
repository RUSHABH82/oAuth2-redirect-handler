const loadingOverlay = document.createElement("div");
loadingOverlay.className = "loading-overlay";

const baseUrl = getContextUrl();
if (window.location.pathname === "/redirect") {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set("redirected_from", baseUrl);
  const redirectUrl = "http://localhost:9000/redirect?" + urlParams.toString();


 
  loadingOverlay.innerHTML = `
        <div class="spinner"></div>
        <p style="margin-top: 20px;">Redirecting to... ${redirectUrl}</p>
    `;
  document.body.appendChild(loadingOverlay);
  loadingOverlay.classList.add("active");

  setTimeout(() => {
    window.location.replace(redirectUrl);
  }, 200);
} else {
  document.querySelector("#app").innerHTML = `
        <div class="home-content">
            <h1>Welcome to the Home Page</h1>
            <p>Please visit <a href="/redirect">this link</a> to redirect.</p>
        </div>
    `;
}

function getContextUrl() {
  return (
    window.location.protocol +
    "//" +
    (window.location.host || window.location.hostname)
  );
}
