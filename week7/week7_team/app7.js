import Hikes from './hikes.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
//const myComments = new CommentsController();
window.addEventListener('load', () => {
  myHikes.showHikeList();
  myComments.showCommentList();
});
