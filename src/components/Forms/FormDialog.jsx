import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput  from './TextInput'

export default class FromDialog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email:"",
            description:""
        }
        this.inputName = this.inputName.bind(this)
        this.inputEmail = this.inputEmail.bind(this)
        this.inputDescription = this.inputDescription.bind(this)
    }

    inputName = (event) => {
        this.setState({name:event.target.value})
    }
    inputEmail = (event) => {
        this.setState({email:event.target.value})
    }
    inputDescription = (event) => {
        this.setState({description:event.target.value})
    }

    submitForm = () => {
        const name = this.state.name
        const email = this.state.email
        const description = this.state.description

        const payload = {
            text: 'お問い合わせがありました。' +
             '名前：' + name +
              'Email: ' + email +
               '内容: ' + description
        }
        const url = 'https://hooks.slack.com/services/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'

        fetch(url, {
            method:'POST',
            body: JSON.stringify(payload)
        }).then(()=>{
            alert('ありがとうございます。送信が完了しました。')
            this.setState({name:"",email:"",description:""})
            return this.props.handleClose
        })
    }

    render(){
        
          return (
            <div>
              <Dialog open={this.props.open} onClose={this.props.handleClose}>
                <DialogTitle>お問い合わせ</DialogTitle>
                <DialogContent>
                  <TextInput
                        id={"name"}
                        label={"お名前"}
                        multiline={false}
                        rows={1}
                        onChange={this.inputName}
                        type={"name"}
                        value={this.state.name}
                        variant="standard"
                    />
                    <TextInput
                        id={"email"}
                        label={"メールアドレス"}
                        multiline={false}
                        rows={1}
                        onChange={this.inputEmail}
                        type={"email"}
                        value={this.state.email}
                        variant="standard"
                    />
                    <TextInput
                        id={"description"}
                        label={"内容"}
                        multiline={true}
                        rows={3}
                        onChange={this.inputDescription}
                        type={"description"}
                        value={this.state.description}
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.props.handleClose}>キャンセル</Button>
                  <Button onClick={this.submitForm}>送信</Button>
                </DialogActions>
              </Dialog>
            </div>
          );
    }

}