/*
    Let's explore how React helps us add interactivity with state and event handlers.
*/



const app = document.getElementById("app");


function Header(props) {


    return (
        <div>
            <h1>
            Explore the components  {props.title}
            </h1>
        </div>

    )
}


function HomePage() {
    /*
    React has a set of functions called hooks. Hooks allow you to add
    additional logic such as state to your components. You can think
    of state as any information in your UI that changes over time,
    usually triggered by user interaction.

    You can use state to store and increment the number of times a
    user has clicked the like button. In fact, this is what the React
    hook to manage state is called: useState()

    useState() returns an array, and you can access and use those
    array values inside your component using array destructuring:

    The first item in the array is the state value, which you can
    name anything. It’s recommended to name it something descriptive:

    The second item in the array is a function to update the value.
    You can name the update function anything, but it's common to
    prefix it with set followed by the name of the state variable
    you’re updating:

    You can also take the opportunity to add the initial value of your
    likes state: zero.

    Then, you can check the initial state is working by using the state
    variable inside your component.

    */
    const [likes, setLikes] = React.useState(0);


    /*
    define a function to "handle" events whenever they are triggered.
    Create a function before the return statement called handleClick():

    Finally, you can call your state updater function, setLikes in
    your HomePage component, let's add it inside the handleClick()
    function you previously defined:

    */
    function handleClick() {
        setLikes(likes + 1);
    }
    return (
      <div>
        <h1>Welocome to React.</h1>
        <Header title="🚀🚀🚀🚀🚀" />
        {
            /*
            To make the button do something when clicked, you can
            make use of the onClick event. pass the function you want
            to associate with this event in curly braces.

            Clicking the button will now call the handleClick function,
            which calls the setLikes state updater function with a single
            argument of the current number of likes + 1.
            */
        }
        <button onClick={handleClick}> Like({likes}) </button>
      </div>
    );
}

ReactDOM.render(<HomePage />, app);