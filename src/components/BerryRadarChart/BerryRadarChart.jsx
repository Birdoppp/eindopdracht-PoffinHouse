import './BerryRadarChart.css'
import React, {useEffect, useState} from "react";
import Chart from "chart.js/auto";
import axios from "axios";

function BerryRadarChart({selectedBerry}) {
    const [chartInstance, setChartInstance] = useState(null); // State to hold the chart instance
    const [flavors, setFlavors] = useState([]); // flavor of the selected berry

    useEffect(() => {
        const fetchBerryFlavors = async () => {
            if (!selectedBerry || !selectedBerry.url) {
                return;
            }
            try {
                const response = await axios.get(selectedBerry.url);
                setFlavors(response.data.flavors);
            } catch (error) {
                console.error(`Error fetching flavors for ${selectedBerry.name}:`, error);
            }
        };


        void fetchBerryFlavors();
    }, [selectedBerry]);

    // Sets flavors to trigger empty radar chart
    useEffect(() => {
        setFlavors([0,0,0,0,0])
    }, []);


    useEffect(() => {
        const createRadarChart = () => {
            if (chartInstance) {
                // Destroy the existing chart instance
                chartInstance.destroy();
            }

            const flavorsData = flavors.map((flavor) => flavor.potency);

            console.log(selectedBerry.name + flavorsData)
            const ctx = document.getElementById(`${selectedBerry.name}-chart`);
            const newChartInstance = new Chart(ctx, {
                type: "radar",
                data: {
                    labels: ["Spicy", "Dry", "Sweet", "Bitter", "Sour"],
                    datasets: [
                        {
                            label: selectedBerry.name,
                            data: flavorsData  ,
                            backgroundColor: "rgba(255, 99, 132, 0.2)",
                            borderColor: "rgba(255, 99, 132, 1)",
                            borderWidth: 2,
                            style: "fill"
                        },
                    ],
                },
                options: {
                    scales: {

                        r: {
                            min: -10,
                            max: 40,
                            ticks: {
                                stepSize: 10,
                            },
                        },
                    },
                    // plugins: {
                    //     tooltip: {
                    //         backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    //         titleColor: '#ffffff',
                    //         bodyColor: '#ffffff',
                    //         callbacks: {
                    //             labelTextColor: function(context) {
                    //                 return 'rgb(139, 0, 0)';
                    //             }
                    //         }
                    //     }
                    // }
                },
            });

            // Store the new chart instance
            setChartInstance(newChartInstance);
        };

        if (flavors.length > 0) {
            createRadarChart();
        }

        // Cleanup function to destroy the chart when component unmounts or when selected berry changes
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [flavors]);

    return <canvas className="radar-chart" id={`${selectedBerry.name}-chart`}/>;
}

export default BerryRadarChart;
