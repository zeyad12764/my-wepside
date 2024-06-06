document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');

    document.getElementById('add-image').addEventListener('click', () => {
        const img = document.createElement('img');
        img.src = 'path/to/your/image.jpg'; // قم بتحديد المسار الصحيح لصورتك
        document.getElementById('image-grid').appendChild(img);
    });

    document.getElementById('open-gallery').addEventListener('click', () => {
        alert('Opening gallery...');
    });

    // Add more JavaScript for other functionalities as needed

    document.getElementById('add-image').addEventListener('click', function() {
        document.getElementById('image-input').click();
    });
    
    document.getElementById('image-input').addEventListener('change', function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onload = function(e) {
            const imageSrc = e.target.result;
            const imageElement = document.createElement('img');
            imageElement.src = imageSrc;
            imageElement.classList.add('uploaded-image');
            document.getElementById('image-grid').appendChild(imageElement);
function deleteImage() {
    var selectedImageContainer = document.getElementById('selectedImageContainer');
    while (selectedImageContainer.firstChild) {
        selectedImageContainer.removeChild(selectedImageContainer.firstChild);
    }
}
document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault(); // لمنع تحميل الصفحة
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // يمكنك تنفيذ عملية التحقق هنا

    // بعد التحقق، إعادة توجيه المستخدم إلى صفحة المساعد الافتراضي
    window.location.href = "assistant.html";
};


        };
    
        reader.readAsDataURL(file);
    });
    


});
