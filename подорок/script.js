// Загружаем данные и перенаправляем, если имени нет
(function(){
  // проверяем, что пользователь прошёл предыдущие шаги
  var name = localStorage.getItem('guestName') || '';
  if(!name) { location.href = 'index.html'; return; }

  // выставляем ровно те тексты, которые попросили
  var greetingEl = document.getElementById('greeting');
  if (greetingEl) greetingEl.textContent = 'я тебя люблю';

  var messageEl = document.getElementById('message');
  if (messageEl) messageEl.textContent = 'вот мое сердечко';

  // логика открытия карточки и анимации сердечка
  var card = document.getElementById('card');
  var heart = document.getElementById('heart');

  if (card && heart) {
    card.addEventListener('click', function(){
      var opening = !card.classList.contains('open');
      card.classList.toggle('open', opening);
      if (opening) {
        heart.classList.remove('pop');
        setTimeout(function(){ heart.classList.add('pop'); }, 20);
      } else {
        heart.classList.remove('pop');
      }
    });
  }
})();