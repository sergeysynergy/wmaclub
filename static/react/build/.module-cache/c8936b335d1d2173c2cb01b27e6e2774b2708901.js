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
    },
    render: function() {
        var rows = []
        this.state.nodes.forEach(function(prop, key) {
            // Формируем массив rows дочерних компонентов
            rows.push(React.createElement(NodeBar, {
                key: key, 
                transfers: prop.transfers, 
                transfersNumber: prop.transfersNumber}
            ))
        }.bind(this))

        return (
            React.createElement("div", {className: "node-bars"}, 
            rows
            )
        )
    },
})


var NodeBar = React.createClass({displayName: "NodeBar",
    render: function() {
        var transfers = this.props.transfers
        //console.log(transfers)
        var rows = []
        transfers.forEach(function(prop, key) {
            //console.log(prop.month)
            rows.push(React.createElement(Bar, {
                key: key, 
                month: prop.month, 
                number: prop.number}
            ))
        })
        console.log(rows)
/*
        this.props.transfers.forEach(function(prop, key) {
            // Формируем массив rows дочерних компонентов
            rows.push(<Bar
                key={key}
                month={prop.month} 
                number={prop.number}
            />)
        }.bind(this))
*/

        return (
            React.createElement("div", null, 
                React.createElement("h3", null, this.props.transfersNumber), 
                rows
            )
        )
    },
})


var Bar = React.createClass({displayName: "Bar",
    render: function() {
        return (
            React.createElement("div", null, 
                this.props.month, 
                "-", 
                this.props.number
            )
        )
    },
})


React.render(
    React.createElement(Timeline, null), 
    document.getElementById('timeline')
)
