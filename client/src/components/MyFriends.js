import React from 'react';
import axios from 'axios';
import { Header, Button, Icon, Card, Divider, Image, } from 'semantic-ui-react';

class MyFriends extends React.Component {
  state = { friends: [], };

  componentDidMount() {
    axios.get('/api/my_friends')
      .then( res => this.setState({ friends: res.data, }) );
  }

  defriend = (id) => {
    const { friends,} = this.state;
    this.setState({ friends: friends.filter(f => f.id !== id)})
  }


  render() {
    const { friends, id } = this.state;
    return (
      <>
      <br />
      <Header as='h1' textAlign="center"> Friends List </Header>
      <br />
      <Card.Group itemsPerRow={4}>
        { friends.map( friend =>
          <Card key={friend.id}>
            <Image src={friend.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>
                { friend.name }
              </Card.Header>
              <Button color="black" basic onClick={() => this.defriend(friend.id)}>
              Not Friends Anymore
              </Button>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
      </>
    )
  }
}

export default MyFriends;
