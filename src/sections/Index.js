import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";



export default class Index extends Component {
  render() {
      return (
          <div>
              <ScrollUpButton 
                StopPosition={0}
                ShowAtPosition={150}
                EasingType='easeOutCubic'
                AnimationDuration={500}
                ContainerClassName='ScrollUpButton__Container'
                TransitionClassName='ScrollUpButton__Toggled'
                style={{width: 30}}
                ToggledStyle={{right: 100}}               
            />
          </div>
      );
  }
}


