let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #de8a87;">Desarrollo sitios web y estudio Ingeniería en Desarrollo de SW.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
