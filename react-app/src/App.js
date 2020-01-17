import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './App.css';
import BookCard from './components/book-card/BookCard';
import BookModal from './components/book-modal/BookModal';
import ReactPaginate from 'react-paginate';

class App extends Component { 

  allBooks = [
    {user: 'John Doe', type: 0, title: 'title 1', writter: 'escritor1', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet lectus lectus, non laoreet lorem ornare sit amet. Maecenas condimentum felis quis nunc pretium, sed lacinia ipsum molestie. Donec dapibus orci id dolor porta consectetur'},
    {user: 'Kenny Goodwin', type: 1, title: 'title 2', writter: 'escritor2', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet lectus lectus, non laoreet lorem ornare sit amet. Maecenas condimentum felis quis nunc pretium, sed lacinia ipsum molestie. Donec dapibus orci id dolor porta consectetur'},
    {user: 'Lesly Arsenault', type: 1, title: 'title 3', writter: 'escritor3', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet lectus lectus, non laoreet lorem ornare sit amet. Maecenas condimentum felis quis nunc pretium, sed lacinia ipsum molestie. Donec dapibus orci id dolor porta consectetur'},
    {user: 'Arlene Halsey', type: 1, title: 'title 4', writter: 'escritor4', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet lectus lectus, non laoreet lorem ornare sit amet. Maecenas condimentum felis quis nunc pretium, sed lacinia ipsum molestie. Donec dapibus orci id dolor porta consectetur'},
  ]  

  books = [];

  constructor(props) {
    super(props)  
    this.state = {
      offset: 0,
      books: this.allBooks.slice(0, 2)
    };
  }

  booksList = () => (
      <div>
      {this.state.books.map((book) => 
        <BookCard book={book}/>
      )}
      </div>
  )

  handleOpen() {
    this.refs.modal.handleOpen();
  }

  handlePageClick = data => {    
    let selected = data.selected;
    let offset = Math.ceil(selected * 2);    
    this.setState({ offset: offset }, () => {
      this.setState({books: this.allBooks.slice(offset, offset + 2)})
    });
  };

  
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          {this.booksList()}
          <Fab className="add-button" color="primary" aria-label="add" onClick={this.handleOpen.bind(this)}>
            <AddIcon />
          </Fab>
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={2}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}/>
        </Container>      
        <BookModal ref="modal"/>
      </React.Fragment>    
    );
  }
}

export default App;
