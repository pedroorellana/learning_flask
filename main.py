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
        parser.add_argument('cuerpo', type=str)
        args = parser.parse_args() # json de request
        cuerpo = args['cuerpo']
        top3ClasesS, top3ProbS, labelsS, pred_probS, top3ClasesT, top3ProbT, labelsT, pred_probT  = clasifier.predict(cuerpo)

        claTop3T=[]
        for clase, prob in zip(top3ClasesT, top3ProbT) :
            claTop3T.append({"tema" : clase,"probTema" : str( round(prob,2))} )

        claTop3S=[]
        for clase, prob in zip(top3ClasesS, top3ProbS) :
            claTop3S.append({"seccion" : clase,
                            "probSeccion" : str( round(prob,2)),
                            "claTema" : [] })

        claTop3S[0].update({"claTema":claTop3T})

        return {
        'status' : True,
        "claSec":claTop3S
        }         
#paths
api.add_resource(root, '/') 
api.add_resource(clasifiNotic, '/api/altavoz/beta/clasificador') 



if __name__ == '__main__':
    api.app.run(debug=True, host= '0.0.0.0', port=5005)