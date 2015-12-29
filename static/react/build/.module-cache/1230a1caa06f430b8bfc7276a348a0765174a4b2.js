var MainMenu = React.createClass({displayName: "MainMenu",
    render: function() {
        return (
            React.createElement("nav", {className: "navbar navbar-inverse navbar-fixed-top"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "navbar-header"}
                    ), 
                    React.createElement("div", {className: "navbar-collapse collapse"}, 
                        React.createElement("ul", {className: "nav navbar-nav"}
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
