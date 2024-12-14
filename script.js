$(document).ready(function() {
    $("#submitBtn").click(function(event) {
        const ownerName = $("#ownerName").val();
        const vehicleModel = $("#contactNumber").val();
        const vehicleModel = $("#email").val();
        const vehicleNumber = $("#vehicleModel").val();
        const vehicleNumber = $("#vehicleNumber").val();
        const registrationDate = $("#registrationDate").val();
        const vehicleType = $("#vehicleType").val();

        if (!ownerName || !vehicleModel || !vehicleNumber || !registrationDate || !vehicleType) {
            alert("Please fill out this fields!");
            event.preventDefault();
        }
    });
});
