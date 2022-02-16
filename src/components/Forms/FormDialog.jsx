import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default class FromDialog extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
          return (
            <div>
              <Button variant="outlined" onClick={this.props.handleClickOpen}>
                お問い合わせをする
              </Button>
              <Dialog open={this.props.open} onClose={this.props.handleClose}>
                <DialogTitle>お問い合わせ</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    お問い合わせ内容を記載してください。
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="メールアドレス"
                    type="email"
                    fullWidth
                    variant="standard"
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="content"
                    label="内容"
                    type="text"
                    fullWidth
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