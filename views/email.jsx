var React = require("react");
var DefaultLayout = require('./layout');

class emailInvite extends React.Component {
    render() {

        return (
            <html>
            <head>
            <link rel="stylesheet" type="text/css" href="css/style2.css"/>

            </head>

            <DefaultLayout>

            <div className = "container">

                    <h1> SUCCESSFUL! </h1>
                    <p> We will e-mail you the e-invite shortly </p>
                    <div className = "gif">
                    <div className="tenor-gif-embed" data-postid="12348454" data-share-method="host" data-width="100%" data-aspect-ratio="1.0">
                    <a href="https://tenor.com/view/mail-download-send-letter-email-gif-12348454">Mail Download GIF</a>from <a href="https://tenor.com/search/mail-gifs">Mail GIFs</a></div>
                    <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
                    </div>

                </div>

            </DefaultLayout>

            </html>
        )
    }
}

module.exports = emailInvite;