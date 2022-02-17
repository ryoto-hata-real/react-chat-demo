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
                  <Button onClick={this.props.handleClose}>送信</Button>
                </DialogActions>
              </Dialog>
            </div>
          );
    }

}