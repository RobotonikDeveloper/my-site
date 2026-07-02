const images = [
    'img/1csfj3odrbgsb7mx1hyn6wb1x1q13d0n.jpg',
    'img/63d38814a8f69232256323.jpg',
    'img/TfNZkTLlji4.jpg',
    'img/i.webp',
    'img/i (1).webp'
];

const messages = [
    'Руководитель музея',
    'Логотип СПК',
    'Гости музея',
    'Выставка',
    'Гости музея'
]

// Находим элементы на странице
const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageCounter = document.getElementById('imageCounter');
const msgText = document.getElementById('msgText');

// Текущий индекс изображения (начинаем с 0)
let currentIndex = 0;

// Функция обновления изображения
function updateImage(index) {
    sliderImage.src = images[index];
    msgText.textContent = messages[index];
    imageCounter.textContent = `${index + 1} / ${images.length}`;
}

// Обработчики событий
nextBtn.addEventListener('click', function() {
    // Переход к следующему изображению (с зацикливанием)
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
});

prevBtn.addEventListener('click', function() {
    // Переход к предыдущему изображению (с зацикливанием)
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
});

// Инициализация (показываем первое изображение)
updateImage(currentIndex);
