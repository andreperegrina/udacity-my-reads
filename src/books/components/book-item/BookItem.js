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

// Style
import './BookItem.css'


class BookItem extends Component {
   state = {
      anchorElOptions: null
   };
   handleClick = (event) => {
      this.setState({anchorElOptions: event.currentTarget});
   };
   handleClose = () => {
      this.setState({anchorElOptions: null});
   };
   handleMoveShelf = (shelf) => {
      if (this.props.onMoveShelf) {
         this.props.onMoveShelf(shelf);
      }
      this.handleClose();
   };

   render() {
      const {anchorElOptions} = this.state;
      const isOptionsOpen = anchorElOptions != null;
      const id = isOptionsOpen ? 'options-popover' : undefined;
      const {imageURL, title, subtitle} = this.props;
      return (
         <div className='BookItem'>
            <Card>
               <CardActionArea>
                  <CardMedia
                     component="img"
                     alt="Contemplative Reptile"
                     image={imageURL}
                     height='300px'
                     title="Contemplative Reptile"
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
               <CardActions>
                  <IconButton aria-label="options" onClick={this.handleClick} style={{marginLeft: 'auto'}}>
                     <MoreHoriz/>
                  </IconButton>
                  <Menu
                     id="simple-menu"
                     anchorEl={anchorElOptions}
                     keepMounted
                     open={isOptionsOpen}
                     onClose={this.handleClose}
                     className='BookItem-Options'
                  >
                     <h5>Move to</h5>
                     <MenuItem onClick={() => this.handleMoveShelf('currentlyReading')}>Currently Reading</MenuItem>
                     <MenuItem onClick={() => this.handleMoveShelf('wantToRead')}>Want to Read</MenuItem>
                     <MenuItem onClick={() => this.handleMoveShelf('read')}>Read</MenuItem>
                  </Menu>
               </CardActions>
            </Card>
         </div>
      );
   }
}


BookItem.propTypes = {
   title: PropTypes.string.isRequired,
   subtitle: PropTypes.string.isRequired,
   imageURL: PropTypes.string,
   onMoveShelf: PropTypes.func
};

export default BookItem;
