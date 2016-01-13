var links = [
    {'link': '/static/html/about.html', 'title': 'Мы'},
    {'link': '/static/html/club.html', 'title': 'Клуб'},
    {'link': '/static/html/price.html', 'title': 'Стоимость'},
    {'link': '/static/html/cafe-wma.html', 'title': 'WMA кафе'},
    {'link': '/static/html/blog.html', 'title': 'Блог'},
    {'link': '#map', 'title': 'Контакты'},
    {'link': '#win1', 'title': 'Запись в клуб'},
]

var MainMenu = React.createClass({displayName: "MainMenu",
    render: function() {
        var rowsLinks = []
        this.props.links.forEach(function(prop, key) {
            rowsLinks.push(React.createElement(MenuLink, {
                key: key, 
                link: prop.link, 
                title: prop.title}
            ))
        }.bind(this))

        return (
            React.createElement("div", {className: "navbar navbar-inverse navbar-fixed-top"}, 
                React.createElement("div", {className: "navbar-inner"}, 
                    React.createElement("div", {className: "container"}, 
                        React.createElement("a", {className: "btn btn-navbar", "data-toggle": "collapse", "data-target": ".nav-collapse"}, 
                            React.createElement("span", {className: "icon-bar"}), 
                            React.createElement("span", {className: "icon-bar"}), 
                            React.createElement("span", {className: "icon-bar"})
                        ), 
                        React.createElement("a", {className: "brand", href: "index.html"}, React.createElement("img", {src: '/static/img/logo-sm.png'})), 
                        React.createElement("div", {className: "nav-collapse collapse"}, 
                            React.createElement("ul", {className: "nav"}, 
                                React.createElement("li", null, "+7 (499) 600 40 70"), 
                                rowsLinks
                            )
                        )
                    )
                )
            )
        )
    },
})


var MenuLink = React.createClass({displayName: "MenuLink",
    render: function() {
        return (
            React.createElement("li", null, React.createElement("a", {href: this.props.link}, this.props.title))
        )
    }
})

React.render(
    React.createElement(MainMenu, {links: links}), 
    document.getElementById('main-menu')
)


