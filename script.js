const name = document.getElementById('userName');
const email = document.getElementById('userEmail');
const form = document.getElementById('form');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');

/**
 * Update name and email of modal
 * @param name
 * @param email
 */
function updateModal(name, email) {
    const modalNameField = document.querySelector('.modal-user-name');
    const modalEmailField = document.querySelector('.modal-user-email');

    modalNameField.innerText = name;
    modalEmailField.innerText = email;
} 

/**
 * This function validates a form
 * @param formElements the form object
 * @returns {boolean}
 */
function validateForm(form) {
    const formFields = form.elements;
    const userName = formFields["userName"].value;
    const userEmail = formFields["userEmail"].value;
    let valid = true;
    let errors = "";

    // Validate the userName input field
    if (!userName.length > 2) {
        alert("Username is too short");
        valid = false;
    }

    // Validate the userEmail input field
    if (!(userEmail.length > 7) || !(userEmail.includes("@", "."))) {
        alert("Invalid email entered");
        valid = false;
    };

    // Validate checkbox field
    const checkbox = formFields["termsAndConditions"].checked;
    if (!(checkbox)) {
        alert("You must accept the terms and conditions to join.");
        valid = false;
    };

    if (valid) {
        updateModal(userName, userEmail);
    }
    
    return valid;
}

// Validate our form when the user submits it
form.addEventListener('submit', (e) => {
    // Stop default browser submit actions
    e.preventDefault();

    // Now we need to validate the form
    formValid = validateForm(form);

    // We can show the modal if the form was validated
    if (formValid === true) {
        modal.classList.add("active");
        overlay.classList.add("active");
    }
});

// Close modal button functionality
closeBtn.addEventListener('click', function(e) {
   e.preventDefault();
    modal.classList.remove("active");
    overlay.classList.remove("active");
});