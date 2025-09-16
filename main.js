const btn = document.querySelector('.theme-toggle');
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      btn.textContent = document.body.classList.contains('dark') ? 'Светлая тема' : 'Тёмная тема';
    });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => observer.observe(el));

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name.length < 2) {
    msg.textContent = "Имя должно быть не короче 2 символов!";
    msg.style.color = "red";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    msg.textContent = "Введите корректный email!";
    msg.style.color = "red";
    return;
  }

  if (message.length < 10) {
    msg.textContent = "Сообщение должно быть не короче 10 символов!";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Форма успешно отправлена!";
  msg.style.color = "green";
  form.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(scroll) {
    scroll.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const offset = 100;

    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  });
});

