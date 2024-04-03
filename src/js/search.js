document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.record-search');
    const tableRows = document.querySelectorAll('.records tbody tr');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();

        tableRows.forEach(function(row) {
            const customerName = row.querySelector('td:first-child').textContent.trim().toLowerCase();

            if (customerName.includes(searchTerm)) {
                row.style.display = ''; 
            } else {
                row.style.display = 'none'; 
            }
        });
    });
});