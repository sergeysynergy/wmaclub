var MainMenu = React.createClass({displayName: "MainMenu",
    render: function() {
        return (
            React.createElement("nav", {className: "navbar navbar-inverse navbar-fixed-top"}, 
            React.createElement("div", {className: "container"}
            )
            )
        );
    },
})


React.render(
    React.createElement(MainMenu, null), 
    document.getElementById('main-menu')
)
