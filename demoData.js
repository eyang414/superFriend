/*eslint comma-spacing: 0, key-spacing: 0, quotes: 0, quote-props: 0 */

const dummyUser = [

{"ZFIRSTNAME": 'Alex', "ZLASTNAME": 'Karalanian', "email":"ak123@ak123.com","ZFULLNUMBER": '+13334445555',"isUser":true,"imageUrl":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAikAAAAJGNkZGExNzM1LWRhYTUtNGQ3ZC05MTA5LWMwNzY0MWQxMmRjYw.jpg","password":"1234", "guid":"7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED"},

{"ZFIRSTNAME":"Dan","ZLASTNAME":"Lowe","ZFULLNUMBER":'+86-(123)-123-1234',"isUser":true,"isAdmin":true,"imageUrl":"http://i.dailymail.co.uk/i/pix/2016/02/26/21/31734FC200000578-0-Popular_The_original_clip_has_been_retweeted_over_260_000_times_-m-67_1456522238590.jpg","password":"1234"},

{"ZFIRSTNAME":"Menaka","ZLASTNAME":"Sampath","email":"menakasampath@gmail.com","ZFULLNUMBER":"215-280-1707","isUser":true,"imageUrl":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAASDAAAAJGY4MmFjNTg5LTEzMzItNDAwYy1hMzJkLTczNjM4NTgwMmJjNw.jpg","password":"1234"},

{"ZFIRSTNAME":"Eric","ZLASTNAME":"Yang","ZFULLNUMBER":"(321)-321-4321","isUser":true,"imageUrl":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAASDAAAAJGY4MmFjNTg5LTEzMzItNDAwYy1hMzJkLTczNjM4NTgwMmJjNw.jpg","password":"1234"},

{"ZFIRSTNAME":"BamBam","ZLASTNAME":"Sampath","ZFULLNUMBER":"555-555-5555","isUser":true,"imageUrl":"https://s-media-cache-ak0.pinimg.com/736x/45/a4/e1/45a4e1a9dcddbd936c5586419842e397.jpg","password":"bambam"}]


const dummyMessages = [
          {content: 'Hey, Dan here', ZFULLNUMBER: '1231231234', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1481078441000'},
          {content: 'Are we going to stop coding soon?', ZFULLNUMBER: '1231231234', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1490713234000'},
          {content: 'Hello, this is your neighbor. You have a delivery.', ZFULLNUMBER: '1231231234', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1481078451000'},
          {content: 'so hungry', ZFULLNUMBER: '1231231234', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1481878441000'},
          {content: 'Did you listen to that song I sent you?', ZFULLNUMBER: '1231231234', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1581078441000'},
          {content: 'ummmmm', ZFULLNUMBER: '1231231234', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1481073441000'},
          {content: 'I just got the pastrami from Open Market, so gooooood!!!!!!', ZFULLNUMBER: '1231231234', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '900000'},
          {content: 'woof.', ZFULLNUMBER: '1112223333', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1681078441000'},
          {content: '*looks at your food with ridic sad puppy eyes and furrowed eyebrows*', ZFULLNUMBER: '1112223333', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1490713234000'},
          {content: '*sigh/*gaveuponfunfortheday', ZFULLNUMBER: '1112223333', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1481073441000'},
          {content: 'you want some coffee?', ZFULLNUMBER: '2223334444', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '78441000'},
          {content: 'bambam come here!', ZFULLNUMBER: '2223334444', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1481073441000'},
          {content: 'Hey guys I baked banana bread again', ZFULLNUMBER: '2223334444', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1490713234000'},
          {content: 'My baby is adorable', ZFULLNUMBER: '3334445555', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '394857093487'},
          {content: 'For some reason eric says i remind him of ben wyatt', ZFULLNUMBER: '3334445555', uploader_id: '7A6AABC4-BC1E-4A9F-8F37-E4B0F59661ED', date: '1490713234000'},
          {content: 'HEAD FELLOW IN CHAAAARGE!', ZFULLNUMBER: '3845747293', uploader_id: 'thiscanbeanything', date: '1490713572000'},
          { content: 'LOL', ZFULLNUMBER: '3845747293', uploader_id: 'thiscanbeanything', date: '1490713234000' }
        ]


module.exports = { dummyUser, dummyMessages };
