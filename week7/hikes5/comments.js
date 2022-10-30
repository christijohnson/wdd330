// returns boolean wether there is anything in local storage
const commentsExist = localStorage.getItem('comments') !== null;

//If there is nothing in local storage, this initializes it
if(!commentsExist) {
	localStorage.setItem('comments', JSON.stringify([]));
}
//This retrieves the comments from the local storage, and parses the string into an array of objects
export const comments = JSON.parse(localStorage.getItem('comments'));

class Comment {
	constructor(name, date, content) {
		this.name = name;
		this.date = date;
		this.content = content;
	}
}

export const getData = () => {
	const content = document.querySelector('input').value;
	const now = new Date();
	const date = `${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`;

	return new Comment('hike', date, content);

}

export const renderCommentData = (comments) => {
	const commentBox = document.querySelector('div.comments');
	commentBox.innerText = '';

	comments.forEach((comment) => {

		const box = document.createElement('div');
		box.classList.add('comment');

		const p = document.createElement('p');
		p.innerText = comment.content;

		const date = document.createElement('p');
		date.innerText = comment.date;

		box.appendChild(date);
		box.appendChild(p);

		commentBox.appendChild(box);

	})
}

