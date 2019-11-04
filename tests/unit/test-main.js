const memory = {}

before(() => {
  window.gc();
  memory.before = window.performance.memory;
});

after(() => {
  memory.after = window.performance.memory;
  console.log('+Δ (bytes)', (memory.after.usedJSHeapSize - memory.before.usedJSHeapSize));
});
