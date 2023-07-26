// import logo from "./logo.svg";
// import "./App.css";

// const GrandChildOne = (props) => {
//   return (
//     <>
//       <h1>{props.bookTitle}</h1>
//       <h1>{props.author}</h1>
//     </>
//   );
// };

// const ChildOne = (props) => {
//   return <h1>{props.bookTitle}</h1>;
// };

// const ChildOneVersionTwo = (props) => {
//   return (
//     <>
//       <h1>{props.bookTitle}</h1>
//       <GrandChildOne bookTitle={props.bookTitle} author={props.author} />
//     </>
//   );
// };

// const App = () => {
//   return (
//     <div className="App">
//       <ChildOne bookTitle="Goosebumps" />
//       <ChildOne bookTitle="Twilight" />
//       <ChildOneVersionTwo author="jkrawling" bookTitle="Harry Potter" />
//     </div>
//   );
// };
//////////////////////////////////////////////////////////////////////////////////
// export default App;
import logo from "./logo.svg";
import "./App.css";

const GrandChildOne = (props) => {
  return (
    <>
      <h3>{props.bookTitle}</h3>
      <h3>{props.author}</h3>
    </>
  );
};

const ChildOne = (props) => {
  return (
    <>
      <h1>{props.bookTitle}</h1>
      {props.author && (
        <GrandChildOne bookTitle={props.bookTitle} author={props.author} />
      )}
    </>
  );
};


// const Books = (props) => {
//   return (
//     <>
//       <h1>{props.bookTitle}</h1>
//       {props.author && <BooksWithAuthor bookTitle={props.bookTitle} author={props.author}/>}
//     {/* either or work */}
//       {/* {props.author ? <BooksWithAuthor bookTitle={props.bookTitle} author={props.author}/> : null} */}
//     </>
//   )
// }

// David Yim
//   6:14 PM
// pushing up this project onto git and github.com
// notice how GIT already comes w/ npx create-react-app
// it also has the .gitignore file
// All we need to do add the changes to the local git
// git add .
// git commit -m <message>
// to push this on the github.com. sign into github.com and hit the green button that create a new repo
// name your repo
// copy the set of 3 commands and paste that into the terminal and press enter.

const App = () => {
  return (
    <div className="App">
      <ChildOne bookTitle="Goosebumps" />
      <ChildOne bookTitle="Twilight" />
      <ChildOne author="jkrawling" bookTitle="Harry Potter" />
    </div>
  );
};

export default App;