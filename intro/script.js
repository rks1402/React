let h1 = React.createElement("h1", null, "Hello from React");

let parent = document.getElementById("parent");

let root = ReactDOM.createRoot(parent);

root.render(h1);