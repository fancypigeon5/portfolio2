import Navigation from '../components/Navigation/Navigation';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Home from '../components/Home/Home';
import HomeVideo from '../components/Video/Video';
import Contact from '../components/Contact/Contact';
import laptopvideo from '../components/Video/laptop-opening.mp4';
import phonevideo from '../components/Video/phone.mp4';
import './App.css';
import React , {useState , useEffect, useMemo} from 'react';

function App({initialroute}) {
  const [scrolled, setScrolled] = useState(false)
  const [scrollheight, setScrollheight ] = useState(0)
  const [hidesite, setHidesite] = useState(true)
  const [hidden, setHidden] = useState(false)
  const [route, setRoute] = useState(initialroute)
  const [phone, setPhone] = useState(phonevideo)
  const [laptop, setLaptop] = useState(true)
  const [resize, setResize] = useState(1)

  const routeChange = (route) => {
    setRoute(route)
  }

  const handlePhone = () => {
    let e = window.innerWidth;
    setResize(e);
    if (e < 640) {
      setPhone(phonevideo);
      setLaptop(false)
    } else {
      setPhone(laptopvideo);
      setLaptop(true)
    }
  }

  useMemo(() => {
    handlePhone();
  }, [])
  
  
  

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scroll = () => {
    if (window.pageYOffset > 1) {
      setHidden(true);
      setScrolled(true);
    } else if(laptop && (route !== 'homevideo')){
      setHidden(false);
      setScrolled(false);
    } else if(!laptop || (route === 'homevideo')){
      setHidden(true);
      setScrolled(false);
    }
  }

  useEffect(() => {
    if (route === 'homevideo' || route === 'home') {
      window.scrollTo({
        top: 0
      })
    } else {
      scrollTo(route);
    }
  }, [route])
  
  useEffect(() => {
    window.addEventListener('resize', handlePhone);
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
  }, [scrollheight])

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
    if (route === 'homevideo' && !scrolled) {
      setHidden(true);
    } else if (!laptop && !scrolled) {
      setHidden(true);
    }
  }, [route, scrolled, laptop])

  useEffect(() => {
    let nav = document.querySelector('nav');

    if (scrolled) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  }, [scrolled])
  
  useEffect(() => {
    if (!laptop) {
        let pages = document.querySelector('.pages');
        pages.classList.add('bars');
    }
  }, [laptop])


  return (
    <div className="App">
      <Navigation  laptop={laptop} routeChange={routeChange}/>
        {
          route === 'homevideo'
            ? <main><HomeVideo resize={resize} phone={phone} laptop={laptop} hidesite={hidesite} routeChange={routeChange} scrollheight={scrollheight}/></main>
            : <main>
                <div className='background'></div>
                <Home resize={resize} scrollheight={scrollheight}/>
                <About/>
                <Projects/>
                <Contact/>
              </main>
        }
    </div>
  );
}

export default App;