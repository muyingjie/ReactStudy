import React from "react";
import ReactDOM from "react-dom";

import InfoItem from "InfoItem/InfoItem.jsx";

require("./index.css");

let data = [
    {date: '今天', time: '11:20', name: 'Matt', content: '你好', avatar: require("InfoItem/img/matt.jpg")},
    {
        date: '今天', time: '11:20', name: 'Jenny', content: '你好', avatar: require("InfoItem/img/molly.jpg"),
        subComment: [
            { time: '11:20',name: 'Sal', content: '你好', avatar: require("InfoItem/img/molly.jpg")},
            { time: '11:20',name: 'Jenny', content: '你好', avatar: require("InfoItem/img/jenny.jpg")},
            { time: '11:20',name: 'Elliot', content: '你好', avatar: require("InfoItem/img/elliot.jpg")},
            { time: '11:20',name: 'Molly', content: '你好', avatar: require("InfoItem/img/molly.jpg")}
        ]
    },
    {date: '今天', time: '11:20', name: 'Molly', content: '你好', avatar: require("InfoItem/img/molly.jpg")},
    {date: '今天', time: '11:20', name: 'Elliot', content: '你好', avatar: require("InfoItem/img/matt.jpg")},
    {date: '昨天', time: '11:20', name: 'Sal', content: '你好', avatar: require("InfoItem/img/molly.jpg")},
    {date: '昨天', time: '11:20', name: 'Mike', content: '你好', avatar: require("InfoItem/img/matt.jpg")},
    {date: '前天', time: '11:20', name: 'Sal', content: '你好', avatar: require("InfoItem/img/molly.jpg")},
    {
        date: '前天', time: '11:20', name: 'Hurley', content: '你好', avatar: require("InfoItem/img/matt.jpg"),
        subComment: [
            {
                time: '11:20',name: 'Sal', content: '你好', avatar: require("InfoItem/img/molly.jpg"),
                subComment: [
                    {
                         time: '11:20',name: 'Sal', content: '你好', avatar: require("InfoItem/img/molly.jpg"),
                        subComment: [
                            { time: '11:20',name: 'Molly', content: '你好', avatar: require("InfoItem/img/molly.jpg")}
                        ]
                    },
                    { time: '11:20',name: 'Jenny', content: '你好', avatar: require("InfoItem/img/jenny.jpg")},
                    { time: '11:20',name: 'Elliot', content: '你好', avatar: require("InfoItem/img/elliot.jpg")},
                    { time: '11:20',name: 'Molly', content: '你好', avatar: require("InfoItem/img/molly.jpg")}
                ]
            }
        ]
    },
    {date: '前天',  time: '11:20', name: 'Ben', content: '你好', avatar: require("InfoItem/img/matt.jpg")},
    {date: '前天',  time: '11:20', name: 'Jane', content: '你好', avatar: require("InfoItem/img/molly.jpg")}
];

class App extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        let aInfoList = this.props.data;
        let aInfoDOMList = aInfoList.map((info, i) => (
            <InfoItem info={info} key={i} />
        ));
        return <div>{aInfoDOMList}</div>;
    }
}

ReactDOM.render(
    <App data={data} />,
    document.getElementById("root")
);