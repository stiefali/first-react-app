import React from 'react';

type WelcomeProps = {
    name?: string;
}
type WelcomeStates = {
    time: string;
}
class Welcome extends React.Component<WelcomeProps, WelcomeStates>{

    timer: any;

    tick()
    {
        this.setState({time: new Date().toLocaleTimeString()});
    }

    constructor(props: WelcomeProps)
    {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };

       // this.tick = this.tick.bind(this);
       
    }

    componentDidMount()
    {
        this.timer = setInterval(()=> this.tick(), 1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.timer);
    }

    render()
    {
        return <div>
            <h1>Welcome to react {this.props.name}</h1>
            <p>Es ist {this.state.time}</p>
        </div>;
    }
}

export default Welcome;