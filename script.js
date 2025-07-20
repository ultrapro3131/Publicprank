const video = document.getElementById('video');
const statusText = document.getElementById('status');

navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
    statusText.textContent = 'Şəkil çəkilir... 📸';
    setTimeout(() => {
      statusText.textContent = 'Şəkil çəkildi və göndərildi ✅';
    }, 4000);
  })
  .catch((err) => {
    statusText.textContent = 'Kameraya giriş mümkün olmadı ❌';
  });