/*eslint comma-spacing: 0, key-spacing: 0, quotes: 0, quote-props: 0 */

const dummyUser = [

{"ZFIRSTNAME": 'Alex', "ZLASTNAME": 'Karalanian', "email":"ak123@ak123.com","ZFULLNUMBER": '646-709-3510',"isUser":true,"imageUrl":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAikAAAAJGNkZGExNzM1LWRhYTUtNGQ3ZC05MTA5LWMwNzY0MWQxMmRjYw.jpg","password":"1234", "guid":"7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED"},

{"ZFIRSTNAME":"Dan","ZLASTNAME":"Lowe","ZFULLNUMBER":'864-710-7357',"isUser":true,"isAdmin":true,"imageUrl":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAnLAAAAJDVmNDg0MGZjLTFhNDYtNGU2Zi04MTRkLWM1ZDAwZGU3NjUzMQ.jpg","password":"1234"},

{"ZFIRSTNAME":"Menaka","ZLASTNAME":"Sampath","email":"menakasampath@gmail.com","ZFULLNUMBER":"215-280-1707","isUser":true,"imageUrl":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAASDAAAAJGY4MmFjNTg5LTEzMzItNDAwYy1hMzJkLTczNjM4NTgwMmJjNw.jpg","password":"1234"},

{"ZFIRSTNAME":"Eric","ZLASTNAME":"Yang","ZFULLNUMBER":"(321)-321-4321","isUser":true,"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAdDAAAAJGVlNWFiMDUwLTg2ZGQtNDgwMS05NmIxLWUyNTJmMDc3MTllOQ.jpg","password":"1234"},

{"ZFIRSTNAME":"Andrew","ZLASTNAME":"Kahn","ZFULLNUMBER":"(215)-555-5555","isUser":true,"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png","password":"1234"},
]

const dummyMessages = [
          {content: 'Hey, Dan here.', ZFULLNUMBER: '864-710-7357', is_sender: 0, uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1481078441000'},
          {content: 'Did you like the property I showed you?', ZFULLNUMBER: "(215)-555-5555", is_sender: 1, uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1581078441000'},
          {content: 'I just got the pastrami from Open Market, so gooooood!!!!!!', ZFULLNUMBER: '864-710-7357', is_sender: 0, uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '900000'},
          {content: 'Dude, where have you been??', ZFULLNUMBER: "(321)-321-4321", is_sender: 0, uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '78441000'},
          {content: 'I baked banana bread!', ZFULLNUMBER: "215-280-1707", is_sender: 0, uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1490713234000'},
          {content: 'For some reason eric says i remind him of ben wyatt', ZFULLNUMBER: '864-710-7357', is_sender: 0, uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1490713234000'},
        ]


module.exports = { dummyUser, dummyMessages };
