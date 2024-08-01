document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const codeBlock = button.previousElementSibling.textContent;
      navigator.clipboard.writeText(codeBlock).then(() => {
        alert("Code copied to clipboard!");
      });
    });
  });
});
