

import flask 
from flask import request, url_for, jsonify, flash
from flask_cors import CORS, cross_origin
import json
import requests

enable_headers = False

app = flask.Flask(__name__)

app.config["DEBUG"] = True
CORS(app)

@app.route('/', methods=["GET"])

def home():
    return json.dumps({"error": None, "message": 'test'})


@app.route('/post1', methods=['POST'])
def post1():
    return json.dumps({"error": None, "message": 'post'})    
    #res = {}    
    # try:
    #     headers_validator = headersValidators(request.headers)
    #     if not headers_validator["error"]:
    #         data = request.get_json()
    #         id_job = data['id_job'] if data.get('id_job') else None
    #         if id_job!= None:
                
    #             values = get_pendingjob(id_job)
                
    #             res['error'] = None
    #             res['message'] = 'OK'
    #             res['status'] = values['status']

    #             process = values['process']
    #             aux = []
    #             for proc in process:
    #                 aux.append({'name': proc['name'], 'result': proc['result']})    
    #             res['process'] = aux
    #             print('res:', res)
    #             return json.dumps(res) 
    #         else:
    #             res['error'] = True
    #             res['message'] = 'BAD REQUEST'
    #             return json.dumps(res)
    #     else:
    #         return json.dumps(res)
    # except Exception as e:
    #     print(e)  
    #     res = {}
    #     res['error']= True
    #     res['message']= str(e) 
    #     return json.dumps(res)  


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5006, debug=False)
