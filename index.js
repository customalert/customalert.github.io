hljs.initHighlightingOnLoad();
const header = document.querySelector('header');
const observer = new IntersectionObserver(
    (entries) => {
      const ent = entries[0];
      console.log(ent);
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

  const d = new Date();
  let year = d.getFullYear();
  document.querySelector('#year').innerHTML= year;
