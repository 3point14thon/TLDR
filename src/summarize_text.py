from sklearn.feature_extraction.text import TfidfVectorizer
from nltk import sent_tokenize
import numpy as np

def summarizer(text, num_res=1):
    '''
    Outpust num_res amount of the most important sentinces in the input text
    based on the sum of the tfidf vector for each sentince.

    Args:
        text: A string of text to be summarized
        num_res: The number of responses desired as an integer, default 1

    Returns:
        The top num_res sentinces that represent the input text based on the
        sum of its tfidf values per sentince (using sentinces as documents)
        as a string.
    '''
    num_res = num_res + 1
    sen = sent_tokenize(text)
    vectorizor = TfidfVectorizer(stop_words='english')
    vec_sen = vectorizor.fit_transform(sen)
    top = np.array(np.argsort(vec_sen.sum(axis=1).flatten()))
    top_lines = []
    for line in top[0][:-num_res:-1]:
        top_lines.append(sen[line])
    return '\n'.join(top_lines)
