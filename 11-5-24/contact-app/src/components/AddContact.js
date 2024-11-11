import React from 'react';

class AddContact extends React.Component {
  state = {
    name: '',
    email: '',
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.email === '' && this.state.name === '') {
      alert('Please Fill Name And Email Fields Correctly');
      return;
    } else {
      this.props.addContactHandler(this.state);
    }
  };

  render() {
    const mainDiv = {
      textAlign: 'center',
      boxShadow: '0,0,0,0.1,black',
    };
    const form = {};
    const field = {
      margin: '5px',
    };
    const add = {
      padding: '4px 10px',
    };

    return (
      <div style={mainDiv}>
        <h2>AddContact</h2>
        <form style={form} onSubmit={this.add}>
          <div style={field}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              style={{ padding: '5px' }}
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
            />
          </div>
          <div style={field}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              style={{ padding: '5px' }}
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
          </div>
          <button style={add}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
