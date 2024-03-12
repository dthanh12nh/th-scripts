var element = document.querySelector('#test');
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === "attributes") {
      console.log("attributes changed");
    }
    console.log(mutation.target);
  });
});

observer.observe(element, {
  attributes: true //configure it to listen to attribute changes
});