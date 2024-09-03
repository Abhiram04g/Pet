document.addEventListener("DOMContentLoaded", function () {
    const adoptionForm = document.getElementById('adoptionForm');  
    adoptionForm.addEventListener('submit', function (event) {
      event.preventDefault();
      
      const formData = new FormData(adoptionForm);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
      console.log('Form Data:', formDataObject);
      adoptionForm.reset();
      alert('Thank you for submitting the form!');
    });
  });