import React from "react";
class Form1 extends React.Component {
  state = {
    title: "",
    text: "",
    library: "",
    accept: "true",
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({ title: e.target.value });
    } else if (e.target.type === "textarea") {
      this.setState({ text: e.target.value });
    } else if (e.target.type === "select-one") {
      this.setState({ library: e.target.value });
    } else if (e.target.type === "checkbox") {
      this.setState({ library: e.target.checked });
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter name"
            value={this.state.title}
            onChange={this.handleChange}
          ></input>
          <br />
          <br />
          <textarea
            type="textarea"
            placeholder="Write your massage"
            value={this.state.text}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <br />
          <select value={this.library} onChange={this.handleChange}>
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            checked={this.accept}
            onChange={this.handleChange}
          ></input>
          <br />
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </>
    );
  }
}

export default Form1;
