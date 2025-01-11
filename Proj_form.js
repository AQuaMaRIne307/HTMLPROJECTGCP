document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.target);
    const formValues = {};
    
    formData.forEach((value, key) => {
        formValues[key] = value;
    });
    
    // For now, just log the form data to console
    console.log(formValues);
    
    // Show confirmation alert
    alert("Registration Successful!");
    
    // Reset the form
    e.target.reset();
});
