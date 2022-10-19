import Rainbow from "../hoc/Rainbow";

const About = () => {
    return (
        <section className="container">
            <h4 className="center text-blue">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, incidunt. Accusamus temporibus dignissimos ducimus consequatur error exercitationem voluptatem, itaque fuga.</p>
        </section>
    )
}

export default Rainbow(About);