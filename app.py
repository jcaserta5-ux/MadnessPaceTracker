from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

# Fetch games from ESPN API
@app.route('/games', methods=['GET'])
def get_games():
    # Logic to fetch games from ESPN API goes here
    # For demonstration, return a static response
    response = [
        {'team1': 'Team A', 'team2': 'Team B', 'date': '2023-03-20', 'time': '18:00'},
        {'team1': 'Team C', 'team2': 'Team D', 'date': '2023-03-20', 'time': '20:00'},
    ]
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)