const likeButton = document.querySelector('.like-button');
let isLiked = false; 
function toggleLike() {
  isLiked = !isLiked;
  likeButton.textContent = isLiked ? "Liked" : "Like"; 
  likeButton.style.color = isLiked ? "red" : ""; 
}

likeButton.addEventListener('click', toggleLike);

const faqQuestion = document.querySelector('.faq-question');
const faqAnswer = document.querySelector('.faq-answer');
let isVisible = false;

function toggleFaq() {
  isVisible = !isVisible;
  faqAnswer.style.display = isVisible ? 'block' : 'none';[span_2](start_span)[span_2](end_span)
}

faqQuestion.addEventListener('click', toggleFaq);[span_3](start_span)[span_3](end_span)
