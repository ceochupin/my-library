export const setColorScheme = (sheme) => {
  if (sheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  };
};

export const setSysPerfColor = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setColorScheme('dark');
  };

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener((event) => {
    if (event.matchMedia) {
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }
  });
}