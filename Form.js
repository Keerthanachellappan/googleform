document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('signupForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        form.classList.remove('was-validated');
     
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        } else {
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                document.getElementById('confirmPassword').setCustomValidity("Passwords do not match");
                document.getElementById('confirmPassword').classList.add('is-invalid');
            } else {
                document.getElementById('confirmPassword').setCustomValidity("");
                
                alert('Form submitted successfully!');
             }
        }
    }, false);
});
