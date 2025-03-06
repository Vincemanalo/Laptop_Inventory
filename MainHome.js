document.addEventListener("DOMContentLoaded", function () {
    // Add Modal Elements
    const openModalBtn = document.getElementById("open-modal");
    const closeModalBtn = document.getElementById("close-modal");
    const cancelModalBtn = document.getElementById("cancel-modal");
    const modalOverlay = document.querySelector(".popup-form");
    const fillupModal = document.querySelector(".fillup-form");
    const popupWrapper = document.querySelector(".popup-wrapper");

    // Edit Modal Elements
    const editModalOverlay = document.querySelector(".edit-popup-form");
    const editPopupWrapper = document.querySelector(".edit-popup-wrapper");
    const closeEditModalBtn = document.getElementById("close-edit-modal");
    const editFillupModal = document.querySelector(".edit-fillup-form");
    const cancelEditModalBtn = document.getElementById("cancel-edit-modal");


    const closeAddEmployeeModalBtn = document.getElementById("close-add-employe-modal");
    const cancelAddEmployeeModalBtn = document.getElementById("cancel-add-employee-modal");


    function openModal() {
        if (fillupModal && modalOverlay && popupWrapper) {
            fillupModal.style.display = "block";
            modalOverlay.style.display = "flex";
            popupWrapper.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    }

    function closeModal() {
        if (fillupModal && modalOverlay && popupWrapper) {
            fillupModal.style.display = "none";
            modalOverlay.style.display = "none";
            popupWrapper.style.display = "none";
            document.body.style.overflow = "";
        }
    }

    function openEditModal() {
        if (editFillupModal && editModalOverlay && editPopupWrapper) {
            editFillupModal.style.display = "block";
            editModalOverlay.style.display = "flex";
            editPopupWrapper.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    }

    function closeEditModal() {
        document.querySelector(".edit-popup-wrapper").style.display = "none";
        document.querySelector(".edit-popup-form").style.display = "none";
        document.body.style.overflow = "";
    }

    function closeAddEmployeeModal() {
        document.querySelector(".edit-popup-wrapper").style.display = "none";
        document.querySelector(".edit-popup-form").style.display = "none";
        document.body.style.overflow = "";
    }

    // Event Listeners for Open/Close Modals
    if (openModalBtn) openModalBtn.addEventListener("click", openModal);
    if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
    if (cancelModalBtn) cancelModalBtn.addEventListener("click", closeModal);

    // Event Delegation for Multiple Edit Buttons
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("edit-btn")) {
            openEditModal();
        }
    });

    if (closeEditModalBtn) closeEditModalBtn.addEventListener("click", closeEditModal);
    if (cancelEditModalBtn) cancelEditModalBtn.addEventListener("click", closeEditModal);

    if (closeAddEmployeeModalBtn) closeEditModalBtn.addEventListener("click", closeAddEmployeeModal);
    if (cancelAddEmployeeModalBtn) cancelEditModalBtn.addEventListener("click", closeAddEmployeeModal);

    if (editModalOverlay) {
        editModalOverlay.addEventListener("click", function (event) {
            if (event.target === editModalOverlay) closeEditModal();
        });
    }

    // Edit Row Function (Triggers Edit Modal)
    window.editRow = function (button) {
        // Use the updated IDs with 'edit-' prefix
        let deviceField = document.getElementById("edit-device");
        let serialField = document.getElementById("edit-serial");
        let descriptionField = document.getElementById("edit-description");
        let purchaseDateField = document.getElementById("edit-purchase-date");
        let locationField = document.getElementById("edit-location");
    
        // Set values from data attributes
        if (deviceField) deviceField.value = button.getAttribute("data-device") || "";
        if (serialField) serialField.value = button.getAttribute("data-serial") || "";
        if (descriptionField) descriptionField.value = button.getAttribute("data-description") || "";
        if (purchaseDateField) purchaseDateField.value = button.getAttribute("data-purchase") || "";
        if (locationField) locationField.value = button.getAttribute("data-location") || "";
    
        openEditModal(); // Open the modal after populating data
    };   
});

document.addEventListener("DOMContentLoaded", function () {
    // Add Employee Modal Elements
    const addEmployeeModal = document.getElementById("add-employee-popup-wrapper");
    const closeAddEmployeeModalBtn = document.getElementById("close-add-employee-modal");
    const cancelAddEmployeeModalBtn = document.getElementById("cancel-add-employee-modal");
    const assignedDropdown = document.getElementById("assigned");

    function openAddEmployeeModal() {
        if (addEmployeeModal) {
            console.log("Opening Add Employee Modal...");
            addEmployeeModal.style.display = "flex"; // Ensure this is set
            document.body.style.overflow = "hidden";
        } else {
            console.error("Add Employee modal not found in DOM!");
        }
    }

    function closeAddEmployeeModal() {
        if (addEmployeeModal) {
            console.log("Closing Add Employee Modal...");
            addEmployeeModal.style.display = "none";
            document.body.style.overflow = "";
        }
    }

    function checkForAddEmployee() {
        console.log("Dropdown changed: ", assignedDropdown.value);
        if (assignedDropdown.value === "add-employee") {
            openAddEmployeeModal();
            assignedDropdown.value = ""; // Reset selection after opening modal
        }
    }

    function checkForAddEmployeeEdit() {
        const dropdown = document.getElementById("assigned-edit");
        if (dropdown.value === "add-employee") {
            openAddEmployeeModal();
            dropdown.value = "";
        }
    }

    // Event Listeners
    if (closeAddEmployeeModalBtn) closeAddEmployeeModalBtn.addEventListener("click", closeAddEmployeeModal);
    if (cancelAddEmployeeModalBtn) cancelAddEmployeeModalBtn.addEventListener("click", closeAddEmployeeModal);

    // Close when clicking outside the modal
    if (addEmployeeModal) {
        addEmployeeModal.addEventListener("click", function (event) {
            if (event.target === addEmployeeModal) {
                closeAddEmployeeModal();
            }
        });
    } else {
        console.error("Add Employee modal wrapper not found in DOM!");
    }

    // Attach change event to the dropdown
    if (assignedDropdown) {
        assignedDropdown.addEventListener("change", checkForAddEmployee);
    } else {
        console.error("Assigned dropdown not found in DOM!");
    }

    document.getElementById("assigned-edit")?.addEventListener("change", checkForAddEmployeeEdit);
});
