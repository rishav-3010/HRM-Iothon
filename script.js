
function updateIoTData() {
   
    document.getElementById('oxygen-status').innerText = "Active";
    document.getElementById('heart-monitor-status').innerText = "Normal";
    document.getElementById('ventilator-status').innerText = "Operational";

    // Simulated patient vitals
    document.getElementById('room-101-heart').innerText = `${Math.floor(Math.random() * (120 - 60) + 60)} bpm`;
    document.getElementById('room-102-bp').innerText = `${Math.floor(Math.random() * (140 - 90) + 90)}/${Math.floor(Math.random() * (90 - 60) + 60)} mmHg`;
    document.getElementById('room-103-oxygen').innerText = `${Math.floor(Math.random() * (100 - 90) + 90)}%`;
}

// Update data every 3 seconds to simulate real-time updates
setInterval(updateIoTData, 3000);
