$(document).ready(function () {
    $.ajax({
        type: 'GET',
        dataType: "json",
        contentType: "application/json",
        url: '/api/fee/AmountPayable',
        success: function (result) {
            google.charts.load('current', {
                'packages': ['corechart']
            });
            google.charts.setOnLoadCallback(function () {
                drawChart(result);
            });
        }
    });
    function drawChart(result) {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'FirstName');
        data.addColumn('number', 'Paid');
        data.addColumn('number', 'Unpaid');
        var dataArray = [];
        $.each(result, function (i, obj) {
            dataArray.push([obj.FirstName, obj.Paid, obj.Unpaid]);
        });
        data.addRows(dataArray);


        // Line Chart
        var linechart_options = {
            title: 'Fee Payable'
        };
        var linechart = new google.visualization.LineChart(document
            .getElementById('emp_line'));
        linechart.draw(data, linechart_options);



        // Column Chart
        var columnchart_options = {
            title: 'Fee Payable'
        };
        var columnchart = new google.visualization.ColumnChart(document
            .getElementById('emp_column'));
        columnchart.draw(data, columnchart_options);



        // Bar Chart
        var linechart_options = {
            title: 'Fee Payable'
        };
        var linechart = new google.visualization.BarChart(document
            .getElementById('emp_bar'));
        linechart.draw(data, linechart_options);
    }
});
