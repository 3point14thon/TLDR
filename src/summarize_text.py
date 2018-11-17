from sklearn.feature_extraction.text import TfidfVectorizer
from nltk import sent_tokenize
import numpy as np

def summarizer(text, num_res=1):
    '''
    Outpust num_res amount of the most important sentinces in the input text
    based on the sum of the tfidf vector for each sentince.

    Args:

    '''
    num_res = num_res * -1 -1
    sen = sent_tokenize(text)
    vectorizor = TfidfVectorizer(stop_words='english')
    vec_sen = vectorizor.fit_transform(sen)
    top = np.array(np.argsort(vec_sen.sum(axis)))
    return top[:-num_res:-1]
