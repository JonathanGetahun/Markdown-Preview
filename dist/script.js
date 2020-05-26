function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}let markdown = `
**click anywhere to start typing in markdown!** 

# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`;

class Application extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",






    event => {
      this.setState({
        preview: event.target.value,
        editor: event.target.value });

    });_defineProperty(this, "newMarkup",

    string => {
      var newMarkup = marked(string, { sanitize: true });
      return { __html: newMarkup };
    });this.state = { preview: markdown, editor: markdown };}

  render() {
    return (
      React.createElement("div", { class: "container-fluid" },
      React.createElement("div", { id: "hop", className: "row" },
      React.createElement("div", { className: "col-xs-9 col-md-2" }),

      React.createElement("div", {
        id: "editorContain",
        className: "col-xs-9 col-md-4 text-right mh-100" },

      React.createElement("textarea", {
        type: "text",
        id: "editor",
        className: "mh-100",
        value: this.state.editor,
        onChange: this.handleChange.bind(this),
        rows: "50" })),



      React.createElement("div", { id: "previewContain", className: "col-xs-9 col-md-4 mh-100" },
      React.createElement("div", { id: "preview", className: "text-left" },
      React.createElement("span", {
        id: "inside text-nowrap",
        dangerouslySetInnerHTML: this.newMarkup(this.state.preview) }),
      " ")),


      React.createElement("div", { className: "col-xs-3" }))));



  }}


React.render(React.createElement(Application, null), document.getElementById("root"));