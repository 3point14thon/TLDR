from bs4 import BeautifulSoup
from bs4.element import Comment
import urllib.request

def paragraphs_from_html(url):
    '''
    Returns the text tagged as paragraph from the specified url.

    Args:
        url: url to grab paragraph text from as a string.

    Returns:
        Returns the text tagged as paragraph from the specified url.
    '''
    html = urllib.request.urlopen(url).read()
    soup = BeautifulSoup(html, 'html.parser')
    texts = soup.findAll('p')
    return " ".join(t.text for t in texts)
