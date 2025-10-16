from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/data.csv')
def get_csv():
    return send_from_directory('.', 'data.csv')

if __name__ == '__main__':
    app.run(debug=True)