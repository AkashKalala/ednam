import '../CSS/Content.css'
import {content} from './info.js'

function Content({img, heading, para}) {

    return(
        <section className="content">
            {content.map((content, index) => {
                return <Article key={content.id} {...content} />
            })
            }
        </section>
    );
}

const Article = ({img, heading, para}) => {
    return(
        <article className="article">
                <img src={img} alt="img" className="img"></img>
                <div className="text">
                    <div className="innertext">
                        <h1>{heading}</h1>
                        <p>{para}</p>
                    </div>
                </div>
        </article>
    );    
}

export default Content;