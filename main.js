// class Node {
//     data;
//     next;
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     head;
//     tail;
//     length;
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     addToEnd(nodeData) {
//         let node = new Node(nodeData);
//         if (!this.head) {
//             this.head = node;
//             this.tail = node;
//         }
//         else {
//             this.tail.next = node
//             this.tail = node
//         }
//         this.length++;
//     };

//     addToStart(nodeData) {
//         let node = new Node(nodeData);
//         if (!this.head) {
//             this.head = node;
//             this.tail = node;
//         }
//         else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.length++;
//     };
// }



// let list = new LinkedList();

// list.addToEnd(1);
// list.addToEnd(2);
// list.addToEnd(3);
// list.addToEnd(4);
// list.addToEnd(5);
// list.addToEnd(6);


// list.addToStart(10);
// list.addToStart(20);
// list.addToStart(30);


// console.log(list);





class Node {
    src;
    next;
    prev;
    constructor(src) {
        this.src = src;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    head;
    tail;
    length;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    addToEnd(nodeSrc) {
        let node = new Node(nodeSrc);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    };

    addToStart(nodeSrc) {
        let node = new Node(nodeSrc);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node
            this.head = node;
        }
        this.length++;
    };

    changeNextPic() {
        if (this.head.next) {
            this.head = this.head.next;
            sliderPic.src = this.head.src;
        }
        else {
            this.head = firstPic
            sliderPic.src = this.head.src;
        }
    };

    changePrevPic() {
        if (this.head.prev) {
            this.head = this.head.prev;
            sliderPic.src = this.head.src;
        }
        else {
            this.head = lastPic
            sliderPic.src = this.head.src;
        }
    };
}

let images = new LinkedList();

images.addToStart("https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg");
images.addToEnd("https://cdn.pixabay.com/photo/2020/07/30/10/26/asian-woman-5450041_960_720.jpg");
images.addToStart("https://cdn.pixabay.com/photo/2020/06/03/03/33/flower-5253311_960_720.jpg");
images.addToEnd("https://cdn.pixabay.com/photo/2021/05/22/01/47/mountains-6272362_960_720.jpg");
images.addToStart("https://cdn.pixabay.com/photo/2020/05/20/14/59/stadium-5196878_960_720.jpg");

console.log(images);

const sliderNextBtn = document.getElementById("sliderNextBtn");
const sliderPrevBtn = document.getElementById("sliderPrevBtn");

let sliderPic = document.getElementById("sliderPic");

sliderPic.src = images.head.src

let firstPic = images.head;
let lastPic = images.tail;

sliderNextBtn.onclick = () => {
    images.changeNextPic();
}

sliderPrevBtn.onclick = () => {
    images.changePrevPic();
}