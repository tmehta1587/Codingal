
from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)
users = {}
@app.route("/")
def home():
    return render_template("Login Page.html")
app.route("/Registration Page.html", methods=["GET", "POST"])
def register():
    msg = ""
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        email = request.form["email"]
        users[username] = {
            "password": password,
            "email": email
        }

        return redirect(url_for("Login Page.html"))
    return render_template("Registration Page.html", msg=msg)
@app.route("/Login Page.html", methods=["Get", "POST"])
def login():
    msg = ""
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
    if username in users and users[username]["password"] == password:
        return redirect(url_for("welcome page.html", username=username))

    else : 
        msg = "Invalid username or password"
    return render_template("Login Page.html", msg=msg)
@app.route("/Welcome Page.html")
def welcome(username):
    return render_template("Welcome Page.html", username=username)
if __name__ == "__main__":
    app.run(debug=True)