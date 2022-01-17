const link =
  "https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=DwEwlgbgfABAUDGwAWBGKAXMGA2BTYAejSgRgzwA8MzgAjAVwwwHsA7KR59mdgwrqw61B7TkyHkA7iyKjhRcNCA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.16.9&externalPlugins=&assumptions=%7B%7D";
const Jsx = () => {
  return (
    <main>
      <h1 id="title">Look at the console</h1>
      <p>paragraph</p>
      <Inner>Change my name</Inner>
      <a href={link}>view compiled code</a>
    </main>
  );
};

const Inner = ({ children }) => {
  return <div>hello from inner, got "{children}" from parent</div>;
};

console.log("This is what console.log(ThisComponent()) looks like:\n", Jsx());
export default Jsx;
