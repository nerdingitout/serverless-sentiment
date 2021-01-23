from textblob import TextBlob
from ibmcloudant.cloudant_v1 import CloudantV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibmcloudant.cloudant_v1 import Document, CloudantV1
authenticator = IAMAuthenticator('UK-0lDYQNUHnrEWvCnQtH_-hG2AwRhQ0BUkUGs1atROs')
service = CloudantV1(authenticator=authenticator)
service.set_service_url('https://cbed9894-316b-43db-8d39-94a253532c6c-bluemix.cloudantnosqldb.appdomain.cloud')
text = '''
i  hate you
'''
blob = TextBlob(text)
print(blob.sentiment)
products_doc = Document(
  id="small-appliances:1000042",
  type=blob.polarity)

response = service.post_document(db='sample', document=products_doc).get_result()

print(response)
