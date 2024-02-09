$(document).ready(function() {
    // Sign Up Form Toggle
    $("#signupButton").click(function() {
        $("#signupForm").toggle();
    });

    // Login Form Submission
    $("#loginForm").submit(function(e) {
        e.preventDefault();
        // Implement login logic
        var username = $("#username").val();
        var password = $("#password").val();
        // Example: Validation and AJAX call for login
        if (username && password) {
            // AJAX call to verify credentials
            // If successful, redirect to booking.html
            window.location.href = "booking.html";
        } else {
            $("#message").text("Please enter username and password.");
        }
    });

    // Sign Up Form Submission
    $("#newUserForm").submit(function(e) {
        e.preventDefault();
        // Implement signup logic
        var newUsername = $("#newUsername").val();
        var newPassword = $("#newPassword").val();
        // Example: Validation and AJAX call for signup
        if (newUsername && newPassword) {
            // AJAX call to register new user
            // If successful, redirect to booking.html
            window.location.href = "booking.html";
        } else {
            $("#message").text("Please enter username and password.");
        }
    });
});
