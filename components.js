/*
    User interfaces can be broken down into smaller building blocks
    called components.

    Components allows to build self-contained, reusable snippets
    of code. If you think of components as LEGO bricks, you can take
    these individual bricks and combine them together to form larger
    structures. If you need to update a piece of the UI, you can
    update the specific component or brick.

    The nice thing about React components is that they are just
    JavaScript. Let's see how you can write a React component, from a
    JavaScript perspective:
*/

// CREATING COMPONENTS.

const app = document.getElementById("app");

// here we are going to create a component called header.

function Header() {

    // A component is a function that returns UI elements. Inside the
    // return statement of the function, you can write JSX:
    return (<h1>This is the custom react component build by Muhammed Basheer</h1>)
}

// First, React components should be capitalized to distinguish them from
// plain HTML and JavaScript

// ReactDOM.render(<Header/>, app);

/*
    Applications usually include more content than a single component.
    You can nest React components inside each other like you would
    regular HTML elements.
*/
function HomePage() {
    return (
      <div>
        {/* Nesting the Header component */
            (<h1>From parent.</h1>)
        }
        <Header />
      </div>
    );
}

ReactDOM.render(<HomePage/>, app);

