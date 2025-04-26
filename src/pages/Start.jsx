import {  Contact, Feedbacks, Hero, Navbar,  StarsCanvas,Whytochoose,Courses } from "../components";

const Home = () => {
    return (
      
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <Whytochoose />
          <Courses />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      
    );
  }
  
  export default Home;