
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './BookCard.css';


class BookCard extends Component {
    
  render() {
      return (
      <Card className="card">
          <CardContent>
              <Typography className="title" color="textSecondary" gutterBottom>
              {this.props.book.user}
              </Typography>
              <Typography variant="h5" component="h2">
              {this.props.book.title}
              </Typography>
              <Typography className="pos" color="textSecondary">
              {this.props.book.writter}
              </Typography>
              <Typography variant="body2" component="p">
              {this.props.book.description}
              </Typography>
          </CardContent>
          <CardActions>
          {(() => {
              if (this.props.book.type) {
              return <Button variant="contained" color="primary" size="small">Solicitar</Button>;          
              } else {
              return <Button variant="contained" color="primary" size="small">Ofrecer</Button>;
              }
          })()}
              
          </CardActions>
      </Card>);
  }
}

export default BookCard;