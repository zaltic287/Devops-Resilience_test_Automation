  const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),

  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),

  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => {
  home.classList.remove("show");
  window.location.reload();
});


function submitForm() {
  // Récupérer les valeurs du formulaire
  var email = document.getElementById("email").value;
  var fullName = document.getElementById("fullName").value;
  var message = document.getElementById("message").value;

  
  // Afficher le message de soumission dans le formulaire sans le cacher
  var formSection = document.querySelector(".message_form");
  formSection.innerHTML = `
    <h2>Merci pour votre soumission !</h2>
    <div id="submittedData">
      <h3>Informations soumises :</h3>
      <p>Email: ${email}</p>
      <p>Nom complet: ${fullName}</p>
      <p>Message: ${message}</p>
    </div>
  `;
}
