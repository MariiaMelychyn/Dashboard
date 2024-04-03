document.addEventListener("DOMContentLoaded", function() {
    const tableRows = document.querySelectorAll(".records table tbody tr");
    const itemsPerPage = 5;
    let currentPage = 1;
  
    function showPage(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = page * itemsPerPage;
      
      tableRows.forEach((row, index) => {
        if (index >= startIndex && index < endIndex) {
          row.style.display = "table-row";
        } else {
          row.style.display = "none";
        }
      });
    }
  
    function prevPage() {
      if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
      }
    }
  
    function nextPage() {
      const numPages = Math.ceil(tableRows.length / itemsPerPage);
      if (currentPage < numPages) {
        currentPage++;
        showPage(currentPage);
      }
    }
  
    function goToPage(page) {
      currentPage = page;
      showPage(currentPage);
    }
  
    function createPaginationButtons() {
      const numPages = Math.ceil(tableRows.length / itemsPerPage);
      const paginationContainer = document.querySelector(".pagination-container");
  
      paginationContainer.innerHTML = "";
  
      const prevButton = document.createElement("button");
      prevButton.textContent = "<";
      prevButton.addEventListener("click", prevPage);
      paginationContainer.appendChild(prevButton);
  
      for (let i = 1; i <= numPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.addEventListener("click", () => goToPage(i));
        paginationContainer.appendChild(pageButton);
      }
  
      const nextButton = document.createElement("button");
      nextButton.textContent = ">";
      nextButton.addEventListener("click", nextPage);
      paginationContainer.appendChild(nextButton);
    }
  
    createPaginationButtons();
  });
  