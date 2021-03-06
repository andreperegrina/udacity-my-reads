// Libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

// Style
import './BookItem.css'


class BookItem extends Component {
   state = {
      anchorElOptions: null // This state property is being use to storage the dom element to attach the popover menu
   };
   handleClickOptions = (event) => {
      // Storage the dom component that will get attach the option menu
      this.setState({anchorElOptions: event.currentTarget});
   };
   handleCloseOptions = () => {
      // Remove the dom element from the state after closing the menu
      this.setState({anchorElOptions: null});
   };
   handleMoveShelf = (shelf) => {
      if (this.props.onMoveShelf) {
         // Calls the onMoveShelf of the parent
         this.props.onMoveShelf(shelf);
      }
      // Close the options menu after the user choose a shelf
      this.handleCloseOptions();
   };

   render() {
      const {book, onMoveShelf, shelf} = this.props;
      const {imageLinks = {}, title, authors = []} = book;
      // Join all the authors in one string separate by ,
      const subtitle = authors.join(',');
      const imageURL = imageLinks.thumbnail;
      const {anchorElOptions} = this.state;
      // Valid if the menu option is open
      const isOptionsOpen = anchorElOptions != null;
      const id = isOptionsOpen ? 'options-popover' : undefined;
      return (
         <div className='BookItem'>
            <Card>
               <CardActionArea>
                  <CardMedia
                     component="img"
                     alt={title}
                     image={imageURL}
                     height='300px'
                     title={title}
                  />
                  <CardContent>
                     <Typography variant="h6" gutterBottom>
                        {title}
                     </Typography>
                     <Typography variant="subtitle1" color="textSecondary" component="p">
                        {subtitle}
                     </Typography>
                  </CardContent>
               </CardActionArea>
               {onMoveShelf && <CardActions>
                  <IconButton aria-label="options" onClick={this.handleClickOptions} style={{marginLeft: 'auto'}}>
                     <MoreHoriz/>
                  </IconButton>
                  <Menu
                     id={id}
                     anchorEl={anchorElOptions}
                     keepMounted
                     open={isOptionsOpen}
                     onClose={this.handleCloseOptions}
                     className='BookItem-Options'
                  >
                     <h5>Move to</h5>
                     <MenuItem onClick={() => this.handleMoveShelf('currentlyReading')}>
                        {shelf === 'currentlyReading' ? <CheckCircleIcon/> : <RadioButtonUncheckedIcon/>} Currently
                        Reading
                     </MenuItem>
                     <MenuItem onClick={() => this.handleMoveShelf('wantToRead')}>
                        {shelf === 'wantToRead' ? <CheckCircleIcon/> : <RadioButtonUncheckedIcon/>} Want to Read
                     </MenuItem>
                     <MenuItem onClick={() => this.handleMoveShelf('read')}>
                        {shelf === 'read' ? <CheckCircleIcon/> : <RadioButtonUncheckedIcon/>} Read
                     </MenuItem>
                     <MenuItem onClick={() => this.handleMoveShelf('none')}>
                        {(shelf === '' || shelf === 'none')  ? <CheckCircleIcon/> : <RadioButtonUncheckedIcon/>} None
                     </MenuItem>
                  </Menu>
               </CardActions>}
            </Card>
         </div>
      );
   }
}


BookItem.propTypes = {
   book: PropTypes.object.isRequired,
   onMoveShelf: PropTypes.func
};

export default BookItem;
