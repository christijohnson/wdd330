import { comments, getData, renderCommentData } from './comments.js';
import Hikes from './hikes.js';

//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
  renderCommentData(comments);

  document.querySelector('button.add').onclick = ()=> {
	const comment = getData();
	comments.push(comment);
	localStorage.setItem('comments', JSON.stringify(comments));
	renderCommentData(comments);
}
});
