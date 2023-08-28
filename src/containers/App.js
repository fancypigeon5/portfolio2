import Navigation from '../components/Navigation/Navigation';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Home from '../components/Home/Home';
import HomeVideo from '../components/Video/Video';
import './App.css';
import React , {useState , useEffect} from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollheight, setScrollheight ] = useState(0)
  const [hidesite, setHidesite] = useState(true)
  const [hidden, setHidden] = useState(false)
  const [route, setRoute] = useState('homevideo')

  const routeChange = (route) => {
    setRoute(route)
  }

  const scroll = () => {
    if (window.pageYOffset > 1) {
      setHidden(true);
      setScrolled(true);

    } else {
      setHidden(false);
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [route])
  
  useEffect(() => {
    window.addEventListener('scroll', scroll);
    window.addEventListener('scroll', () => {
      if (window.pageYOffset < 1300) {
        setHidesite(true);
      } else {
        setHidesite(false)
      }
    });
    window.addEventListener('scroll', () => {
      setScrollheight(window.pageYOffset)
    })
    
    return function cleanup() {
      window.removeEventListener('scroll', scroll);
    }
  }, [])

  const showMenu = () => {
    setHidden(false);
  }

  const hideMenu = () => {
    setHidden(true);
  }

  useEffect(() => {
    let nav = document.querySelector('nav');

    if (hidden) {
      nav.classList.add('hidden')
    } else {
      nav.classList.remove('hidden')
    }
  }, [hidden])

  useEffect(() => {
    let button = document.querySelector('#button');

    if (hidden) {
      button.addEventListener('click', showMenu)
    }

    return function cleanup() {
      button.removeEventListener('click', showMenu)
    }
  }, [hidden])

  useEffect(() => {
    let button = document.querySelector('#button');
    
    if (!hidden) {
      button.addEventListener('click', hideMenu)
    }
    return function cleanup() {
      button.removeEventListener('click', hideMenu)
    }
  })

  useEffect(() => {
    let nav = document.querySelector('nav');

    if (scrolled) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  }, [scrolled])
  
  return (
    <div className="App">
      <Navigation routeChange={routeChange} hidden={hidden}/>
        {
          route==='homevideo'
            ? <HomeVideo hidesite={hidesite} routeChange={routeChange} scrollheight={scrollheight}/>  
            : (route === 'home'
                ? <Home routeChange={routeChange} scrollheight={scrollheight}/>
                : (route==='about'
                  ? <About/>
                  : (route === 'projects'
                      ?<Projects/>
                      :<main className='test'>not about</main>  
                    )
                  )
              )          
        }
    </div>
  );
}

export default App;
