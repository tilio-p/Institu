document.addEventListener("DOMContentLoaded", () => {
  const circle = document.querySelector(".circle");
  const titre1 = document.getElementById("title1");
  const titre2 = document.getElementById("title2");
  const text = document.getElementById("text");
  let step = 0;

  circle.addEventListener("animationiteration", () => {
    step = (step + 1) % 4;

    switch (step) {
      case 0: // Retour 2 terminé → on recommence : Jaune pour Aller 1
        circle.style.background = "#fd0"; // Jaune
        titre1.textContent = "Envie de";
        titre2.textContent = "Culture ?";
        text.textContent = "Lu 17.03 - Di 25.05";
        break;
      case 1: // Aller 1 terminé → Retour 1
        circle.style.background = "#25FFA4"; // Vert
        break;
      case 2: // Retour 1 terminé → Aller 2
        titre1.textContent = "Lust auf";
        titre2.textContent = "Kultur ?";
        text.textContent = "Mo 17.03 - Do 25.05";
        circle.style.background = "#00B2FF"; // Bleu
        break;
      case 3: // Aller 2 terminé → Retour 2
        circle.style.background = "#FF9DD6"; // Rose
        break;
    }
  });
});
