

const Rainbow = (WrappedComponent) => {

    const colors = ['blue', 'red', 'pink']

    const randomColor = colors[Math.floor(Math.random() * 3)]

    const className = randomColor + '-text'

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}></WrappedComponent>
            </div>
        )

    }
}

export default Rainbow;