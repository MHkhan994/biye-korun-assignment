export const openModal = (id) => {
  const el = document.getElementById(id);
  if (el && window.innerWidth < 768) {
    el.showModal();
  }
};

export const closeModal = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.close();
  }
};
