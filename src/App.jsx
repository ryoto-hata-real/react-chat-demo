import React from 'react'
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList, Chats } from './components';

const wait = (sec) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, sec*1000);
    //setTimeout(() => {reject(new Error("エラー！"))}, sec*1000);
  });
};

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: 'init',
      dataset: defaultDataset,
      open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this)
  }

  //初期値を入れる
  initAnswer = () => {
    const initDatasets = this.state.dataset[this.state.currentId]
    const initAnswers = initDatasets.answers

    this.setState({
      answers: initAnswers
    })
  }

  displayNextQuestion = async (nextQuestionId) => {
    await wait(0.8)
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type:'question'
    })
    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats:chats,
      currentId: nextQuestionId
    })
  }

  selectAnswer = async (selectedAnswer, nextQuestionId) => {
    switch(true){
      case (nextQuestionId === 'init'):
        this.displayNextQuestion(nextQuestionId)
        break
      default:
        await wait(0.1)
        const chats = this.state.chats
        chats.push({
          text: selectedAnswer,
          type: 'answer'
        })
    
        this.setState({
          chats: chats
        })

        this.displayNextQuestion(nextQuestionId)
        break
    }
  }


  componentDidMount(){
    const initAnswer = ""
    this.selectAnswer(initAnswer, this.state.currentId)
  }

  render() {
    return (
      <section className='c-section'>
        <div className='c-box'>
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers} select={this.selectAnswer}/>
        </div>
      </section>
    );
  }
}