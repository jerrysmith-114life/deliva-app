let today = new Date();
let currentDay = new Date();
let currentWeek = new Date();
let currentMonth = new Date();

function showAnalysis(type) {
    $(".analysis").hide().removeClass("slide-in");
    $(`#${type}-analysis`).fadeIn().addClass("slide-in");

    if (type === "daily") updateDaily();
    else if (type === "weekly") updateWeekly();
    else if (type === "monthly") updateMonthly();
}

function getRandomRevenue(orders) {
    let revenue = orders * (Math.random() * (1500 - 500) + 500); // Revenue per order: ₦500 - ₦1,500
    return formatNumber(Math.floor(revenue));
}

function getRandomOrders() {
    return formatNumber(Math.floor(Math.random() * 50) + 100); // 100 - 1,500 orders per day
}

// Function to format numbers with commas
function formatNumber(num) {
    return num.toLocaleString();
}

function updateDaily() {
    let orders = getRandomOrders();
    let revenue = getRandomRevenue(parseInt(orders.replace(/,/g, '')));

    $("#daily-date").text(currentDay.toDateString());
    $("#daily-orders").text(orders);
    $("#daily-revenue").text(`${revenue}`); // Add Naira symbol
    $("#next-day").prop("disabled", currentDay >= today);
}

function changeDay(direction) {
    currentDay.setDate(currentDay.getDate() + direction);
    updateDaily();
}

function updateWeekly() {
    let start = new Date(currentWeek);
    start.setDate(start.getDate() - start.getDay() + 1);
    let end = new Date(start);
    end.setDate(end.getDate() + 6);

    $("#week-range").text(`${start.toDateString()} - ${end.toDateString()}`);

    let totalRevenue = 0, weekData = "";
    for (let i = 0; i < 7; i++) {
        let day = new Date(start);
        day.setDate(day.getDate() + i);
        let orders = getRandomOrders();
        let revenue = getRandomRevenue(parseInt(orders.replace(/,/g, '')));
        totalRevenue += parseInt(revenue.replace(/,/g, ''));
        weekData += `<p>${day.toDateString()}: Orders ${orders}, Revenue: ₦ ${revenue}</p>`;
    }

    $("#weekly-data").html(weekData);
    $("#weekly-revenue").text(`${formatNumber(totalRevenue)}`); // Add Naira symbol
    $("#next-week").prop("disabled", start >= today);
}

function changeWeek(direction) {
    currentWeek.setDate(currentWeek.getDate() + direction * 7);
    updateWeekly();
}

function updateMonthly() {
    let year = currentMonth.getFullYear();
    let month = currentMonth.getMonth();
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    $("#monthly-title").text(`${currentMonth.toLocaleString('default', { month: 'long' })} ${year}`);

    let totalRevenue = 0, monthData = "";
    for (let i = 1; i <= daysInMonth; i++) {
        let orders = getRandomOrders();
        let revenue = getRandomRevenue(parseInt(orders.replace(/,/g, '')));
        totalRevenue += parseInt(revenue.replace(/,/g, ''));
        monthData += `<p>Day ${i}: Orders ${orders}, Revenue: ₦ ${revenue}</p>`;
    }

    $("#monthly-data").html(monthData);
    $("#monthly-revenue").text(`${formatNumber(totalRevenue)}`); // Add Naira symbol
    $("#next-month").prop("disabled", month === today.getMonth() && year === today.getFullYear());
}

function changeMonth(direction) {
    currentMonth.setMonth(currentMonth.getMonth() + direction);
    updateMonthly();
}

showAnalysis('daily');
