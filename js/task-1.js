function slugify(title) {
  return title
    .toLowerCase() // Перетворюємо весь рядок в нижній регістр
    .split(" ") // Розділяємо рядок на масив слів за пробілами
    .join("-"); // Об'єднуємо слова масиву в один рядок, використовуючи тире
}

// Код для перевірки коректності роботи функції
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
