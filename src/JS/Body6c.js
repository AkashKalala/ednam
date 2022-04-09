import {content} from './Body6cinfo.js'
import '../CSS/Body6c.css'

function Body6c({para, title, urllink}){
    return(
        <div className='b6c'>
            {
                content.map((content, index) => {
                    return <Article key={content.id} {...content} />
                })
            }
        </div>
    );
}

const Article = ({para, title, urllink}) => {
    return(
        <article className='b6c1'>
            <div className='b6c2'>
                <div className='b6para'>
                    <h1>{title}</h1>
                    <p>{para}</p>
                    <a href={urllink}>
                        <button className="buttonclass">Click to Continue</button>
                    </a>
                </div>
            </div>
        </article>
    );
} 

export default Body6c;