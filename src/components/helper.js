function onChangeHandler(e) {
    let input = e.target.name
    this.setState({
        [input]: e.target.value,
        })
    
    
}

function submitHandler(e) {
    e.preventDefault()
    this.setState({
        editing: false,
    })
}

const hover = (e) => {
    console.log(e.target)
}
// function


export {onChangeHandler, submitHandler, hover}