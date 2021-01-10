from flask import Flask, render_template
from bs4 import BeautifulSoup
import requests
from flask_cors import CORS

source = requests.get('https://webscraper.netlify.com/').text
soup = BeautifulSoup(source, 'lxml')

head = soup.find("main").select_one("article:nth-of-type(4)").div.text

app = Flask(__name__)
CORS(app)

@app.route('/walkins/<city>', methods=['GET'])
def get_clinic(city):
    source = requests.get('https://medimap.ca/Location/<city>').text
    soup = BeautifulSoup(source, 'lxml')

    name = "test"
    address = "test"
    times = "test"

    all_clinics = []

    for i in range(10):
        all_clinics.append({
        'name': name,
        'address': address,
        'times': times})
    
    return jsonify(all_clinics)

app.run(debug=True)

print(head)