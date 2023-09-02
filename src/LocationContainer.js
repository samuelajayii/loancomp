import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Location from './Location';
const LocationContainer = () => {
    

    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Location name='Messaging'/>
                    </Route>
                    <Route path='/wallet'>
                        <Location name='Wallet'/>
                    </Route>
                </Switch>
            </Router>
        </div>
        
        
    )
}
export default LocationContainer