document.addEventListener('DOMContentLoaded', function() {
    const contractInput = document.getElementById('contractNumber');
    const ingresarBtn = document.getElementById('ingresarBtn');
    const recaptchaBox = document.getElementById('recaptchaBox');
    
    let isCaptchaVerified = false;
    
    contractInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '');
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
    });
    
    recaptchaBox.addEventListener('click', function() {
        if (isCaptchaVerified) return;
        
        this.classList.add('loading');
        
        setTimeout(() => {
            this.classList.remove('loading');
            this.classList.add('verified');
            isCaptchaVerified = true;
        }, 1000);
    });
    
    ingresarBtn.addEventListener('click', function() {
        if (contractInput.value.length !== 10) {
            contractInput.style.borderColor = '#ff6b6b';
            contractInput.focus();
            
            setTimeout(() => {
                contractInput.style.borderColor = '#e0e0e0';
            }, 2000);
            
            return;
        }
        
        if (!isCaptchaVerified) {
            recaptchaBox.style.borderColor = '#ff6b6b';
            recaptchaBox.style.backgroundColor = '#fff8f8';
            
            setTimeout(() => {
                recaptchaBox.style.borderColor = '#e0e0e0';
                recaptchaBox.style.backgroundColor = '#f9f9f9';
            }, 2000);
            
            return;
        }
        
        this.classList.add('loading');
        
        setTimeout(() => {
            this.classList.remove('loading');
            window.location.href = 'payment.html';
        }, 1500);
    });
});