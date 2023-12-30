from flask import Flask, render_template

app = Flask(__name__)


# This is to handle any routing error - esp. 404
@app.errorhandler(404)
def error(error):
    return render_template("error.html"), 404


@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html")


@app.route("/about-us")
def about_us():
    return render_template("about-us.html")


if __name__ == "__main__":
    app.run(debug=True)
