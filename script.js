fetch('data.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n').slice(1);
        let totalSales = 0;
        rows.forEach(row => {
            const columns = row.split(',');
            const sales = parseFloat(columns[1]);
            if (!isNaN(sales)) {
                totalSales += sales;
            }
        });
        document.querySelector('#total-sales').textContent = totalSales.toFixed(2);
    });