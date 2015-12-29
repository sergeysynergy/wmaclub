var Timeline = React.createClass({displayName: "Timeline",
    loadDataFromServer: function() {
        var gfilter = {"options":{"rmzero":"true","radius":"byDegree"}}
        gfilter = encodeURIComponent(JSON.stringify(gfilter))
        $.ajax({
            // url по которому на стороне сервера формируется массив атрибутов узлов в формате json
            url: '/json-timeline/' + gid + '/' + gfilter + '/',
            dataType: 'json',
            cache: false,
            success: function(data) {
                //console.log(data.nodes[0])
                this.setState({nodes: data.nodes})
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString())
            }.bind(this)
        })
    },
    getInitialState: function() {
        return {
            // Ассоциативный массив состояний группы чекбоксов
            checkboxGroupState: {},

            // Входной массив атрубутов
            nodes: [],
        }
    },
    componentDidMount: function() {
        // Получаем массив атрибутов с сервера в формате json
        this.loadDataFromServer()
        //console.log(Array.isArray(this.props.children)); // => true
        //console.log(this.props.children.length)
    },
    handleUpdate: function() {
        //console.log('timeline')
    },
    updateNodeBar: function() {
        number = React.Children.count(this.props.children)
        console.log(number)
        //console.log(React.findDOMNode(this.refs.theNodeBar))
        //React.findDOMNode(this.refs.theNodeBar).handleUpdate()
        //number React.Children.count(object NodeBar)
        var children = React.Children.map(this.props.children, function(child, i) {
            console.log('Setting width: ')
            //child.props.style = {width: (i*this.state.width)+'px'}
            return child
        }, this)
    },
    render: function() {
        var rows = []
        this.state.nodes.forEach(function(prop, key) {
            // Формируем массив rows дочерних компонентов
            if (prop.transfers) {
                rows.push(React.createElement(NodeBar, {
                    key: key, 
                    ref: "theNodeBar", 
                    reactKey: key, 
                    transfers: prop.transfers, 
                    transfersNumber: prop.transfersNumber}
                ))
            }
        }.bind(this))

        return (
            React.createElement("svg", {
                width: "1050", 
                height: "380", 
                className: "timeline"
            }, 
                React.createElement(MonthNav, {
                    x: "20", 
                    y: "340", 
                    reClick: this.updateNodeBar}
                )
            )
        )
    },
})


var NodeBar = React.createClass({displayName: "NodeBar",
    getDefaultProps: function() {
        return {
            height: 20,
        }
    },
    getInitialState: function() {
        var key = this.props.reactKey
        return {
            offset: key*this.props.height + key,
            //color: randcolor(),
            color: "lightblue",
        }
    },
    componentDidMount:function(){
        //console.log(this.getDOMNode())
    },
    handleUpdate: function() {
        console.log('nodebar',this.props.reactKey)
    },
    render: function() {
        var rows = []
        this.props.transfers.forEach(function(prop, key) {
            // Формируем массив rows дочерних компонентов
            rows.push(React.createElement(MonthBar, {
                key: key, 
                month: prop.month, 
                number: prop.number}
            ))
        }.bind(this))

        return (
            React.createElement("g", {className: "node-bar"}, 
                React.createElement("rect", {
                    width: this.props.transfersNumber*20, 
                    height: this.props.height, 
                    y: this.state.offset, 
                    fill: this.state.color, 
                    className: "transfers-number", 
                    onClick: this.handleUpdate}
                ), 
                rows
            )
        )
    },
})


var MonthBar = React.createClass({displayName: "MonthBar",
    render: function() {
        return (
            React.createElement("div", {className: "month-bar"}, 
                this.props.month, 
                "-", 
                this.props.number
            )
        )
    },
})


var MonthNav = React.createClass({displayName: "MonthNav",
    getInitialState: function() {
        return {
            months: '123456789'.split(''),
        }
    },
    componentDidMount: function() {
        //console.log(this.props.children.length)
    },
    handleClick: function() {
        console.log(this.props.children)
        console.log('handleclick')
        console.log(this.props.children.length)
    },
    render: function() {
        rows = []
        this.state.months.forEach(function(month, key) {
            rows.push(React.createElement(MonthNavUnit, {
                key: key, 
                reactKey: key, 
                reClick: this.props.reClick}
            ))
        }.bind(this))

        return (
            React.createElement("g", {
                onClick: this.handleClick, 
                transform: "translate(" + this.props.x + "," + this.props.y + ")", 
                className: "month-nav"
            }, 
                React.createElement("div", null), 
                rows
            )
        )
    },
})


var MonthNavUnit = React.createClass({displayName: "MonthNavUnit",
    getDefaultProps: function() {
        return {
            width: 40,
            height: 40,
        }
    },
    getInitialState: function() {
        var key = this.props.reactKey
        return {
            x: key*this.props.width + key*10,
        }
    },
    handleClick: function() {
        console.log('monthnavunit',this.props.reactKey)

        // Передаём обработку клика родительскому компоненту
        if (typeof this.props.reClick === 'function') {
            this.props.reClick()
        }
    },
    render: function() {
        return (
            React.createElement("rect", {
                width: this.props.width, 
                height: this.props.height, 
                x: this.state.x}
                //onClick={this.handleClick}
            )
        )
    },
})


//React.render( <Timeline />, mountNode)


var GraphFilter = React.createClass({displayName: "GraphFilter",
    getInitialState: function() {

        return {
        }
    },
    handleSubmit: function(e) {
        //e.preventDefault()

        //this.setState({ filterNodes: nodesList }) 
        
        // Перерисовываем граф
        //this.graphUpdate()        
    },
    render: function() {
        return (
            React.createElement("form", {onSubmit: this.handleSubmit, ref: "GraphFilterForm"}, 
                React.createElement("input", {type: "submit", className: "btn btn-warning", value: "Отфильтровать"})
            )
        )
    },
})


React.render(
    React.createElement(GraphFilter, null),
    document.getElementById('graph-filter')
);


var GenericWrapper = React.createClass({displayName: "GenericWrapper",
  componentDidMount: function() {
    console.log(Array.isArray(this.props.children)); // => true
    //console.log(this.props.children.length);
  },

  render: function() {
    return (
        React.createElement("div", null, 
            React.createElement(Chil, {title: "one"}), 
            React.createElement(Chil, {title: "two"})
        )
    )
  }
});

var Chil = React.createClass({displayName: "Chil",
    render: function() {
        return (
            React.createElement("div", null, 
                this.props.title
            )
        )
    },
})

var ListItemWrapper = React.createClass({displayName: "ListItemWrapper",
  handleClick: function() {
        this.props.reClick()
    },
  render: function() {
    return React.createElement("li", {onClick: this.handleClick}, this.props.data);
  },
});
var MyComponent = React.createClass({displayName: "MyComponent",
  componentDidMount: function() {
    console.log(Array.isArray(this.props.children)); // => true
    //console.log(this.props.children.length);
  },
    handleClick: function() {
        console.log('re')
    },
  render: function() {
    var results = [
        {"id": "1","data":"one"},
        {"id": "2","data":"two"},
    ]
    return (
      React.createElement("ul", null, 
        results.map(function(result) {
           return React.createElement(ListItemWrapper, {key: result.id, ref: 'chil' + result.id, data: result.data, 
                reClick: this.handleClick}
            );
        })
      )
    );
  }
});

React.render( React.createElement(MyComponent, null), mountNode)
