window.addEventListener("load", createChart);
window.addEventListener("resize", createChart);

function createChart(e) {
    
    const days = document.querySelectorAll(".chart-values li")
    const tasks = document.querySelectorAll(".chart-bars li")

    const dayArray = [...days]

    tasks.forEach(el => {

        const duration = el.dataset.duration.split("-")

        const startDay = duration[0]
        const endDay = duration[1]

        let left = 0;
        let width = 0;

        if (startDay.endsWith("1/2")) {
            const filteredArray = dayArray.filter(day => day.textContent == startDay.slice(0, -1));
            const left = filteredArray[0].offsetLeft + filteredArray[0].offsetwidth / 2;
        } else {
            const filteredArray = dayArray.filter(day => day.textContent == startDay);
            const left = filteredArray[0].offsetLeft;
        }

        if (endDay.endsWith("1/2")) {
            const filteredArray = dayArray.filter(day => day.textContent == endDay.slice(0, -1));
            const left = filteredArray[0].offsetLeft + filteredArray[0].offsetwidth / 2;
        } else {
            const filteredArray = dayArray.filter(day => day,textContent == endDay);
            const width = filteredArray[0].offsetLeft + filteredArray[0].offsetwidth - left;
        }

    })
}
