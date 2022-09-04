import React from "react";

class User extends React.Component {
  state = { loading: true, person: null };

  async componentDidMount() {
    const url = "https://randomuser.me/api/";
    const Response = await fetch(url);
    const data = await Response.json();
    // console.log(data.results[0]);
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.person.name.title}</div>
            <div>{this.state.person.name.first}</div>
            <div>{this.state.person.name.last}</div>
            <img src={this.state.person.picture.large} alt="" />
          </div>
        )}
      </div>
    );
  }
}

export default User;

// import React, {useState, useEffect} from 'react'

// const User = () => {
//     const [users, setUsers] = useState({});

//     useEffect(() => {
//        async function fetchData() {
//             const url = 'https://randomuser.me/api/';
//             const Response = await fetch(url);
//             const data = await Response.json()
//             // console.log(data.results[0]);
//             setUsers( data.results[0].id)
//         }
//         fetchData();
//     })

//   return (
//     <div>
//         {users.name}
//     </div>

//   )
// }

// export default User
