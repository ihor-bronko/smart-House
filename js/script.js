const dom = {
	selectbox: document.getElementById('selectbox'),
	selectboxList: document.querySelector('.selectbox__list'),
	rooms: document.getElementById('rooms'),
	
};


//  Выпадающий список

dom.selectbox.querySelector('.selectbox__selected').onclick = (event) => {
	dom.selectbox.classList.toggle('open');
};

document.body.onclick = (event) => {
	const {target} = event
	if (
		!target.matches('.selectbox')
		&& !target.parentElement.matches('.selectbox')
		&& !target.parentElement.parentElement.matches('.selectbox')
	) {
		dom.selectbox.classList.remove('open');
	}
}

dom.selectboxList.onclick = (event) => {
	const {target} = event
	if (target.matches('.selectbox__item')) {
		const {room} = target.dataset
		const selectedItem = dom.selectboxList.querySelector('.selected')
		selectedItem.classList.remove('selected')
		target.classList.add('selected')
		dom.selectbox.classList.remove('open')
		selectRoom(room)
	}
}
const rooms = {
	all: 'Все комнаты',
	livingroom: 'Зал',
	bedroom: 'Спальня',
	kitchen: 'Кухня',
	bathroom: 'Ванная',
	studio: 'Кабинет',
	washingroom: 'Уборная'
}

// Выбор комнаты

function selectRoom(room) {
	const selectedRoom = dom.rooms.querySelector('.selected')
	if (selectedRoom) {
		selectedRoom.classList.remove('selected');
	}
	if (room !== 'all') {
		const newSelectedRoom = dom.rooms.querySelector(`[data-room=${room}]`)
		newSelectedRoom.classList.add('selected')
	}
	const selectedSelectboxRoom = dom.selectbox.querySelector('.selectbox__item.selected')
	selectedSelectboxRoom.classList.remove('selected')
	const newSelectedItem = dom.selectbox.querySelector(`[data-room=${room}]`)
	newSelectedItem.classList.add('selected')
	const selectboxSelected = dom.selectbox.querySelector('.selectbox__selected  span')
	selectboxSelected.innerHTML = rooms[room]
}

// Клик по элементу комнаты

dom.rooms.querySelectorAll('.room').forEach(room => {
	room.onclick = (event) => {
		const value = room.dataset.room
		selectRoom(value)
	}
})