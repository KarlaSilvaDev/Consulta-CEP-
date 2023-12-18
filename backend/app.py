from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)


@app.route("/api/consulta_cep/<cep>", methods=["GET"])
def consulta_cep(cep):
    try:
        via_cep_url = f"https://viacep.com.br/ws/{cep}/json"
        response = requests.get(via_cep_url)

        response.raise_for_status()

        data = response.json()
        return jsonify(data)

    except Exception as e:
        print(e)


app.run(debug=True)
