import React from "react"
import ReactDom from "react-dom"
import "./style.scss"

// const MyComponent = () => <h1>Webpack &amp; React</h1>

class Image extends React.Component {
    constructor(props) {
        super()
        this.state = {
            title: "Travis Wall",
            imgSrc: "./src/shaping-sound.jpg"
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.props.caption}</p>
                <div><img src={this.state.imgSrc} /></div>
            </div>
        )
    }
}

ReactDom.render(
    <Image caption="Shaping Sound Dance Troupe" />,
            document.getElementById("react-container")
)

// class Message extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <p>{this.props.message}</p>
//             </div>
//         )
//     }
// }

// ReactDom.render(
//     <Message title="email alex" message="can you email him?" />,
//     document.getElementById("react-container")
// )

// ReactDom.render(
//     <MyComponent />,
//     document.getElementById("react-container")
// )


// const arr = [
//     "javascript", 
//     "node", 
//     "webpack", 
//     "react"
// ]
// console.log("arr: ", arr)