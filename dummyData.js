/*eslint comma-spacing: 0, key-spacing: 0, quotes: 0, quote-props: 0 */

const dummyUser = [{"username":"ak123","ZFIRSTNAME":"a","ZLASTNAME":"k","email":"ak123@ak123.com","ZFULLNUMBER":"111-111-1111","isUser":true,"imageUrl":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAikAAAAJGNkZGExNzM1LWRhYTUtNGQ3ZC05MTA5LWMwNzY0MWQxMmRjYw.jpg","password":"1234"},
{"username":"dammdaniel","ZFIRSTNAME":"damm","ZLASTNAME":"daniel","email":"dammdaniel@whatarethose.com","ZFULLNUMBER":"222-222-2222","isUser":true,"isAdmin":true,"imageUrl":"http://i.dailymail.co.uk/i/pix/2016/02/26/21/31734FC200000578-0-Popular_The_original_clip_has_been_retweeted_over_260_000_times_-m-67_1456522238590.jpg","password":"1234"},
{"username":"menaka","ZFIRSTNAME":"menaka","ZLASTNAME":"menaka","email":"menaka@idareyoutosaymynamewrong.lol","ZFULLNUMBER":"333-333-3333","isUser":true,"imageUrl":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAASDAAAAJGY4MmFjNTg5LTEzMzItNDAwYy1hMzJkLTczNjM4NTgwMmJjNw.jpg","password":"1234"},
{"username":"bambam","ZFIRSTNAME":"bambam","ZLASTNAME":"bambam","email":"bambam@bambam.com","ZFULLNUMBER":"555-555-5555","isUser":true,"imageUrl":"http://dummyimage.com/153x114.bmp/ff4444/ffffff","password":"bambam"},
{"ZFIRSTNAME":"Leila","ZLASTNAME":"Karalanian","email":"Leila@issodarncute.com","ZFULLNUMBER":"777-777-7777","isUser":false},
{"ZFIRSTNAME":"Rachel","ZLASTNAME":"Armstrong","ZFULLNUMBER":"55-(222)608-4605"},
{"ZFIRSTNAME":"Carol","ZLASTNAME":"Ruiz","ZFULLNUMBER":"86-(396)850-2099"},
{"ZFIRSTNAME":"Catherine","ZLASTNAME":"Griffin","ZFULLNUMBER":"55-(150)285-2050"},
{"ZFIRSTNAME":"Stephanie","ZLASTNAME":"Grant","ZFULLNUMBER":"48-(494)214-8714"},
{"ZFIRSTNAME":"Heather","ZLASTNAME":"Gonzales","ZFULLNUMBER":"358-(150)444-2844"},
{"ZFIRSTNAME":"Roger","ZLASTNAME":"Allen","ZFULLNUMBER":"46-(701)237-3051"},
{"ZFIRSTNAME":"Frances","ZLASTNAME":"Mills","ZFULLNUMBER":"63-(418)589-9155"},
{"ZFIRSTNAME":"Amy","ZLASTNAME":"Nichols","ZFULLNUMBER":"86-(690)561-1202"},
{"ZFIRSTNAME":"Betty","ZLASTNAME":"Morgan","ZFULLNUMBER":"48-(677)738-7416"},
{"ZFIRSTNAME":"Richard","ZLASTNAME":"Ramirez","ZFULLNUMBER":"7-(874)987-7180"},
{"ZFIRSTNAME":"Nicholas","ZLASTNAME":"West","ZFULLNUMBER":"98-(597)819-6061"},
{"ZFIRSTNAME":"Denise","ZLASTNAME":"Coleman","ZFULLNUMBER":"237-(958)972-6253"},
{"ZFIRSTNAME":"Marie","ZLASTNAME":"Reed","ZFULLNUMBER":"46-(841)908-7476"},
{"ZFIRSTNAME":"Julia","ZLASTNAME":"Alexander","ZFULLNUMBER":"86-(200)938-9457"},
{"ZFIRSTNAME":"Theresa","ZLASTNAME":"Lopez","ZFULLNUMBER":"53-(132)565-7846"},
{"ZFIRSTNAME":"Terry","ZLASTNAME":"Carr","ZFULLNUMBER":"34-(112)651-6712"},
{"ZFIRSTNAME":"Marie","ZLASTNAME":"Morales","ZFULLNUMBER":"353-(286)604-2271"},
{"ZFIRSTNAME":"Judy","ZLASTNAME":"Morales","ZFULLNUMBER":"86-(737)841-3570"},
{"ZFIRSTNAME":"Heather","ZLASTNAME":"Hicks","ZFULLNUMBER":"1-(176)450-2568"},
{"ZFIRSTNAME":"Joseph","ZLASTNAME":"Lawrence","ZFULLNUMBER":"502-(770)922-9429"},
{"ZFIRSTNAME":"Steve","ZLASTNAME":"Carpenter","ZFULLNUMBER":"62-(748)327-3884"},
{"ZFIRSTNAME":"Raymond","ZLASTNAME":"Clark","ZFULLNUMBER":"46-(411)224-2351"},
{"ZFIRSTNAME":"Clarence","ZLASTNAME":"Fisher","ZFULLNUMBER":"33-(409)900-5897"},
{"ZFIRSTNAME":"Amanda","ZLASTNAME":"Stevens","ZFULLNUMBER":"86-(633)608-9447"},
{"ZFIRSTNAME":"Kelly","ZLASTNAME":"Martin","ZFULLNUMBER":"86-(663)381-6704"}]

const dummyMessages = [{"content":"cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin","date":510483447,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero","date":511329302,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"nec sem duis aliquam convallis nunc proin at turpis a","date":512001149,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies","date":511789298,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius","date":511909346,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet","date":509365743,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas","date":508231535,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec","date":509437881,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor","date":508554641,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum","date":511587927,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"non mi integer ac neque duis bibendum morbi non quam nec dui","date":511253503,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse","date":509883272,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus","date":508009814,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed","date":508787686,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse","date":511470778,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum","date":510848465,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis","date":507854582,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent","date":507058188,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci","date":507164102,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum","date":511766584,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse","date":509416146,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis","date":508507804,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque","date":507835046,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo","date":509502793,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam","date":508475979,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"ligula vehicula consequat morbi a ipsum integer a nibh in quis justo","date":511732082,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet","date":508786005,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt","date":509120436,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu","date":509503768,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat","date":507002777,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"duis aliquam convallis nunc proin at turpis a pede posuere nonummy","date":508659506,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam","date":510197127,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis","date":508730182,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis","date":510481646,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam","date":510584514,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat","date":511304855,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent","date":509923607,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien","date":507470714,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"nunc proin at turpis a pede posuere nonummy integer non velit donec diam","date":511442642,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"risus praesent lectus vestibulum quam sapien varius ut blandit non","date":508732819,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"molestie lorem quisque ut erat curabitur gravida nisi at nibh","date":507027415,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum","date":508321587,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin","date":507753515,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo","date":507063482,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum","date":511229482,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id","date":508436777,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam","date":511300829,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor","date":511515080,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes","date":509189685,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea","date":509661479,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi","date":510766838,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at","date":508040760,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget","date":510609277,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at","date":510137971,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus","date":511216589,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"purus aliquet at feugiat non pretium quis lectus suspendisse potenti in","date":508160008,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non","date":507235928,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget","date":511765594,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi","date":509870719,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam","date":508264811,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"tellus nisi eu orci mauris lacinia sapien quis libero nullam","date":510377337,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam","date":507750189,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor","date":507202855,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"at velit eu est congue elementum in hac habitasse platea dictumst morbi","date":510144150,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat","date":507466377,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien","date":508225287,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla","date":507364670,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus","date":510185142,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at","date":508206735,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla","date":507346386,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"porttitor pede justo eu massa donec dapibus duis at velit eu","date":509639203,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla","date":508212329,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus","date":507919126,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere","date":510688141,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed","date":509529041,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis","date":510757828,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti","date":509504778,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida","date":511655721,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien","date":512055858,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam","date":511974440,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel","date":510581291,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum","date":511564875,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula","date":509842074,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci","date":508324006,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna","date":509594289,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus","date":507277319,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque","date":509116415,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor","date":510561705,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus","date":509014222,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed","date":507375289,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in","date":508664158,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla","date":511974395,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet","date":510294725,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa","date":508057901,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in","date":509279963,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa","date":509799717,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"eleifend pede libero quis orci nullam molestie nibh in lectus","date":508272780,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in","date":511345215,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras","date":507236880,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam","date":507276119,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan","date":507866146,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam","date":507406883,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut","date":508357297,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet","date":508461409,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa","date":507443145,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio","date":510746301,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus","date":507904208,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer","date":507889537,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et","date":508650907,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec","date":507366897,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis","date":511834553,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec","date":510413354,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante","date":509287786,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo","date":507182646,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at","date":510239761,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"est phasellus sit amet erat nulla tempus vivamus in felis eu sapien","date":511599410,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat","date":511736885,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"neque duis bibendum morbi non quam nec dui luctus rutrum nulla","date":508763046,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae","date":511274686,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"justo morbi ut odio cras mi pede malesuada in imperdiet et","date":508298878,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor","date":510846209,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis","date":511112380,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a","date":507594717,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque","date":509044666,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in","date":511967657,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed","date":507160097,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in","date":510577923,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"orci luctus et ultrices posuere cubilia curae duis faucibus accumsan","date":511391927,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna","date":508459717,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas","date":510004246,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl","date":510720699,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis","date":508041186,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis","date":509277074,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"a odio in hac habitasse platea dictumst maecenas ut massa quis","date":509951293,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu","date":510114126,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"cursus vestibulum proin eu mi nulla ac enim in tempor","date":507903214,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue","date":508997376,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec","date":510967065,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque","date":508420040,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero","date":510594893,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor","date":508717851,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue","date":510708735,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue","date":510200356,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla","date":511998810,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti","date":507954532,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit","date":509497872,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum","date":510800250,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt","date":511430026,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar","date":508759781,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit","date":511862453,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium","date":508084454,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus","date":507490281,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit","date":511111230,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et","date":511871338,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac","date":510704342,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet","date":511003654,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget","date":510201349,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum","date":510112278,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula","date":508750236,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti","date":510266897,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel","date":509338376,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"semper rutrum nulla nunc purus phasellus in felis donec semper sapien a","date":507207066,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam","date":508665032,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem","date":511275069,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum","date":509351548,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam","date":510031374,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices","date":507429086,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien","date":510884177,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque","date":507302470,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus","date":511836764,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer","date":509246578,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget","date":508363248,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis","date":508338290,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices","date":510164466,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim","date":508598267,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio","date":511633268,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit","date":507573730,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque","date":508368966,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin","date":508314757,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel","date":507237775,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac","date":509693968,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non","date":509315814,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus","date":509112504,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"urna ut tellus nulla ut erat id mauris vulputate elementum","date":507778782,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum","date":511041796,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti","date":510238637,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum","date":509808177,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante","date":507365770,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu","date":506972720,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed","date":508955309,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed","date":507137985,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi","date":508767928,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra","date":510492934,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"sapien sapien non mi integer ac neque duis bibendum morbi non quam nec","date":510152054,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit","date":509123659,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero","date":511626587,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante","date":509992595,"is_sender":1,"ZFULLNUMBER":'777-777-7777'},
{"content":"nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit","date":509483357,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere","date":510493138,"is_sender":0,"ZFULLNUMBER":'777-777-7777'},
{"content":"eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula","date":511414315,"is_sender":1,"ZFULLNUMBER":'777-777-7777'}]


module.exports = { dummyUser, dummyMessages };
