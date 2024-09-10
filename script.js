var currentScreenshot = 0;

const emailInput = document.getElementById('email-input');
const mailIcon = document.getElementById('mail-icon');
const submitButton = document.getElementById('submit-button');

const screenshots = document.getElementsByClassName('screenshot');
const screenshotContainer = document.getElementById('screenshot-container');

function main() {
  emailInput.addEventListener('input', updateValue);
  emailInput.addEventListener('input', validateEmail);

  // On escape key press, close the screenshot
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isShowingImage) {
      closeScreenshot();
    }
  });

  screenshotContainer.addEventListener('click', closeScreenshot);

  for (let i = 0; i < screenshots.length; i++) {
    screenshots[i].addEventListener('click', () => showScreenshot(i));
  }

}

function updateValue(e) {
  mailIcon.style.animation = "bobIcon 0.1s ease-in-out alternate"
  setTimeout(() => {
    mailIcon.style.animation = "none"
  }, 100);
}

function validateEmail() {
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailRegex.test(email))
  {
    changeSVGImageColor('6ec24b');
    submitButton.disabled = false;
    submitButton.classList.remove('disabled');
  }
  else
  {
    changeSVGImageColor('ddd');  
    submitButton.disabled = true;
    submitButton.classList.add('disabled');
  }
}

function showScreenshot(index) {
  isShowingImage = true;
  screenshotContainer.style.display = 'flex';
  screenshotContainer.innerHTML = '';

  for (let i = 0; i < screenshots.length; i++) {
    if (i === index) {
      screenshotContainer.appendChild(createImageElement(`images/Screenshot_${i + 1}.png`));
    }
  }
}

function closeScreenshot() {
  screenshotContainer.style.display = 'none';
}

function nextScreenshot() {
  currentScreenshot = (currentScreenshot + 1) % screenshots.length;
  showScreenshot(currentScreenshot);
}

function createImageElement(src) {
  const img = document.createElement('img');
  img.src = src;
  return img;
}

function changeSVGImageColor(color) {
  mailIcon.getElementById('email-icon-path').style.fill = color;
}

main();