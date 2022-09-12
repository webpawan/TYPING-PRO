let msg = document.getElementById('msg');
let textarea = document.getElementById('mykeywords');
let btn = document.getElementById('btn');
let starttime, endtime;




const onplay = async () => {
    // let num = Math.floor(Math.random() * datas.length);
    const api = "https://type.fit/api/quotes";

    try {
        msg.innerText = "just a second...";
        let data = await fetch(api);
        const mydata = await data.json();
        let num = Math.floor(Math.random() * mydata.length);
        msg.innerText = mydata[num].text;
        let date = new Date();
        starttime =  date.getTime();
        // console.log(starttime);
        btn.innerHTML = 'Done';
    } catch (error) {
        msg.innerHTML = `server mistake | -> retry`
    }
    
  

}
const offplay = () => {
    
    let date = new Date();
    endtime = date.getTime();
    let totaltime = ((endtime - starttime) / 1000);
    let lengthofwords = calculate(textarea.value);
    let speed = Math.round((lengthofwords / totaltime) * 60);
let result  = `  speed is ${speed} words per minute / `
   result += calculatewords(msg.innerHTML, textarea.value);
    
    if (textarea.value == "") {
        msg.innerHTML = "why are you not writing text in the textarea";
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
    
    return ` worng word is ${wrongwords} /  currect words is ${count} `;
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

