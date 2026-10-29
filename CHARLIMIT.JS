function updateLimit(ta) {
  const len = ta.value.length;
  document.getElementById('lblCount').innerText = `${len} / 100`;

  const bar = document.getElementById('lblBar');
  bar.style.width = `${len}%`;

  if (len >= 90) {
    bar.style.background = '#ef4444'; // Danger Red
  } else if (len >= 75) {
    bar.style.background = '#f59e0b'; // Warning Yellow
  } else {
    bar.style.background = '#38bdf8'; // Normal Blue
  }
}