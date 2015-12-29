mainMenuLinks = [
    {'link': '/force-react/', 'title': 'Граф-react'},
    {'link': '/force-react/', 'title': 'Граф-react'},
    {'link': '/force-react/', 'title': 'Граф-react'},
    {'link': '/force-react/', 'title': 'Граф-react'},
]


var MainMenu = React.createClass({displayName: "MainMenu",
    render: function() {
        var linksRows = []
        this.props.properties.forEach(function(prop, key) {
            // Формируем массив rows дочерних компонентов
            rows.push(React.createElement(CMCheckboxButton, {
                key: key, 
                display: prop.display, 
                value: prop.value, 
                checked: prop.checked, 
                onChange: this.handleChange, 
                onClick: this.handleReClick}
            ))
        }.bind(this))

        return (
            React.createElement("nav", {className: "navbar navbar-inverse navbar-fixed-top"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "navbar-header"}
                    ), 
                    React.createElement("div", {id: "navbar", className: "navbar-collapse collapse"}, 
                        React.createElement("ul", {className: "nav navbar-nav"}, 
                            linksRows
                        )
                    )
                )
            )
        );
    },
})


React.render(
    React.createElement(MainMenu, null), 
    document.getElementById('main-menu')
)
