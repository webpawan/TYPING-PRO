let msg = document.getElementById('msg');
let textarea = document.getElementById('mykeywords');
let btn = document.getElementById('btn');
let starttime, endtime;

const datas = [
    "my name is pawan saini    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt temporibus reprehenderit, harum cum aut explicabo, cupiditate voluptatem, id animi quis doloribus? Modi doloremque harum sit a commodi, debitis laboriosam.",
    "my hobby is coding",
    "i want to become great in my field",
    "i can do every thing"

]


const  onplay =() => {
    let num = Math.floor(Math.random() * datas.length);
    msg.innerText = datas[num];
    let date = new Date();
    starttime = date.getTime();
    btn.innerHTML = 'Done';

}
const offplay = () => {
    
    let date = new Date();
    endtime = date.getTime();
    let totaltime = ((endtime - starttime) / 1000);
    // console.log(totaltime);
    let lengthofwords = calculate(textarea.value);
// console.log(lengthofwords);
    let speed = Math.round((lengthofwords / totaltime) * 60);
let result  = `my speed is ${speed} | `
   result += calculatewords(msg.innerHTML, textarea.value);
    
    if (textarea.value == "") {
        msg.innerHTML = "kachu to likh do bhiya yar";
    } else {
        msg.innerHTML = result;    
    }

}

const calculatewords = (str1,str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;
  

    words1.forEach((item, index) => {
        if (item == words2[index]) {
            count++;
        }
    })
    let wrongwords = (words1.length - count);
    
    return `my worng word is ${wrongwords} | my currect words is ${count} `;
}

const calculate = (str) => {
    let sendwordslength = str.split(" ").length;
    return sendwordslength;
}


btn.addEventListener('click', function () {

    if (this.innerHTML == "Start") {
        textarea.disabled = false;
        onplay();
        if (textarea.value != "") {
            textarea.value = "";
       }
    } else if (this.innerHTML == "Done") {
        this.innerHTML ="Start";
        textarea.disabled = true;
       
        offplay();
       
  }

})



































// const setOfWords = [

//     "my name is pawan.",
//     "my life is very adventures",
//     "now i am hustler "

// ];

// const msg = document.getElementById('msg');
// const typewords = document.getElementById('mykeywords');
// const btn = document.getElementById('btn');
// let starttime, endtime;
// const playgame = () => {
//     let randumnumber = Math.floor(Math.random() * setOfWords.length);
//     msg.innerHTML = setOfWords[randumnumber];
//     let date = new Date();
//     starttime = date.getTime();
//     btn.innerHTML = "Done"
// }

// const endplay = () => {
    
//     let date = new Date();
//     endtime = date.getTime();
//     let totaltime = ((endtime - starttime) / 1000);
//     // console.log(totaltime);

//     let totalstr = typewords.value;
//     let wordcount = count(totalstr);
//     let speed = Math.round((wordcount / totaltime)*60);
// // console.log(speed);
//     let finalmsg = `per miniute spped is ${speed} and `;
//     finalmsg  += compare(msg.innerText,totalstr)
//     msg.innerHTML = finalmsg;
// }

// const compare = (str1,str2) => {
//     let words1 = str1.split(" ");
//     let words2 = str2.split(" ");
//     let cnt = 0;


//     words1.forEach(function (item, index) {
//         if (item == words2[index]) {
//             cnt++;
//         }
//     })

//     let errorwords = (words1.length - cnt);
//     return (`${cnt} corrent words | ${errorwords} wrond words | ${words1.length} me sa`);

// }

// const count = (str) => {
//     let response = str.split(" ").length;
   
//     return response;
// }




// btn.addEventListener('click', function() {
    
//     if (this.innerText == 'Start') {
//         typewords.disabled = false;
//         playgame();
//     } else if (this.innerHTML == 'Done') {
//         typewords.disabled = true;
//         btn.innerHTML = "Start";
//         endplay();
// }

// })
