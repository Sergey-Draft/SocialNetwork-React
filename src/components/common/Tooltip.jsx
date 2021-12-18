import React from 'react';
import ReactDOM from 'react-dom';
import s from './Tooltip.module.css'


class Tooltip extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            opacity: false
        }
    }

    toggle() {
        const toolTipNode = ReactDOM.findDOMNode(this)
        this.setState({
            opacity: !this.state.opacity,
            top: toolTipNode.offSetTop,
            left: toolTipNode.offSetLeft
        })
    }

    render(){
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) +30,
            left: (this.state.left || 0) -35,
            position: 'absolute'
        }



        return (
            <div style={{display: 'inline', position: 'relative'}}>
                <span style={{color: 'blue'}}
                                onMouseEnter = {this.toggle}
                                onMouseOut = {this.toggle}
                >

                    {this.props.children}
                </span>
                 <div style={style} className={s.toolTip}  >
                    {this.props.text}
                 </div>
            </div>
        )
    }

}



export default Tooltip;