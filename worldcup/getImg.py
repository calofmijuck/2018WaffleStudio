import urllib.request

print('Beginning file download with urllib2...')

url = 'https://pokemon-trainer.com/images/sprite/xyorasani/'
saveloc = './img/'
gif = '.gif'
n = 721
for i in range(n, 99, -1):
    urllib.request.urlretrieve(url + str(i) + gif, saveloc + str(i) + gif)
    print("Saved" + str(i))
for i in range(99, 9, -1):
    urllib.request.urlretrieve(url + '0' + str(i) + gif, saveloc + str(i) + gif)
# for i in range(9, 0, -1):
    # urllib.request.urlretrieve(url + '00' + str(i) + gif, saveloc + str(i) + gif)
