function formatDate(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");
    return year + "-" + month + "-" + day;
}

function getWeeksOfMonthObjects(date) {
    var weeks = [];
    var firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    var firstMonday = new Date(firstDayOfMonth);
    firstMonday.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay() + 1);

    for (var i = 0; i < 4; i++) {
        var monday = new Date(firstMonday);
        monday.setDate(firstMonday.getDate() + i * 7);
        var sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
        weeks.push({
            startDate: formatDate(monday),
            endDate: formatDate(sunday),
        });
    }

    return weeks;
}

export default getWeeksOfMonthObjects;
