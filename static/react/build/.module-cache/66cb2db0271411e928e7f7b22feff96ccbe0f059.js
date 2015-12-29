var MainMenu = React.createClass({displayName: "MainMenu",
    render: function() {
        return (
            React.createElement("div", null, 
            React.createElement("nav", {
                className: "navbar navbar-inverse navbar-fixed-top"
            }
            )
            )
        );
    },
})


React.render(
    React.createElement(MainMenu, null), 
    document.getElementById('main-menu')
)
