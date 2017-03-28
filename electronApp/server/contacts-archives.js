// GET EMAIL BODY (parsed HTML)
// router.get('/gmailbody', function(req, res, next){

// 	Oauth.findOne({
// 		where: {user_id: req.user.id}
// 	})
// 	.then(authUser => {

// 		let gmail = new Gmail(authUser.accessToken)
// 		let messages = gmail.messages('label:inbox', {max: 1} )
// 		messages.on('data', function(response){

// 			if (response.payload.body.size === 0) {

// 				let bodyArray = []
				
// 				response.payload.parts.forEach( i => {
					
// 					let base64 = i.body.data
// 					let buff = Buffer.from(base64, 'base64')
// 					bodyArray.push(simpleParser(buff))
// 				})

// 				Promise.all(bodyArray)
// 				.then(bodyarray => {
// 					res.json(bodyarray)
// 				})
// 				.catch(error => {
// 					console.log(error)
// 					next(error)
// 				})

// 			} else {

// 				let base64 = response.payload.body.data
// 				let buff = Buffer.from(base64, 'base64')
// 				simpleParser(buff)
// 				.then( results => {
// 					console.log(results)
// 					res.json(results)
// 				})
// 				.catch(error => {
// 					console.log(error)
// 					next(error)
// 				})
// 			}
			
// 		})
// 	})
// })

// LIST ALL EMAIL (SNIPPETS) (w/ pagination)
// VIEW SINGLE EMAIL (render HTML correctly)
// 

// router.get('/gmail', function(req, res, next){

// 	Oauth.findOne({
// 		where: {user_id: req.user.id}
// 	})
// 	.then(authUser => {

// 		let gmail = new Gmail(authUser.accessToken)
// 		let messages = gmail.messages('label:inbox', {
// 			max: 3,
// 			format: 'metadata'
// 		})

// 		messages.on('data', function(response){
// 			let snippet = response.snippet
// 			let headers = response.payload.headers
// 			res.json([snippet, headers])
// 		})
// 	})
// })