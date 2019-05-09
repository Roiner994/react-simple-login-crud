import React, {Component} from 'react';
import NotificationsSystem from 'reapop';
// 1. import theme
import theme from 'reapop-theme-bootstrap';
//

const defaultValues = {
    status: 'info',
    position: 'tr',
    dismissible: true,
    dismissAfter: 5000,
    allowHTML: true,
    closeButton: false
  };

class ATopLevelComponent extends Component {
  render() {
   // 2. set `theme` prop
    return (
      <div>
        <NotificationsSystem theme={theme} defaultValues={defaultValues}/>
      </div>
    );
  }
}

export default ATopLevelComponent;