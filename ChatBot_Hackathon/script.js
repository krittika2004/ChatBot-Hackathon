// Function to handle scanning the image
function scanImage() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];
  
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
  
      // Make API request using Axios
      axios.post('YOUR_API_URL', formData)
        .then(response => {
          const resultContainer = document.getElementById('resultContainer');
          resultContainer.innerText = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  
  // Add event listener to the scan button
  const scanButton = document.getElementById('scanButton');
  scanButton.addEventListener('click', scanImage);
  