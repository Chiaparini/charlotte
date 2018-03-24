<script>
    import { Bar } from 'vue-chartjs'

    export default {
        extends: Bar,
        name: 'HotelGraph',
        props: {
            data: {
                type: Object,
                default: () => {}
            },
            options: {
                type: Object,
                default: () => {}
            }
        },
        mounted () {
            // console.log(this.data)
            this.renderChart(this.data, {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            scaleBeginAtZero: true
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        }
                    }]
                },
                tooltips: {
                    displayColors: false,
                    bodyFontFamily: 'Montserrat',
                    xPadding: 8,
                    yPadding: 8,
                    cornerRadius: 3,
                    callbacks: {
                        label: (tooltipItem, data) => {
                            let label = data.datasets[tooltipItem.datasetIndex].label || ''
                            if (label) {
                                label += ': '
                            }
                            label += Math.round(tooltipItem.yLabel * 100) / 100
                            return `$${label}`
                        },
                        title: () => ''
                    }
                }
            })
        }
    }
</script>