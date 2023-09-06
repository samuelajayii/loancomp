import TopNav from './TopNav';
import Messaging from './Messaging';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Wallet from './Wallet';
import LocationContainer from './LocationContainer';
import SideNav from './SideNav';

const App = () => {
    return(
        <Router>
            <div className='md:flex md:flex-row md:ml-2'>
                <SideNav />
                <div className='flex flex-col w-full mr-2'>
                    <TopNav />
                    <LocationContainer/>
                    <Switch>
                        <div className='bg-white py-4 px-5 rounded-xl flex h-full mb-3 w-full '>
                            <Route exact path="/">
                                <Messaging />
                            </Route>
                            <Route path="/wallet">
                                <Wallet/>
                            </Route>
                        </div>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
export default App