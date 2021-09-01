import React ,{useState} from 'react'
import "./Projects.scss";


const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
          id: "1",
          icon: "",
          title: "Experience",
          desc:
            "⚡Working as Microsoft Student Learn Ambassador- (formerly called Microsoft Student Partners). ",
          desc1:"⚡Interning at Geniobits Technology",
          desc2:"⚡worked as intern in The sparks Foundation",
          img: "",
          URL:"https:..twitter.com"
        },
        {
          id: "2",
          icon: "",
          title: "Certification",
          desc:"⚡Microsoft Learn Student Ambassador 2021",
          desc1:"⚡Communication Foundations-linkedin",
          desc2:"⚡Web Development outline course-GirlScript Foundation",
          desc3:"⚡google community days india ",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
      //   {
      //     id: "3",
      //     icon: "",
      //     title: "Works",
      //     desc:
      //       "⚡Lorem ",
      //     img:
      //       "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      //   },
       ];



      const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };

    return (
        <div className="projects" id="projects">
          
      
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

{data.map((d) => (
    <div className="container">
        <div className="item">
            <div className="left">
                <div className="leftcontainer">
                    {/* <div className="imgcontainer">
                        <img src={d.icon} alt="" />
                        </div> */}
                        <h2>{d.title}</h2> 
                        
                        <p>{d.desc}</p>
                        
                        <p>{d.desc1}</p>
                  
                        <p>{d.desc2}</p>
                    
                        <p>{d.desc3}</p>
                        <span> and more ..</span>

                </div>
            </div>
            <div className="right">
            <img
      src="	http://sdfsystems.com/wp-content/uploads/2019/07/Web-Developer-sdf-systems.jpg"
      alt=""
    />
            </div>
        </div>
    </div>
))}
</div>


<img
 src="u/arrow.png"
className="arrow left"
alt=""
onClick={() => handleClick("left")}
/>
<img
src="u/arrow.png"
className="arrow right"
alt=""
onClick={() => handleClick()}
/>

        </div>
    )
}

export default Projects
