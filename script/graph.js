const prices = [100, 104, 102, 108, 111, 107, 115, 119, 116, 123, 129];
const ctx = document.getElementById("marketChart").getContext("2d");

const greenGradient = ctx.createLinearGradient(0, 0, 0, 400);
greenGradient.addColorStop(0, "rgba(34,197,94,0.35)");
greenGradient.addColorStop(1, "rgba(34,197,94,0)");

const redGradient = ctx.createLinearGradient(0, 0, 0, 400);
redGradient.addColorStop(0, "rgba(239,68,68,0.35)");
redGradient.addColorStop(1, "rgba(239,68,68,0)");

new Chart(ctx, {
    type: "line",

    data: {
        labels: prices.map((_, i) => i),

        datasets: [{
            data: prices,
            borderWidth: 3,
            tension: 0, // linea spezzata
            pointRadius: 0,
            fill: true,

            segment: {
                borderColor: ctx => {
                    const a = ctx.p0.parsed.y;
                    const b = ctx.p1.parsed.y;
                    return b >= a ? "#22c55e" : "#ef4444";
                },

                backgroundColor: ctx => {
                    const a = ctx.p0.parsed.y;
                    const b = ctx.p1.parsed.y;
                    return b >= a ? greenGradient : redGradient;
                }
            }

        }]
    },

    options: {

        plugins: {
            legend: { display: false }
        },

        scales: {
            x: { display: false },

            y: {
                grid: {
                    color: "rgba(255,255,255,0.05)"
                },
                ticks: {
                    color: "#aaa"
                }
            }

        }

    }

});