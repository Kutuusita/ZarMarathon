import s from './layout.module.css';

const Layout = ({ title, descr, urlBg, colorBg }) => {

    const backgroundImage = urlBg ? { backgroundImage: `url(${urlBg})` } : {};
    const backgroundColor = colorBg ? { backgroundColor: colorBg } : {};
    const bgStyle = Object.assign({}, backgroundImage, backgroundColor);
    console.log(bgStyle);
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
                    <div className="desc full">
                        <p>{ descr }</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;