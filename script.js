const rates = {
    "USD": 1,
    "EUR": 0.85,
    "GBP": 0.75
};

function updateTotalSales() {
    const rows = [...document.querySelectorAll('#product-sales tbody tr')];
    const currency = document.querySelector('#currency-picker').value;
    const totalSalesElement = document.querySelector('#total-sales');
    const totalCurrencyElement = document.querySelector('#total-currency');
    let total = 0;

    rows.forEach(row => {
        if (row.style.display !== 'none') {
            total += parseFloat(row.cells[1].textContent);
        }
    });

    totalSalesElement.textContent = (total * rates[currency]).toFixed(2);
    totalCurrencyElement.textContent = currency;
}

function filterByRegion() {
    const selectedRegion = document.querySelector('#region-filter').value;
    const rows = [...document.querySelectorAll('#product-sales tbody tr')];

    rows.forEach(row => {
        if (selectedRegion === 'all' || row.dataset.region === selectedRegion) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
    updateTotalSales();
}

document.querySelector('#currency-picker').addEventListener('change', updateTotalSales);
document.querySelector('#region-filter').addEventListener('change', filterByRegion);

updateTotalSales();