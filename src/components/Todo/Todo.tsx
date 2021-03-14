import React from 'react';

export const Todo = (props: any) => {

	const handleOnClick = () => {
		window.location.href = '/detail'
	}

	return (
		<div>
			<div onClick={handleOnClick}>
				{props.todo.title}
			</div>
		</div>
	);
}

/* class Todo extends React.Component<any> {
	shouldComponentUpdate(prevProps: any) {
        //!= was changed to !==
	if(this.props !== prevProps) {
		return true;
	}
		return false;
	}

	handleOnClick() {
		window.location.href = '/detail'
	}

	render() {

	return (
		<div>
			<div onClick={this.handleOnClick}>
			{this.props.todo.title}
			</div>
		</div>
	);
	}
}

export default Todo; */