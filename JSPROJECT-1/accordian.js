const faqData = [

    {
        id: 1,
        questions: "Who are we?",
        answer:
        "we enable upscalling careers through flexible , interactive and collaborative learning . We believe in building learning communities by bringing together mentors , young minds , and creators",
    },
     
    {
        id: 2, 
        questions: "What do we do?",
        answer: "Building learning communities with our affordable & competent courses",
    },
    {
        id: 3,
        questions: "Are the community classes boring?",
        answer: "No , Not At ALL!!",
    }
];

const accordianBody = document.querySelector('.accordian_body');

const faqs = [];

function showFaq(btn, index) {
    let pText = document.querySelectorAll('.faq p');
    if (pText[index].className == 'hidden'){
        btn.innerText = "-";
        pText[index].className = 'block';
    }
    else {
        pText[index].className =   'hidden';
        btn.innerText = "+";
    }
}

function createFaq(data) {
    faqs.push(`<div id="${data.id}" class="faq">
    <div class="faq_header">
      <h3>${data.questions}</h3>
      <button class="show_btn">+</button>
    </div>
    <p class="hidden">
      ${data.answer}
    </p>
    </div>`);
  }

  function btnStatusUpdate() {
    const btns = document.querySelectorAll('.show_btn');
    btns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        showFaq(btn, index);
      })
    })
  }
  
  faqData.forEach((data) => {
    createFaq(data);
  })
  
  faqs.forEach((element) => {
    accordianBody.innerHTML += element;
  });
  
  
  btnStatusUpdate();
  
