document.getElementById("flooring").addEventListener("change", (e) => {
    const val = Number(e.target.value) * 150;
    document.getElementById("finishPrice").textContent = val.toLocaleString() + " ج.م";
});