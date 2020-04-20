import React, { Component } from "react";
import Navbar from "../NavTab/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FriendCard from "../FriendCard/Cards";
import friends from "../../friends.json";
import "./games.css";

let score = 0;
let topScore = 0;
let message = "click an image to play";

class Games extends Component {
  state = {
    friends,
    score,
    topScore,
    message,
  };
  componentDidMount() {
    friends.sort(() => {
      return 0.5 - Math.random();
    });
    this.setState({ friends });
    
    this.setState({ message });
  }

  resetGame = () =>{
      
      score =0;
      topScore = 0;
      message ="click an image to play"
      this.setState({score});
      this.setState({topScore});
      this.setState({message});
      friends.sort(() =>{
        return 0.5-Math.random()
    });
    this.setState({friends});

  }

  handleClicked = (id) => {
    //alert("image clicked" + id);
    //this.setState({ message });
    const friends = this.state.friends;
    const imageClicked = friends.filter(friends => friends.id === id);

    if (imageClicked[0].clicked){
        score = 0;
        message = "You chose wrong";
        for (let i = 0; i<friends.length; i++){
            friends[i].clicked = false;
        }
        this.setState({message});
        this.setState({score});
        this.setState({friends});
    }else{
        imageClicked[0].clicked = true;

        if (score === 8){
            message = "You have great memory !";
            score = 0;
            topScore = 0;
            this.setState({topScore});
            this.setState({message});

            for (let i = 0; i<friends.length; i++){
                friends[i].clicked = false;
            }
        }else {
                score = score +1;
                message = "you choose correct";

                if (score >topScore){
                    topScore = score;
                    this.setState({topScore})
                }
            }

            friends.sort(() =>{
                return 0.5-Math.random()
            });
            this.setState({ friends });
            this.setState({ message });
            this.setState({ score });
        }
    }
   
    // score = score + 1;
    // this.setState({score});
  

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Navbar
            score={this.state.score}
            topScore={this.state.topScore}
            message={this.state.message}
            reset = {this.resetGame}
          />
        </div>
        <div>
            <Header />
        </div>
        <div className="row gameBoard">
          {this.state.friends.map((friends) => (
            <FriendCard
              clicked={this.handleClicked}
              id={friends.id}
              key={"castid" + friends.id}
              name={friends.name}
              image={friends.image}
            />
          ))}
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}


export default Games;
