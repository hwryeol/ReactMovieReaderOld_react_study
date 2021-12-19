import React from 'react';
import axios from "axios";
import Movie from "./Movie"



class App extends React.Component{
  // mounting,update,unmounting
  //constructor(): 클래스 인스턴스 객체를 생성하고 초기화하는 매소드
  state = {
    isLoading: true,
    movies: []
  };
  getMovies= async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({movies,isLoading:false})    
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />))}
              </div>
            );
          }
        }

export default App;

/*
food를 그냥 넘기면 food.prop.name 이런식으로 써야하는데,
오브젝트로 넘기면 prop에다가 오브젝트 내용을 담아서 넣는거 같다.
*/