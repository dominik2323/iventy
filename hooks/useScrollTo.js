export const useScrollTo = id => {
  const el = document.getElementById(id);
  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};
