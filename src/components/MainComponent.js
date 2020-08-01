import React, {Component} from 'react';
import { Switch, Route, Redirect }  from 'react-router-dom';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';




class Main extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS,
      selectedDish : null
    };
  }

  render() {
    const HomePage = () => {
        return (
            <Home dish={this.state.dishes.filter(dish => dish.featured === true)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured === true)[0]}
                leader={this.state.leaders.filter(leader => leader.featured === true)[0]}
             />
        );
    }

    const DishWithId = ({match}) =>{
        return(
            <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]} 
                comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            />
        );
    }

    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }

}
export default Main;
