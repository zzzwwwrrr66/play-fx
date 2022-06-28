import 'fxjs';
import 'fxdom';


const condition = true;
// const condition = false;

const promise = new Promise((resolve, reject) => {
	if (condition) {
		resolve('성공!');
	} else {
		reject('실패!');
	}
});
promise
	.then(message => {
		console.log('asdasdasd');
	})
	.catch(error => {
		console.log(error);
	})
	.finally(() => {
		console.log('끝에 실행');
	});
