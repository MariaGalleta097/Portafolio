let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #18172f;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #18172f;">Desarrolladora Web Front - End Junior</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
