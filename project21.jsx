//Create a Stateful Component
class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      // Only change code below this line
  this.state = {
        firstName : "Zack"
      };
      // Only change code above this line
    }
    render() {
      return (
        <div>
          <h1>{this.state.firstName}</h1>
        </div>
      );
    }
  };