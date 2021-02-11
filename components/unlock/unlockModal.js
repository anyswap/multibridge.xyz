import React, { Component } from "react";
import {
  DialogContent,
  Dialog,
  Slide
} from '@material-ui/core';

import Unlock from './unlock.js';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class UnlockModal extends Component {
  render() {
    const { closeModal, modalOpen } = this.props;

    const fullScreen = window.innerWidth < 576;

    return (
      <Dialog open={ modalOpen } onClose={ closeModal } fullWidth={ true } maxWidth={ 'xs' } TransitionComponent={ Transition } fullScreen={ fullScreen }>
        <DialogContent>
          <Unlock closeModal={ closeModal } />
        </DialogContent>
      </Dialog>
    )
  };
}

export default UnlockModal;
