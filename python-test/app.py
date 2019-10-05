from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "I am inside a container!"

@app.route("/hello")
def hello():
    return "Hello!!!"

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)