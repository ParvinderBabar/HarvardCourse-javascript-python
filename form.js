function submitButton()
{ 
  const name = document.querySelector('#name').value;
     alert(`button pressed,${name}`);
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = submitButton;
 });
