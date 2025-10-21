document.getElementById("generateRanges").addEventListener("click", () => {
  const count = parseInt(document.getElementById("rangeCount").value);
  const container = document.getElementById("ranges-container");
  container.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    const div = document.createElement("div");
    div.className = "range-group";
    div.innerHTML = `
      <label>Intervalo ${i}:</label>
      <input type="number" min="1" placeholder="Página inicial" class="startPage" />
      <input type="number" min="1" placeholder="Página final" class="endPage" />
    `;
    container.appendChild(div);
  }
});

document.getElementById("submitBtn").addEventListener("click", () => {
  alert("Em breve: envio para o backend");
});
