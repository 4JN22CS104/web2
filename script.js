$(document).ready(function() {
    $("#submitBtn").click(function(event) {
        // Fetch values from the input fields
        const ownerName = $("#ownerName").val();
        const contactNumber = $("#contactNumber").val();
        const email = $("#email").val();
        const vehicleModel = $("#vehicleModel").val();
        const vehicleNumber = $("#vehicleNumber").val();
        const registrationDate = $("#registrationDate").val();
        const vehicleType = $("#vehicleType").val(); // Correct selector

        // Validate if all fields are filled
        if (!ownerName || !contactNumber || !email || !vehicleModel || !vehicleNumber || !registrationDate || !vehicleType) {
            alert("Please fill out all the fields!");
            event.preventDefault(); // Prevent form submission
        }
    });
});
