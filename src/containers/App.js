import Navigation from '../components/Navigation/Navigation';
import About2 from '../components/About2/About2';
import Projects from '../components/Projects/Projects';
import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
import './App.css';
import React , {useState , useEffect, useMemo} from 'react';

function App({initialroute}) {
  const [scrolled, setScrolled] = useState(false)
  const [scrollheight, setScrollheight ] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [route, setRoute] = useState(initialroute)
  const [popup, setPopup] = useState(false)
  const [popupContent, setPopupContent] = useState({img:'', title:'', text:''})
  const [laptop, setLaptop] = useState(true)

  const routeChange = (route) => {
    setRoute(route)
  }

  const popupContentChange = (content) => {
    setPopupContent(content)
  }

  const popupChange = (value) => {
    setPopup(value)
  }

  const scrollToElement = (id, here) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: here });
    }
  };

  const scroll = () => {
    if (window.pageYOffset > 1) {
      setHidden(true);
      setScrolled(true);
    } else {
      setHidden(false);
      setScrolled(false);
    }
    }

  const checkLaptop = () => {
    if (window.innerWidth > 640) {
      setLaptop(true);
    } else {
      setLaptop(false);
    }
  }

  useMemo(() => {
    checkLaptop();
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated')
        }
      })
    })

    const animateLeft = document.querySelectorAll('.animateLeft')
    const animateRight = document.querySelectorAll('.animateRight')
    const animateTitle = document.querySelectorAll('.animateTitle')

    animateLeft.forEach((el) => {observer.observe(el)})
    animateRight.forEach((el) => {observer.observe(el)})
    animateTitle.forEach((el) => {observer.observe(el)})

  }, [route])
  

  useEffect(() => {
    if (route === 'home') {
      window.scrollTo({
        top: 0
      })
    } else {
      scrollToElement(route, 'start');
    }
  }, [route])
  
  useEffect(() => {
    window.addEventListener('resize', checkLaptop)
    window.addEventListener('scroll', scroll)
    window.addEventListener('scroll', () => {
      setScrollheight(window.pageYOffset)
    })
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
    if (!laptop && !scrolled) {
      setHidden(true);
    }
  }, [scrolled, laptop])

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
      <main>
        <div className='background'></div>
        <Home/>
        <About2/>
        <Projects
          popupContentChange={popupContentChange}
          popup={popup}
          popupChange={popupChange}
          popupContent={popupContent}
        />
        <Contact/>
      </main>
    </div>
  );
}

export default App;