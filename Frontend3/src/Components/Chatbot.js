import bot from '../Images/bot.jpg';
import '../Css/Chatbot.css';
import { FaPaperPlane } from "react-icons/fa";
import { useState} from 'react';
import { DatePicker } from "antd";


function Chatbot() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();


  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [time, setTime] = useState(`${hours}:${minutes}:${seconds}`); //using the useState hook to get the data from the local time and set it to the time variable
  const [dateTime, setDateTime] = useState(`${days[day]}, ${day} ${months[month]} ${year}`); //using the useState hook to get the data from the local date and set it to the dateTime variable
  // console.log(dateTime);



  const checkStatus = (e) => {
    let isActive = true;
    if(dateTime === 'Thursday, 20 April 2022'){ //if the dateTime is Thursday, 20 April 2022, the bot will be inactive
      isActive = false;
    }
    const status_chat = document.querySelector('.status_chat'); // selecting the status class
    if(isActive === true){ //if the bot is active
      status_chat.innerHTML = 'Active';
      status_chat.style.color = 'green';
    }else{
      status_chat.innerHTML = 'Inactive';
      status_chat.style.color = 'red';
    }
  }
  const handleInput_chat = () => {
    const botMessage = document.querySelector('#message1_chat');
    const humanMessage = document.querySelector('#message2_chat');
    
    
    let badwords = ['fuck|bad|stupid|useless|bitch|crazy|nonsense'] //adding the bad words
    let words = new RegExp(badwords);
    if(words.test(document.querySelector('#input_chat').value)){ // if the input contains bad words
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Please do not use bad words'; // display this message
        document.querySelector('#input_chat').value = '';
      }, 2000);
    }

    let welcome = ['Sup|sup|Hello|Hi|hello|hi|Yo|Halla|yello|yelow']
    let words2 = new RegExp(welcome);
    if(words2.test(document.querySelector('#input_chat').value)){
      const status_chat = document.querySelector('.status_chat');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Hello Their hope you are doing? How can i help you';
        status_chat.innerHTML = 'Active';
        status_chat.style.color = 'green';
        document.querySelector('#input_chat').value = '';
      }, 2000);
    }

    let bye = ['Bye|bye|Goodbye|goodbye|See you later|see you later|See you|see you']
    let words3 = new RegExp(bye);
    if(words3.test(document.querySelector('#input_chat').value)){
      const status_chat = document.querySelector('.status_chat');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Bye, have a nice day';
        document.querySelector('#input_chat').value = '';
      }, 2000);
      setTimeout(() => {
        status_chat.innerHTML = 'Not active';
        status_chat.style.color = 'red';
      }, 5000);
    }

    let thanks = ['Thanks|thanks|thank you|thank you very much|thank you very much']
    let words4 = new RegExp(thanks);
    if(words4.test(document.querySelector('#input_chat').value)){
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'You are welcome';
        document.querySelector('#input_chat').value = '';
      }, 2000);
    }

    let how = ['How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you']
    let words5 = new RegExp(how);
    if(words5.test(document.querySelector('#input_chat').value)){
      const status_chat = document.querySelector('.status_chat');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'I am fine, thank you';
        status_chat.innerHTML = 'Active';
        status_chat.style.color = 'green';
        document.querySelector('#input_chat').value = '';
      }, 2000);
    }

    let good = ["That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice"]
    let words6 = new RegExp(good);
    if(words6.test(document.querySelector('#input_chat').value)){
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = '😁';
        document.querySelector('#input_chat').value = '';
      }, 1000);
    }

    let response = ["I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|Good|good|I'm good|i'm good|great|Great"]
    let words7 = new RegExp(response);
    if(words7.test(document.querySelector('#input_chat').value)){
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'That is good';
        document.querySelector('#input_chat').value = '';
      }, 2000);
    }

    let nameAsk = ["What's your name|what's your name|What is your name|what is your name"]
    let words8 = new RegExp(nameAsk);
    if(words8.test(document.querySelector('#input_chat').value)){
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'I am asistant of I-MedCare..! how i help you? ';
        document.querySelector('#input_chat').value = '';
      }, 2000);
    }

    let owner = ["Who is the owner|who is the owner|who are you|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner"]
    let words9 = new RegExp(owner);
    if(words9.test(document.querySelector('#input_chat').value)){
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'The owner of this bot ';
        document.querySelector('#input_chat').value = '';
      }, 2000);
    }

    let owner2 = ["Who's Treasure|who's Treasure|Who is Treasure|who is Treasure"]
    let words10 = new RegExp(owner2);
    if(words10.test(document.querySelector('#input_chat').value)){
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Treasure is a programmer team of I-MedCare';
        document.querySelector('#input_chat').value = '';
      }, 2000);
    }

    let ageAsk = ["how can i select my doctor|what is the process of Appointment|how can i book my appointment|how can i working here as doctor|how can i be a part of system"] //adding the age-question
    let words11 = new RegExp(ageAsk);
    if(words11.test(document.querySelector('#input_chat').value)){ // if the input contains some question
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Firstly you have to login as Patient or Doctor as per your requirement then the System will guide you further';
        document.querySelector('#input_chat').value = '';
      }, 2000);
    }

    humanMessage.innerHTML = document.querySelector('#input_chat').value; // display the input
  }
  return (
    <div className="Chatbot" onLoad={checkStatus}>
    
      <div className="wrapper">
        <div className="content_chat">
          <div className="header_chat">
            <div className="img_chat">
              {/* <img src={bot} alt="" /> */}
              <img src="https://assets.materialup.com/uploads/9ef4bffd-1148-4183-bed4-8e37f7bf96eb/preview.gif"/>
            </div>
            <div className="right_chat">
              <div className="name_chat">I-MedCare</div>
              <div className='status_chat'></div>
            </div>
          </div>
          <div className="main_chat">
            <div className="main_content_chat">
              <div className="messages_chat">
                <div className="bot-message_chat" id='message1_chat'></div>
                <div className="human-message_chat" id='message2_chat'></div>
              </div>
            </div>
          </div>
          <div className="bottom_chat">
            <div className="btm_chat">
                <div className="input_chat">
                  <input type="text" id='input_chat' placeholder='Enter your message'/>
                </div>
                <div className="btn_chat">
                  <button onClick={handleInput_chat}>
                    <FaPaperPlane />
          
                    -Send
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
