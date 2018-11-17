from bs4 import BeautifulSoup
from bs4.element import Comment
import urllib.request

def paragraphs_from_html(url):
    html = urllib.request.urlopen(url).read()
    text = text_from_html(html)
    soup = BeautifulSoup(body)
    texts = soup.findAll('p')
    return " ".join(t.text for t in texts)
