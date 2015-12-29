var MainMenu = React.createClass({displayName: "MainMenu",
    render: function() {
        return (
            React.createElement("div", null, 
                "MainMenu"
            )
        );
    },
})


React.render(
    React.createElement(MainMenu, null), 
    document.getElementById('main-menu')
)
