
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="header">
                <img width={40} height={40} src="https://www.logodesignlove.com/wp-content/uploads/2022/11/carebibi-logo-01-1200x1200.jpeg" alt="img" />
            </header>
            <nav className="nav">
                <a href="!#">Profile</a>
                <a href="!#">Messages</a>
                <a href="!#">News</a>
                <a href="!#">Music</a>
                <a href="!#">Settings</a>
            </nav>
            <div className="content">
                <div>
                    <img src="https://media.tproger.ru/uploads/2016/10/reactmini.png" alt="background" />
                </div>
                <div>
                    ava + descr
                </div>
                <div>
                    my posts
                    <div>new post</div>
                    <div>opost 1</div>
                    <div>opost 2</div>
                </div>

            </div>
        </div>
    );
}

export default App;
