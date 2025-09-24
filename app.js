const parent = React.createElement(
    'div', 
    {id: "parent"}, [
        React.createElement('div', {id: "child1"},[   
            React.createElement('h1', {}, "Iam an h1 tag"),
            React.createElement('h2', {}, "Iam an h2 tag"),
            React.createElement('h3', {}, 'iam an h3 tag') 
        ]),

        React.createElement('div', {id: "child2"},[   
            React.createElement('h1', {}, "Iam an h1 tag"),
            React.createElement('h2', {}, "Iam an h2 tag"),
            React.createElement('h3', {}, 'iam an h3 tag') 
        ])
    ]

);



const heading = React.createElement('h1', 
    {id: "heading"}, 
    "Hello world from React!"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);

