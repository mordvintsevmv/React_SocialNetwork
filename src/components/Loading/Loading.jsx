import LoadingGIF from '../../img/9gu9.gif'
import LoadingCSS from './Loading.module.css'
const Loading = () => {
    return (<div className={LoadingCSS.gif_block}>
        <img src={LoadingGIF} width="400px" alt=""/>
    </div>)
}

export default Loading;