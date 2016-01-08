var links = [
    {'link': '/about/', 'title': 'Мы'},
    {'link': '/club/', 'title': 'Клуб'},
    {'link': '/price/', 'title': 'Стоимость'},
    {'link': '/cafe-wma/', 'title': 'WMA кафе'},
    {'link': '/blog/', 'title': 'Блог'},
    {'link': '#map', 'title': 'Контакты'},
    {'link': '#win1', 'title': 'Запись в клуб'},
]

var MainMenu = React.createClass({
    render: function() {
        var rowsLinks = []
        this.props.links.forEach(function(prop, key) {
            rowsLinks.push(<MenuLink 
                key={key}
                link={prop.link}
                title={prop.title}
            />)
        }.bind(this))

        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="navbar-inner">
                    <div className="container">
                        <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </a>
                        <div className="nav-collapse collapse">
                            <ul className="nav">
                                <li>+7 (499) 600 40 70</li>
                                {rowsLinks}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
})
                        //<a className="brand" href="index.html"><img src={'../img/logo-sm.png'} /></a>


var MenuLink = React.createClass({
    render: function() {
        return (
            <li><a href={this.props.link}>{this.props.title}</a></li>
        )
    }
})

React.render(
    <MainMenu links={links} />, 
    document.getElementById('main-menu')
)


