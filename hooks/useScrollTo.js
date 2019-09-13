export const useScrollTo = id => {
  const el = document.getElementById(id);
  window.scrollTo({
    behavior: 'smooth',
    top: el.offsetTop
  });
};
