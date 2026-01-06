import style from "../styles/about.module.css"
const About =()=>{
    return(
        <div className={style.about_container}>
            <div className={style.title}>
                <p>About Obesi<span>Scan</span></p>
            </div>
            <div className={style.content}>
                <p className={style.content_text}><strong><span>Obesi</span>Scan</strong> is a platform focused on predicting obesity levels while also featuring comprehensive obesity blogs. We are committed to delivering precise, current insights into obesity, including its causes, associated health risks, and effective prevention methods. Our goal is to increase public understanding of obesity's multifaceted nature and encourage healthier living through educational articles and valuable resources. We firmly believe that informed education on obesity empowers people to take control of their health and make better lifestyle choices.</p>
                
            </div>
        </div>
    )
}
export default About;