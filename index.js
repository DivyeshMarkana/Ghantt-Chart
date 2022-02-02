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

    })
}
