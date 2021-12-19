import React from 'react';



class App extends React.Component{
  // mounting,update,unmounting
  //constructor(): 클래스 인스턴스 객체를 생성하고 초기화하는 매소드
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount(){
    setTimeout( ()=> {
      this.setState({isLoading:false});
    },6000);
  }
  render(){
    const {isLoading} = this.state;
    return (<div>{isLoading ? "Loading": "We are ready"}</div>)
  }

}

export default App;

/*
food를 그냥 넘기면 food.prop.name 이런식으로 써야하는데,
오브젝트로 넘기면 prop에다가 오브젝트 내용을 담아서 넣는거 같다.
*/