import s from './layout.module.css';

const Layout = ({ title, urlBg, colorBg, children }) => {

    const backgroundImage = urlBg ? { backgroundImage: `url(${urlBg})` } : {};
    const backgroundColor = colorBg ? { backgroundColor: colorBg } : {};
    const bgStyle = Object.assign({}, backgroundImage, backgroundColor);
    
    return (
        <section className={s.root} style={ bgStyle } >
            <div className={s.wrapper}>
                <article>
                    { title &&
                        (<div className={s.title}>
                            <h3>{ title }</h3>
                            <span className="separator"></span>
                        </div>) 
                    }
                    <div className={`${s.desc} ${s.full}`}>
                        { children }
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;