import React  from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import './withLoading.css'

function WithLoading(Component) {

    return function WihLoadingComponent({ isLoading, ...props }) {
      
        if (isLoading)
        {
            return (
                <div className="preloader">
                <div className="loader">
                    <div className="line-scale">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                </div>
            );
        }      

        return (<Component {...props} />);
    }
  }

export default WithLoading;