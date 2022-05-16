let knowledgeBlocks = document.querySelector(".knowledge__blocks");
knowledgeBlocks.addEventListener("click", (e) => {
  if (e.target.closest(".knowledge__header")) {
    openBlock(e.target.closest(".knowledge__header"));
  }
});

function openBlock(block) {
  let info = block.nextElementSibling;
  console.log(info);
}
