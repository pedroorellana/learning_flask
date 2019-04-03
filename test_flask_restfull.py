from flask import Flask 
from flask_restful import Resource, Api, reqparse



app = Flask(__name__)
api = Api(app)
parser = reqparse.RequestParser()


class root(Resource):
    def get(self):
        return {'quote': ['api clasificadora de noticias'] }    
        

class clasifiNotic(Resource):   
    def post(self):
        """ recive tipo x-www-form-urlencoded """
        parser.add_argument('input1', type=str)
        args = parser.parse_args() # json de request
        input1 = args['input1']


        return {
        'status' : True,
        "input1":input1
        }         
#paths
api.add_resource(root, '/') 
api.add_resource(clasifiNotic, '/post') 



if __name__ == '__main__':
    api.app.run(debug=True, host= '0.0.0.0', port=5005)