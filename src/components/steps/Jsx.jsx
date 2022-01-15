const Jsx = () => {
  return (
    <main>
      <h1 id="title">Look at the console</h1>
      <p>paragraph</p>
      <Inner>this text</Inner>
    </main>
  );
};

const Inner = ({ children }) => {
  return <div>hello from inner, got {children} from parent</div>;
};

console.log("This is what console.log(ThisComponent()) looks like:\n", Jsx());
export default Jsx;
