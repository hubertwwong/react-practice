import React from 'react';

class TravelForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      city: "",
      diet: []
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    let {name, value, type, checked} = event.target;
    console.log(name + "|" + value);
    if (name === "age") {
      const re = /^[0-9]+$/;
      if (name && re.test(value)) {
        this.setState({
          [name]: value
        });  
      }
    } else if (type === "checkbox") {
      // I wonder if there is a better way to do this.
      // You can do this as a sub object but have to specify the value
      // you can also have specifc keys. Like isKosher
      this.setState(prevState => {
        let diet = prevState.diet.slice();
        let found = false;
        for (let i = 0 ; i < diet.length ; i++) {
          if (diet[i] === value) {
            found = true;
            diet.splice(i, 1);
            break;
          }
        }
        if (!found) diet.push(value);

        return {
          diet
        };
      });
    } else {
      // the tenery is to handle the radio
      this.setState({
        [name]: type==="checked" ? checked : value
      });
    }
  }

  onSubmit(event) {
    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            First name
            <input 
              type="text" 
              name="firstName"
              value={this.state.firstName} 
              onChange={this.onChange} 
              />
          </label><br/>
          <label>
            Last name
            <input               
              type="text" 
              name="lastName"
              value={this.state.lastName} 
              onChange={this.onChange} 
              />
          </label><br/>
          <label>
            age
            <input 
              type="text" 
              name="age"
              value={this.state.age}
              onChange={this.onChange}
              />
          </label><br/>
          
          <h3>What is your gender?</h3>
          <label>
            Male
            <input 
              type="radio" 
              name="gender"
              value="male"
              checked={this.state.gender==="male"}
              onChange={this.onChange}
              />
          </label><br/>
          <label>
            Female
            <input 
              type="radio" 
              name="gender"
              value="female"
              checked={this.state.gender==="female"}
              onChange={this.onChange}
              />
          </label><br/>

          <h3>Where do you want to travel to?</h3>
          <select name="city" value={this.state.city} onChange={this.onChange}>
            <option value=""></option>
            <option value="paris">Paris</option>
            <option value="tokyo">Tokyo</option>
            <option value="los angeles">Los Angeles</option>
          </select>

          <h3>Diet restrictions</h3>
          <label>
            vegetarian
            <input 
              type="checkbox" 
              name="diet"
              value="vegetarian"
              checked={this.state.diet.vegetarian}
              onChange={this.onChange}
              />
          </label><br/>
          <label>
            kosher
            <input 
              type="checkbox" 
              name="diet"
              value="kosher"
              checked={this.state.diet.kosher}
              onChange={this.onChange}
              />
          </label><br/>
          <label>
            lactose free
            <input 
              type="checkbox" 
              name="diet"
              value="lactose"
              checked={this.state.diet.lactose}
              onChange={this.onChange}
              />
          </label><br/>
          <button>Submit</button>
        </form>

        <div>
          <h4>debug</h4>
          <h6>first name</h6>
          {this.state.firstName}
          <h6>last name</h6>
          {this.state.lastName}
          <h6>age</h6>
          {this.state.age}
          <h6>gender</h6>
          {this.state.gender}
          <h6>city</h6>
          {this.state.city}
          <h6>diet</h6>
          {JSON.stringify(this.state.diet)}
        </div>
      </div>
    );
  }
}

export default TravelForm;