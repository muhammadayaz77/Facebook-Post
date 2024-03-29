let post = document.querySelector('.post');

let file = document.querySelector('#file');


let btn = document.querySelector('.btn');
btn.onclick = () => {
    let input = document.getElementById('in');
    // For First Con in post
let con = document.createElement('div');
con.setAttribute('class','con');
let img1 = document.createElement('img');
img1.src = '\MuhammadAyaz.jpeg';
img1.setAttribute('class','img1');
let h1 = document.createElement('h1');
h1.textContent = 'Muhammad Ayaz';
h1.setAttribute('class','h1');
let fir_con = document.createElement('div');
fir_con.setAttribute('class','fir-con');
fir_con.appendChild(img1);
fir_con.appendChild(h1);
con.appendChild(fir_con);
post.append(con);


// For Second Con in post
let sec_con = document.createElement('div');
sec_con.setAttribute('class','sec-con');
let h3 = document.createElement('h3');
h3.textContent = input.value;
h3.setAttribute('class','h3');
let img2 = document.createElement('img');
img2.setAttribute('class','img2');
img2.src = URL.createObjectURL(file.files[0]);
con.appendChild(sec_con);
sec_con.appendChild(h3);
sec_con.appendChild(img2);


// For Third Con in post

let th_con = document.createElement('div');

let th1 = document.createElement('div');
th1.setAttribute('class','th1')
th_con.appendChild(th1);
th_con.setAttribute('class','th-con')
let icon1 = document.createElement('i');
icon1.setAttribute('class','fa-regular fa-heart');
con.appendChild(th_con);
// third.appendChild(th);
// third.appendChild(th);
th1.appendChild(icon1);
let span1 = document.createElement('span');
span1.textContent = 'Like';
th1.appendChild(span1);

let th2 = document.createElement('div');
th2.setAttribute('class','th2')
let s2 = document.createElement('span');
s2.textContent = 'Comment';
let icon2 = document.createElement('i')
icon2.setAttribute('class','fa-regular fa-comment');
th2.appendChild(icon2)
th2.appendChild(s2);
th_con.appendChild(th2);

let th3 = document.createElement('div');
let s3 = document.createElement('span');
th3.setAttribute('class','th3');
let icon3 = document.createElement('i');
icon3.setAttribute('class','fa-solid fa-share');
th_con.appendChild(th3);
th3.appendChild(icon3);
s3.textContent = 'Share';
th3.appendChild(s3);
con.appendChild(th_con)




console.log(post);
}

