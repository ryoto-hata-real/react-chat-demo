import React from 'react'
import './assets/styles/style.css';
import { AnswersList, Chats, FormDialog } from './components';
import {db} from './firebase/index'

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
      dataset: {},
      open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
  }

  handleClickOpen = () => {
    this.setState({open:true})
  }
  handleClose = () => {
    this.setState({open:false})
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
      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a')
        a.href = nextQuestionId
        a.target = '_blank'
        a.click()
        break
      case (nextQuestionId === 'contact'):
        this.handleClickOpen()
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


  initDataset = (dataset) => {
    this.setState({dataset: dataset})
  }
  componentDidMount(){
    (async() => {
      const dataset = this.state.dataset
      await db.collection('questions').get().then(snapshots => {
        snapshots.forEach(doc => {
          const id = doc.id
          const data = doc.data()
          dataset[id] = data
          console.log(id)
        })
      })
      this.initDataset(dataset)
      const initAnswer = ""
      this.selectAnswer(initAnswer, this.state.currentId)
      console.log(dataset)
    })()
  }

  componentDidUpdate(prevProps, preState, snapshot){
    const scrollArea = document.getElementById('scroll-area')
    if(scrollArea){
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }

  render() {
    return (
      <section className='c-section'>
        <div className='c-box'>
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers} select={this.selectAnswer}/>
          <FormDialog open={this.state.open} handleClose={this.handleClose} handleClickOpen={this.handleClickOpen}/>
        </div>
      </section>
    );
  }
}
