document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnSpinner = submitBtn.querySelector('.btn-spinner');
    const alertMessage = document.getElementById('alertMessage');

    // Toggle password visibility
    togglePasswordBtn.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        
        // Toggle icon visual feedback
        togglePasswordBtn.style.color = isPassword ? '#383cf1' : '#a0aab8';
    });

    // Form submission handling
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        // Reset alert state
        hideAlert();

        // Validation check
        if (!username || !password) {
            showAlert('Please fill in all fields.', 'error');
            return;
        }

        // Show loading state
        setLoading(true);

        // Simulate login API call
        setTimeout(() => {
            setLoading(false);
            showAlert('Logged in successfully! Redirecting...', 'success');
            
            // Optional clear form or redirect simulation
            setTimeout(() => {
                hideAlert();
            }, 3000);
        }, 1200);
    });

    function setLoading(isLoading) {
        if (isLoading) {
            submitBtn.disabled = true;
            btnText.classList.add('hidden');
            btnSpinner.classList.remove('hidden');
        } else {
            submitBtn.disabled = false;
            btnText.classList.remove('hidden');
            btnSpinner.classList.add('hidden');
        }
    }

    function showAlert(msg, type) {
        alertMessage.textContent = msg;
        alertMessage.className = `alert-message ${type}`;
    }

    function hideAlert() {
        alertMessage.className = 'alert-message hidden';
        alertMessage.textContent = '';
    }
});
