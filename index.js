let prev = document.getElementById('prev');
let next = document.getElementById('next');

let arrusers = [
    {
        name: 'Tanya Sinclair',
        role: 'UX Engineer',
        image: 'image-tanya.jpg',
        descrip: "“ I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and soexcited about the future. ”",
        id: 1
    },
    {
        name: 'John Tarkpor',
        role: 'Junior Front-end Developer',
        image: 'image-john.jpg',
        descrip: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        id: 2
    }
]

let index = 0;

prev.addEventListener('click', () => {
    if (index === 0) {
        index = arrusers.length - 1;
    } else {
        index--;
    }
    console.log(index)
    showuser()
})

next.addEventListener('click', () => {
    if (index === arrusers.length - 1) {
        index = 0;
    } else {
        index++;
    }
    console.log(index)
    showuser()
})

function showuser() {
    document.querySelector('.txt_details .description').innerHTML = arrusers[index].descrip
    document.querySelector('.txt_details .name_creator').innerHTML = arrusers[index].name
    document.querySelector('.txt_details .role_creator').innerHTML = arrusers[index].role
    document.querySelector('.image .img_creator img').setAttribute('src', `images/${arrusers[index].image}`)
}