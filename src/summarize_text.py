from sklearn.feature_extraction.text import TfidfVectorizer
from nltk import sent_tokenize
import numpy as np

def main(text, num_res):
    num_res = num_res * -1 -1
    sen = sent_tokenize(text)
    vectorizor = TfidfVectorizer(stop_words='english')
    vec_sen = vectorizor.fit_transform(sen)
    top = np.array(np.argsort(vec_sen.sum(axis)))
    return top[:-num_res:-1]
