// Render QA cards and wire interactions
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("qa-grid");
  const filter = document.getElementById("filter");

  function render(list) {
    grid.innerHTML = "";
    list.forEach((item) => {
      const card = document.createElement("article");
      card.className =
        "bg-white p-4 rounded shadow-sm hover:shadow-md transition";

      card.innerHTML = `
				<div class="flex items-start justify-between">
					<h2 class="text-sm font-medium">${item.id}. ${item.question}</h2>
				</div>
				<div class="mt-3 flex gap-2">
					<button class="show-fn flex-1 bg-indigo-600 text-white px-3 py-2 rounded">Show Function</button>
					<button class="run-fn flex-1 bg-emerald-600 text-white px-3 py-2 rounded">Show Output</button>
				</div>
				<pre class="mt-3 p-3 bg-slate-50 text-xs rounded overflow-auto code-block hidden"></pre>
				<div class="mt-2 text-sm output-block text-slate-700"></div>
			`;

      // Attach handlers
      const showBtn = card.querySelector(".show-fn");
      const runBtn = card.querySelector(".run-fn");
      const codeBlock = card.querySelector(".code-block");
      const outputBlock = card.querySelector(".output-block");

      showBtn.addEventListener("click", () => {
        codeBlock.textContent = item.code;
        codeBlock.classList.toggle("hidden");
      });

      runBtn.addEventListener("click", () => {
        try {
          const result = item.run();
          outputBlock.textContent =
            typeof result === "object"
              ? JSON.stringify(result, null, 2)
              : String(result);
          // reveal output if code block hidden
          if (codeBlock.classList.contains("hidden")) {
            outputBlock.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }
        } catch (e) {
          outputBlock.textContent = "Error: " + e.message;
        }
      });

      grid.appendChild(card);
    });
  }

  // initial render
  render(window.qaList || []);

  // filter
  filter.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    const filtered = (window.qaList || []).filter((it) =>
      (it.question + " " + it.code).toLowerCase().includes(q),
    );
    render(filtered);
  });
});
