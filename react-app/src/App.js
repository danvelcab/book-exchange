import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './App.css';
import BookCard from './components/book-card/BookCard';
import BookModal from './components/book-modal/BookModal';

class App extends Component { 


  books = [
    {user: 'John Doe', type: 0, title: 'title 1', writter: 'escritor1', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet lectus lectus, non laoreet lorem ornare sit amet. Maecenas condimentum felis quis nunc pretium, sed lacinia ipsum molestie. Donec dapibus orci id dolor porta consectetur'},
    {user: 'Kenny Goodwin', type: 1, title: 'title 2', writter: 'escritor2', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet lectus lectus, non laoreet lorem ornare sit amet. Maecenas condimentum felis quis nunc pretium, sed lacinia ipsum molestie. Donec dapibus orci id dolor porta consectetur'},
    {user: 'Lesly Arsenault', type: 1, title: 'title 3', writter: 'escritor3', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet lectus lectus, non laoreet lorem ornare sit amet. Maecenas condimentum felis quis nunc pretium, sed lacinia ipsum molestie. Donec dapibus orci id dolor porta consectetur'},
    {user: 'Arlene Halsey', type: 1, title: 'title 4', writter: 'escritor4', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet lectus lectus, non laoreet lorem ornare sit amet. Maecenas condimentum felis quis nunc pretium, sed lacinia ipsum molestie. Donec dapibus orci id dolor porta consectetur'},
  ]

  booksList = () => (
      <div>
      {this.books.map((book) => 
        <BookCard book={book}/>
      )}
      </div>
  )

  handleOpen() {
    this.refs.modal.handleOpen();
  }

  
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          {this.booksList()}
          <Fab className="add-button" color="primary" aria-label="add" onClick={this.handleOpen.bind(this)}>
            <AddIcon />
          </Fab>
        </Container>
        <BookModal ref="modal"/>
      </React.Fragment>    
    );
  }
}

export default App;
