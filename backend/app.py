#!flask/bin/python
from textblob import TextBlob
from ibmcloudant.cloudant_v1 import CloudantV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibmcloudant.cloudant_v1 import Document, CloudantV1
from flask import Flask, jsonify, abort, request
import uuid 
from flask_cors import CORS
import os

authenticator = IAMAuthenticator(os.environ['apikey'])
service = CloudantV1(authenticator=authenticator)
service.set_service_url(os.environ['url'])
app = Flask(__name__)
CORS(app)
@app.route('/api/post_sentiment', methods=['POST'])
def post_sentiment():
    if not request.json or not 'text' in request.json:
        abort(400)
    blob = TextBlob(request.json['text'])
    print(blob.sentiment)
    products_doc = Document(id="sentiment:"+ uuid.uuid4().hex[:6].lower(),sentiment=blob.polarity, text=request.json['text'])
    response = service.post_document(db='sample', document=products_doc).get_result()
    return jsonify({'message': 'succesfully posted to cloudant', "text": request.json['text'], "sentiment": blob.polarity }), 201

if __name__ == '__main__':
    app.run(debug=True, port=8080)