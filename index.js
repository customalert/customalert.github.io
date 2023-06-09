// hljs and hljs-copy Calling

hljs.debugMode();
hljs.addPlugin(
  new CopyButtonPlugin({
    hook: (text, el) => {
      if (el.dataset.copyright) {
        return `${text}\n\n${el.dataset.copyright}`;
      }
      if (el.dataset.highlight) {
        el.style.filter = "saturate(5)";
      }
      if (el.dataset.replace) {
        return text
          .replace("{{name}}", "Alexander Graham Bell")
          .replace("{{dog}}", "Platypus");
      }
      return text;
    }
  })
);
hljs.highlightAll();

// Sticky Navbar

const header = document.querySelector('header');
const observer = new IntersectionObserver(
    (entries) => {
      const ent = entries[0];
      !ent.isIntersecting
        ? header.classList.add("sticky")
        : header.classList.remove("sticky");
    },
    {
      root: null,
      threshold: 0,
    }
  );
  
  observer.observe(document.querySelector('.main'));


  document.getElementById('menu').addEventListener('click', () => {
    header.querySelector('ul').classList.toggle('active');
  });

// Getting Current Year For Footer

  const d = new Date();
  let year = d.getFullYear();
  document.querySelector('#year').innerHTML= year;
