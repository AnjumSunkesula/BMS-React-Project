import React from "react";

const allCityNames = [
// A
    'Abohar', 'Abu Road', 'Achampet', 'Acharapakkam', 'Addanki',
    'Adilabad', 'Adimali', 'Adipur', 'Adoni', 'Agar Malwa',
    'Aalo', 'Agartala', 'Agiripalli', 'Agra', 'Ahmedgarh',
    'Ahmednagar', 'Ahore', 'Aizwal', 'Ajmer', 'Akaltara', 'Akbarpur',
    'Akividu', 'Akluj', 'Akola', 'Akot', 'Alakode', 'Alangudi', 'Alangulam',
    'Alappuzha', 'Alathur', 'Alibaug', 'Aligarh', 'Alipurduar', 'Almora', 
    'Alsisar(Rajasthan)', 'alur', 'alwar', 'amadalavalasa', 'amalapuram', 'amalner',
    'anamgal', 'amanpur', 'amaravathi', 'ambajogai', 'ambala', 'ambikapur', 'ambur', 'amgaon', 'amravati', 
    'amreli', 'amritsar', 'amroha', 'anaikatti', 'anakapalle', 'anand', 'anandapur', 'anatapalli', 'anantapur',
    'anaparthi', 'anchal', 'andaman and nicobar', 'anekal', 'angadipuram', 'angamaly', 'angara', 'angul', 'anjad', 'anjar',
    'anklav', 'ankleshwar', 'ankola', 'annavaram', 'annigeri', 'anthiyur', 'apra', 'arakkonam', 'arambagh', 'arambol',
    'aranthangi', 'aravakurichi', 'ariyalur', 'arkalgud', 'armoor', 'arni', 'arsikere', 'aruppkottai', 'asansol', 'ashoknagar',
    'ashoknagar(west bengal)', 'ashta', 'ashta(maharashtra)', 'asika', 'aswaraopeta', 'athagarh', 'athani', 'atmakur(nellore)',
    'atpadi', 'atraulia', 'attibele', 'attili', 'attingal', 'attur', 'aurangabad', 'aurangabad(bihar)', 'aurangabad(west bengal)',
    'auroville', 'aushapur', 'avinashi', 'ayodhya', 'azamgarh',
// B
    'b.kothakota', 'badami', 'badaun', 'baddi', 'badhra', 'badnagar', 'badnawar', 'badvel',
    'bagaha', 'bagalkot', 'bagbahara', 'bagepalli', 'bagha purana', 'baghmari', 'bagnan',
    'bagru', 'bahadurgarh', 'bahraich', 'baidyabati', 'baihar', 'bajinath', 'baikunthpur', 'baindur',
    'bakhrahat', 'balaghat', 'balangir', 'balasore', 'balijipeta', 'balod', 'baloda bazar', 'balotra', 'balrampur',
    'balurghat', 'banaganapalli', 'banahatti', 'banaskantha', 'banga', 'bangaon', 'bangarpet',
    'bangarupalem', 'banki', 'bankura', 'banswada', 'banswara', 'bantumilli', 'bapatla', 'barabanki',
    'baramati', 'baramulla', 'baran', 'barasat', 'baraut', 'barbil', 'bardoli', 'bareilly', 'bareja', 'bargarh', 
    'barharwa', 'barhi', 'baripada', 'barmer', 'barnala', 'barpeta road', 'barrackpore', 'barshi', 'baruipur',
    'barqadih', 'barwaha', 'barwani', 'basantpur', 'basirhat', 'basna', 'basti', 'bathinda', 
    'batlagundu', 'bavla', 'bayad', 'bayana', 'bazpur', 'beawar', 'beed', 'beguniapada', 'begusarai',
    'belagavii(belgaum)', 'belakavadi', 'belghoria', 'bellampalli', 'bellary', 'belur', 'bemetara',
    'berachampa', 'berhampore(w.b)', 'berhaampur(odisha)', 'bestavaripeta', 'betalbatim', 'betberia',
    'bethamcherla', 'betul', 'bhadrachalam', 'bhadrak', 'bhadravathi', 'bhagalpur', 'bhainsa',
    'bhandara', 'bharamasagara', 'bharatpur', 'bharuch', 'bhatapara', 'bhatgaon', 'bhatkal', 'bhattiprolu',
    'bhavani', 'bhavnagar', 'bhawanipatna', 'bheemgal', 'bhilai', 'bhilwara', 'bhimadole', 'bhimavaram',
    'bhind', 'bhiwadi', 'bhiwani', 'bhogapuram', 'bhongir', 'bhopal', 'bhubaneshwar', 'bhuj', 'bhuntar', 'bhupalpalle',
    'bhusawal', 'bhutan', 'bhuvanagiri', 'biaora', 'bibinagar', 'bichkunda', 'bidadi', 'bidar', 'bihar sharif', 'bihpuria',
    'bijainagar', 'bijnor', 'bijoynagar', 'bikaner', 'bikramganj', 'bilara', 'bilaspur', 'bilaspur(himachal pradesh)',
    'bilgi', 'bilimora', 'billawar', 'biraul', 'birra', 'bishnupur', 'bishrampur', 'biswanath chariali', 'bobbili', 'bodhan', 
    'bodinayakanur', 'boisar', 'bokaro', 'bolpur', 'bomdila', 'bommidi', 'bonakal', 'bongaigaon', 'bongaon', 'borsad',
    'botad', 'brahmapur', 'brahmapuri', 'brajrajnagar', 'bucchireddypalem', 'budhlada', 'buhari', 'bulandshahr',
    'buldana', 'bundu', 'burdwan', 'burhanpur', 'burhar', 'buttayagudem', 'byadagi', 'byagdi', 'byasanagar',
// C
    'calicut', 'canning', 'chagallu', 'chalakudy', 'chalisgaon', 'challakere', 'challapalli', 'chamrajnagar', 'chamba', 'chamoli', 'champa', 'champahati',
    'chanchal', 'chandannagar', 'chandausi', 'chandbali', 'chandpur siau', 'chandrakona', 'chandrapur', 'chandur', 'changanassery', 'changaramkulam', 'channagiri',
    'channapatna', 'channarayapatna', 'chanpatia', 'charki dadri', 'chaygaon', 'cheeka', 'cheepurupalli', 'chelpur', 'chendrapinni', 'chengalpattu',
    'chengannur', 'chennur', 'chentrapini', 'cherial', 'cherla', 'cherpulassery', 'cherrapunji', 'cherthala', 'chetpet', 'chevella', 'cheyyar', 'cheyyur', 'chhabra', 'chhatarpur',
    'chhatrapati sambhajinagar', 'chhibramau', 'chhindwara', 'chickmaguluru', 'chindambaram', 'chikhli', 'chikkaballapur', 'chikmagulur', 'chikodi', 'chilakaluripet',
    'chinnalapatti', 'chinnamandem', 'chinnamanur', 'chinsurah', 'chintalapudi', 'chintamani', 'chinturu', 'chiplun', 'chiraiykot', 'chirala', 'chirawa', 'chitradurga', 'chittoor',
    'chittorgarh', 'chodavarm', 'chon', 'buri', 'chotila', 'chotuppal', 'churachandapur', 'churu', 'coimbatore', 'colombo', 'cooch behar', 'coonoor', 'coddalore', 'cumbum', 'cumbum(ap)', 'cuttack', 
// D
    'dabra', 'dahanu', 'dahegam', 'dahod', 'dakshin barasat', 'dalli rajhara', 'dalminagar', 'daman', 'dammapeta', 'damoh', 'danapur', 'dandeli', 'dang', 
    'dankaur', 'daporijo', 'darbhanga', 'darjeeling', 'darlapudi', 'darsi', 'darwha', 'dasuya', 'datia', 'daund', 'dausa', 'davanagere', 'davuluru', 'deesa', 'dehradun', 'deogadh',
    'deoghar', 'deoli', 'deoli(rajasthan)', 'deoria', 'devadurga', 'devakottai', 'devarakadra', 'devarakonda', 'devarapalle', 'devarapalli', 'devgad', 'dewas', 'dhamnod', 'dhampur',
    'dhamtari', 'dhanaura', 'dhanbad', 'dhanera', 'dhar', 'dharamjaigarh', 'dharampur', 'dharamsala', 'dharamshala', 'dharapuram', 'dharmanagar', 'dharmapuri', 
    'dharmavaram', 'dharpally', 'dharpur', 'dharuhera', 'dharwad', 'dhemaji', 'dhenkanal', 'dhoolka', 'dholpur', 'dhone', 'dhoraji', 'dhrangadhra', 'dhubri', 'dhule', 'dhulian', 'dhuliyan', 'dhuri', 'diamond harbour', 'dibrugarh', 'digras', 'dildar nagar', 'dima hasao', 'dimapur', 'dinanagar', 'dindigul',
    'diphu', 'dirang', 'doddaballapura', 'doimukh', 'domkal', 'dongargarh', 'doolahat bazar', 'doraha', 'dornakal', 'dowlaiswaram', 'draksharamam', 'dubbaka', 'dubrajpur', 'dudhi', 'dungarpur', 'durg', 'durgapur', 
// E
    'east godavari', 'edappal', 'edlapadu', 'ekma', 'elesvaram', 'eluru', 'enkoor',
    'eramalloor', 'erattupetta', 'ernakulam', 'erode', 'etah', 'etawah', 'ettumanoor', 'eturnagaram',
// F
    'faizabad', 'falakata', 'falna', 'faridkot', 'farrukhabad', 'fatehabad', 
    'fatehgarh sahib', 'fatehpur', 'fatehpur(rajasthan)', 'fazilka', 'firozabad', 'firozpur', 'forbesganj', 'france',
// G
    'g.mamidada', 'gadag', 'gadarwara', 'gadchiroli', 'gadwal', 'gajapathinagaram', 'gajendragarh', 'gajwel', 'gampalagudem', 'ganapavaram', 'gandhidham', 'gandhinagar', 'gangarampur', 'gangavati', 'gangoh',
    'gangtok', 'ganjam', 'ganjbasoda', 'gannavaram', 'garhwal', 'garla', 'gauribidanur', 'gauriganj', 'gaya', 'gazole', 'georai', 'ghatanji', 'ghazipur', 'ghorasahan', 'giddalur', 'gingee', 'giridih', 'goa', 'goalpara',
    'gobichettipalayam', 'godavarikhani', 'godhara', 'gogawa', 'gohana', 'gokak', 'gokarna', 'gokavaram', 'gola bazar', 'golaghat', 'gollaprolu', 'gonda', 'gondal', 'gondia', 'goolikkadavu', 'gooty', 'gopalganj', 'gopalpet',
    'gopiganj', 'gorakhpur', 'goramadagu', 'gorantla', 'gotegaon', 'gownipalli', 'gudivada', 'gudiyatham', 'gudlavalleru', 'gudur', 'guhagar', 'gulaothi', 'guledgudda', 'gummadidala', 'guna', 'gundlupet', 'guntakal',
    'guntur', 'gurap', 'gurazala', 'gurdaspur', 'guruvayur', 'guwahati', 'gwalior', 
// H
    'habra', 'haflong', 'hagaribommanahalli', 'hajipur', 'haldia', 'halduchaur', 'haldwani', 'haliya', 'halol', 'hamirpur(hP)', 'hampi', 'handwara', 'hanuman junction', 'hanumangarh', 'hapur', 'harda', 'hardoi', 'haria', 'haridwar', 'harihar', 'haripad', 'harugeri', 'harur', 
    'hasanparthy', 'hasanpur', 'hasnabad', 'hassan', 'hathras', 'haveri', 'hazaibagh', 'himmatnagar', 'hindaun city', 'hindupur', 'hinganghat', 'hingoli', 'hiramandalam', 'hirekerur',
    'hiriyur', 'hisar', 'holenarasipura', 'honnali', 'honnavara', 'hooghly', 'hoshangabad', 'hoshiarpur', 'hoskote', 'hospet', 'hosur', 'howrah', 'hubbali(hubli)',
    'hunagunda', 'hunsur', 'husnabad', 'huvinahadagali', 'huzurabad', 'huzurnagar',
// I
    'ichalkaranji', 'ichchapuram', 'idappadi', 'idar', 'idukki', 'ieeja', 'imphal',
    'indapur', 'indi', 'indore', 'indukurpeta', 'irinjalkuda', 'itanagar', 'itarasi',
// J
    'jabalpur', 'jadcherla', 'jagalur', 'jagatdal', 'jagdalpur', 'jaggampeta', 'jaggayyapeta', 'jagraon', 'jagtidal', 'jaipur', 'jaisalmer', 'jajpur road', 'jajpur town(odisha)', 'jalakandapuram', 'jalalabad', 'jalandhar jalaun', 'jalgaon', 'jalna', 'jalore', 'jalpaiguri', 'jami', 'jamkhandi', 'jamkhed', 'jammalamadugu', 'jammikunta', 'jammu', 'jamnagar', 'jamner', 
    'jamshedpur', 'jamui', 'jangaon', 'jangareddy gudem', 'janjgir', 'jaora', 'jasdan', 'jashpur', 'jatni', 'jaunpur', 'jayamkondacholapuram',
    'jaysingpur', 'jehanabad', 'jejuri', 'jetpur', 'jewar', 'jeypore', 'jhabua', 'jhajha', 'jhajjar', 'jhansi', 'jhargram', 'jharsuguda', 'jhunjhunu', 'jiagani', 'jigani', 'jind', 'jintur', 'jirapur', 'jodhpur', 'jolarpettai', 'jorhat', 'joynagar majilpur','junagadh', 
// K
    'k.d peta', 'kadakkal', 'kadapa', 'kadi', 'kadiri', 'kadiyam', 'kadthal', 'kaikaluru', 'kaithal', 'kakarapalli', 'kakinada', 'kalaburagi(gulbarga)', 'kalady', 'kalanaur', 'kalimpong', 'kalla', 'kalladikode', 'kallakurichi', 'kallur', 'kalluru', 'kalna', 'kalol(gandhinagar)', 'kalol(panchmahal)', 'kalwakurthy', 'kalyani', 'kamalaapur', 'kamalapur', 'kamanaickenpalayam', 'kamareddy', 'kamavarapukota', 
    'kambainallur', 'kamptee', 'kamrej', 'kanakapura', 'kanatal', 'kanchikacherla', 'kanchipuram', 'kandamangalam', 'kandukur', 'kangayam', 'kangra', 'kanhangad janihaar', 'kanigiri', 'kanipakam', 'kanjirapally', 'kankavli', 'kanker', 'kankipadu', 'kankroli', 'kannauj', 'kannur', 'kanpur', 'kantabanji', 'kanyakumari', 'kapadvanj', 'kapurthala', 'karad', 'karaikal', 'karambakkudi', 'karanja lad', 'karanjia',
    'kareli', 'karepalli', 'kargi road', 'karimangalam', 'karimganj', 'karimnagar', 'kariyad', 'karjat', 'karkala', 'karmala',  'karmamthody', 'karnal', 'karunagapally', 'karur', 'karwar', 'kasargod', 'kasdol', 'kasganj', 'kashig', 'kashipur', 'kashti', 'kasibugga', 'katghora', 'kathipudi', 'kathmandu', 'kathua', 'katihar', 'katni', 'katra', 'katrenikona', 'kattappana', 'katwa', 'kavali', 'kaveripattanam', 'kaviti', 'kawardha',
    'kayamkulam', 'kazipet', 'kekri', 'kendrapara', 'keonjhar', 'kesamudram', 'kesinga', 'kevadia', 'khachrod', 'khadda', 'khajani', 'khajipet', 'khajuraho', 'khalilabad', 'khambhat', 'khamgaon', 'khammam', 'khanapur', 'khandela', 'khandwa', 'khanna', 'kharagpur', 'kharghar', 'khargone', 'Khariar road', 'kharisa', 'khategaon', 'khatima', 'khed', 'kheda', 'khedbrahma', 'khopoli', 'khowai', 'khurja', 'kichha', 'kim', 'kinathukadavu', 'kirlampudi',
    'kishanganj', 'kishangarh', 'kodad', 'kodagu(coorg)', 'kodaikanal', 'kodakara', 'kodaly', 'koderma', 'kodumur', 'kodumuru', 'kodungallur', 'kohima', 'koikuntla', 'kokrajhar', 'kolar', 'kolhapur', 'kollam', 'kollapur', 'kollengode', 'komarapalayam', 'kondagaon', 'kondlahalli', 'konithiwada', 'konni', 'koothattukulam', 'koparagaon', 'koppam', 'koraput', 'korategere', 'korba', 'korutla', 'korwa', 'kosamba', 'kosgi', 'kota', 'kota(AP)', 'kotabommali', 'kotananduru', 'kotdwara', 'kothacheruvu',  'kothagudem', 'kothakota',
    'kothamangalam', 'kothapalli', 'kothapeta', 'kothavalasa', 'kotkapura', 'kotma', 'kotpad', 'kotpuli', 'kottayam', 'kottayi', 'kotturu', 'kovilpatti', 'kovur(nellore)', 'kovvur', 'koyyalagudem', 'kozhikode', 'kozhinjampara', 'krishnagiri', 'krishnanagar', 'krishnarajanagara', 'krishnarajapete(k.r.pete)', 'krosuru', 'kruthivennu', 'kuchaman city', 'kuchipudi', 'kudus', 'kujang', 'kukshi', 'kulithalai', 'kullu', 'kumarakom', 'kumbakonam', 'kumily', 'kunda', 'kundapura', 'kunigal', 'kunkuri', 'kunnamkulam', 'kuravilangad', 'kurnool', 'kurseong', 'kurukshetra', 'kurumaseri', 'kushalnagar', 'kushinagar', 'kutch', 'kuthuparamba',
// L
    'ladakh', 'lakhimpur', 'lakhimpur kheri', 'lakhisarai', 'lakkavaram', 'lakshmeshwara', 'lakshmikantapur', 'lalgudi',
    'lalitpur', 'landsdowne', 'latur', 'lavasa', 'leeja', 'leh', 'lingasugur', 'lohardaga', 'lonar', 'lonavla', 'loni', 'lucknow', 'ludhiana', 'lunawada', 'luxettipet',
// M
    'MUNNAR', 'macherla', 'machilipatnam', 'madalu', 'madanapalle', 'maddur','madhavaram', 'madhepura', 'madhira', 'madikeri', 'madurai', 'magadi', 'mahabaleshwar', 'mahabubabad', 'mahad', 'mahalingpur', 'maharajganj', 'mahasamund', 'mahbubnagar', 'mahemdavad', 'maheshwar', 'maheshwaram', 'mahishadal', 'mahudha', 
    'mahuva', 'makrana', 'makthal', 'malappuram', 'malda', 'malebennur', 'malegaon', 'marlerkotla', 'malikipuram', 'malkangiri', 'malkapur', 'mall', 'malout', 'malur', 'mamallapuram', 'manali', 'manamadurai', 'mananthavady', 'manapparai', 'manawar', 'mancherial', 'mandapeta', 'mandarmoni', 'mandasa', 'mandav','mandawa', 
    'mandi', 'mandi dabwali', 'mandi gobindgarh', 'mandla', 'mandsaur', 'mandwa ','mandya', 'manedragarh', 'mangalgiri', 'mangaldoi', 'mangaluru(mangalore)', 'mangar', 'manikonda(AP)', 'manipal', 'manjeri', 'manmad', 'mannargudi', 'mannarkkad', 'mannur', 'mansa', 'manthani', 'manuguru', 'manvi', 'maraimalai nagar',
    'marayur', 'margao', 'margherita', 'markapur', 'marpalle', 'marripeda', 'marthandam', 'martur', 'math chandipur', 'mathabhanga', 'mathura', 'mathura', 'mattanur', 'mau', 'mavelikkara', 'mayannur', 'mayiladutharai', 'medak', 'medarametla', 'medchal', 'meerut', 'mehkar', 'mehsana', 'melattur', 'melli', 'memari', 'metpally',
    'mettuppalayam', 'mettur', 'mhow', 'miraj', 'miraganj', 'miryalaguda', 'mirzapur', 'moga', 'mohali', 'mokama', 'molakalmuru', 'momnipet', 'moodbidri', 'moradabad','moranhat', 'morbi', 'morena', 'morigaon', 'morinda', 'mothkur', 'mothihari', 'moyna', 'mudalagi', 'muddebihal', 'mudhol', 'midigere', 'mughalsarai', 'mukerian', 'mukkam', 'muktsar',
    'mulbagal', 'mulkanoor', 'mullanpur', 'mulleria', 'mulugu', 'mulugu ghanpur', 'mummidivaram', 'mundakayam', 'mundra', 'mungra badhshahpur', 'muniguda', 'muradnagar', 'murshidabad', 'murtizapur', 'musiri', 'mussoorie', 'muvattupuzha', 'muzaffarnagar', 'muzaffarpur', 'mydukur', 'mylavarm', 'mysuru(mysore)',
// N 
    'nabadwip', 'nabarangpur', 'nabha', 'nadia', 'nadiad', 'nagamangala', 'nagaon', 'nagapattinam', 'nagari', 'nagarkurnool', 'nagaur', 'nagayalanka', 'nagda', 'nagercoli', 'nagothane', 'nagpur', 'naharlagun', 'naidupeta', 'naihati', 'nainital', 'najafgarh', 'najibabad', 'nakhatrana', 'nakodar', 'makrekal', 'nalgonda', 'nallajerla', 'namakkal', 'namchi', 'namkhana', 'namsai', 'nandakumar', 'nanded', 'nandigama', 'nandikotkur', 'nandipet',
    'nandurbar', 'nandyal', 'nanjanagudu', 'nanpara', 'narasannapeta', 'narayankhed', 'narayanpet', 'narayanpur', 'nargund', 'narnaul', 'narsampet', 'narsapur', 'narsapur(medak)', 'marsinghpur', 'marsipatnam', 'narwana', 'nashik', 'natham', 'nathdwara', 'nautanwa', 'navsari', 'nawada', 'nawalgarh', 'nawanshahr', 'nawapara', 'nayagarh', 'nazira', 'nazirpur', 'nedumbassery', 'nedumkandam', 'neelapalli', 'neemrana', 'neemuch', 'nelakondapalli',
    'nelamangala', 'nellimarla', 'nellore', 'nemmara', 'nenmara', 'nepalgunj', 'ner parsopant', 'neral', 'new tehri', 'neyveli', 'nichlaul', 'nidadvolu', 'nilagiri', 'nilakottai', 'nilanga', 'nimapara', 'nimbahera', 'nindra', 'nipani', 'niphad', 'nirjuli', 'nizamabad', 'nokha', 'nooranad', 'nurpur', 'nuzivid', 'nyamathi', 
//O 
    'oddanchatram', 'okha', 'ongole', 'ooty', 'orai', 'orchha', 'osmanabad', 'ottapalam', 
// P
    'p.dharmavaram', 'padampur', 'padrauna', 'padubidri', 'pakala', 'pala', 'palakkad', 'palakollu ','palakonda', 'palakurthy', 'palamner', 'palampur', 'palani', 'palanpur', 'palapetty', 'palasa', 'palghar', 'pali', 'palia kalan', 'palitana', 'palladam', 'pallickathodu', 'pallipalayam', 'palluruthy', 'palwal', 'palwancha', 'pamarru', 'pamidi', 'pamuru', 'panachamoodu', 'panaji', 'panapakkam', 'panchgani', 'panchkula', 'pandalam', 'pandavapura', 'pandhana ',
    'pandharkawada', 'pandharpur', 'pandua', 'panipat', 'panna', 'panruti', 'pansemal', 'paonta sahib',  'papanasam', 'paradeep', 'paralakhemundi', 'parappanangadi', 'paratwada', 'parbhani', 'parchur', 'parigi(telangana)', 'parkal', 'parli', 'parvathipuram', 'parwanoo', 'pasighat', 'patan', 'patan(satara)', 'pathalgaon', 'pathanamthitta', 'pathanapuram', 'pathankot', 'patapatnam', 'pathsala', 'patiala', 'patna', 'patran', 'patratu', 'pattambi', 'pattukkottai', 'pavagada', 
    'payakaraopeta', 'payyanur', 'payyoli', 'pazhayannur', 'pebbair', 'pedana', 'pedanandipadu', 'pedapadu', 'peddapalli', 'peddapuram', 'pen', 'pendra', 'pennagaram', 'penuganchiprolu', 'penugonda', 'peralam', 'perambalur', 'peravoor', 'peringamala', 'peringottukurissi', 'perinthalamanna', 'periyapatna', 'perundurai', 'petlad', 'phagwara', 'phalodi', 'phaltan', 'phulbani', 'piduguralla', 'pilani', 'pileru', 'pilibhit', 'pimpalner', 'pimpri', 'pinjore', 'pipariya', 'pipraich', 'pithampur',
    'pithapuram', 'pithora', 'pithorgarh', 'pitlam', 'pochampally', 'podalakur', 'podili', 'polavaram', 'pollachi', 'pondicherry', 'ponduru', 'ponkunnam', 'ponnamaravathi', 'ponnani', 'ponneri', 'poovar', 'porbandar', 'port blair', 'porumamilla', 'pratapgarh(rajasthan)', 'pratapgarh(UP)', 'prayagraj(allahabad)', 'proddatur', 'pudukkottai', 'pulgaon', 'puliampatti', 'pulivendula', 'puliyangudi', 'pulluvila', 'pulpally', 'punalur', 'punganur', 'puri', 'purnea', 'puruila', 'pusad', 'pusapatirega', 
    'pushkar', 'puthenvelikara', 'puthenvelikkara', 'puthoor', 'puttur(andhra pradesh)', 'puttur(karnataka)', 
// R  
    'rabkavi banhatti', 'radhamoni', 'raebareli', 'raghopur', 'raghunathganj', 'rahata', 'rahimatpur', 'rahuri', 'raibag', 'raichur', 'raigad', 'raiganj', 'raigarh', 'raikal', 'raikot', 'railway koduru', 'rajpur', 'raipuriya', 'raisinghnagar', 'raja ka bagh', 
    'rajakumari', 'rajam', 'rajamahendravaram', 'rajapalayam', 'rajapur', 'rajarampalli', 'rajgangpur', 'rajgurunagar', 'rajina', 'rajkot', 'rajnandgaon', 'rajpipla', 'rajpur', 'rajpura', 'rajsamand', 'rajula', 'ramachandrapuram', 'ramanagara', 'ramanathapuram', 
    'ramayampet', 'ramdurg', 'rameswarpur', 'ramgarh', 'ramgarhwa', 'ramjibanpur', 'ramnagar', 'ramnagara', 'rampachodavaram', 'rampur', 'ramtek', 'ranaghat', 'ranastalam', 'ranchi', 'ranebennur', 'rangia', 'raniganj', 'ranipet', 'ranni', 'rapur', 'rasipuram', 'rath',
    'ratlam', 'ratnagiri', 'ratnagiri(odisha)', 'ravulapalem', 'raxaul', 'rayachoti', 'rayagada', 'rayavaram', 'razole', 'rentachintala', 'renukoot', 'repalle', 'revdanda', 'rewa', 'rewari', 'riBhoi', 'ringas', 'rishikesh', 'rishra', 'rohtak', 'ron', 'rongjeng', 'roorkee', 'rourkela', 'routhulapudi', 'rudauli', 'rudrapur', 'rupnagar', 
// S
    'sabbavaram', 'sadasivpet', 'safidon', 'sagar', 'sagwara', 'saharanpur', 'sahasra', 'sahjanwa', 'sakleshpur', 'sakti', 'salem', 'saligrama', 'salihundam', 'salur', 'samalkota', 'samastipur', 'sambalpur', 'sambhal', 'sambhar', 'samsi', 'sanand', 'sanawad', 'sangamner', 'sangareddy', 'sangaria', 'sangli', 'sangola', 'sangrur', 'sankarankoli', 'sankarapuram', 'sankeshwar', 'sanki', 'santhebennur',  'sanwer', 'saoner', 'saraipali', 'sarangarh', 'sarangpur', 'sarapaka', 'sardhana', 'sardulgarh', 'sarnath', 'sarni', 'sarsiwa', 'sasaram', 'satana', 'satara', 'sathakulam', 'sathupally', 'sathyamangalam', 'satna', 'sattenepalle', 'saundatti', 'sawai', 'madhopur', 'sawantwadi', 'sayan',
    'secundrabad', 'seethanagaram', 'sehmalpur', 'sehore', 'selu', 'semiliguda', 'senapati', 'sendhwa', 'sendurai', 'swngottai', 'seoni', 'seoni malwa', 'serampore', 'shadnagar', 'shahada', 'shahapur', 'shahdol', 'shahjahanpur', 'shahpur', 'shahpura', 'shajapur', 'shamgarh', 'shankarampet', 'shankarpally', 'shankarpur', 'shela', 'sheopur', 'sheorinarayan', 'shikaripur', 'shikarpur', 'shillong', 'shimla', 'shindkheda', 'shirhatti', 'shirali', 'shirpur', 'shirur', 'shivamogga', 'shivpuri', 'shopian', 'shoranur', 'shrirampur', 'shuklaganj', 'siddarthanagar', 'siddhpur', 'siddipet', 'sidlaghatta', 'sijora', 'sikar', 'silchar', 'siliguri', 'silvassa', 'sindhanur', 'sindhudurg', 'singapore',
    'singarayakonda', 'singrauli', 'sinnar', 'sira', 'sircilla', 'sirmaur', 'sirohi', 'sirsa', 'sirsi', 'siruguppa', 'sitamarhi', 'sitapur', 'sivaganga', 'sivakasi', 'sivasagar','siwan', 'solan', 'solapur', 'solukhumbu', 'sompeta', 'sonari', 'songadh', 'sonipat', 'sonkatch', 'soron', 'south 24 paraganas', 'sri ganganagar', 'srikakulam', 'srinagar', 'srirangapatna', 'srivaikuntam', 'srivilliputhur', 'station ghanpur', 'sugauli', 'sujangarh', 'sultanabad', 'sultanpur', 'sultan', 'bathry', 'sundar', 'nagar', 'sundargarh', 'supaul', 'surajpur', 'surat', 'surathkal', 'surendranagar', 'suri', 'suryapet',  
// T
    't.narasapuram', 'tadepalligudem', 'tadikalapudi', 'tadipatri', 'talcher', 'taliparamba', 'tallapudi', 'tallarevu', 'talwandi bhai', 'tamluk', 'tanda', 'tandur', 'tangla', 'tangutur', 'tanuku', 'tarapur', 'tarikere', 'tasgaon', 'tatipaka', 'tawang', 'tekkali', 'tenali', 'tenkasi', 
    'terdal', 'tezpur', 'tezu', 'thalassery', 'thalayolaparambu', 'thamarassery', 'thanipadi', 'thanjavur', 'tharad', 'theni', 'thimmapuram(addu road)', 'thirubuvanai', 'thirumalagiri', 'thiruthuraipoondi', 'thiruttani', 'thiruvalla', 'thiruvarur', 'thodupuzha',
    'thoothukudi', 'thorrur', 'thottiyam', 'thriprayar', 'thrissur', 'thullur', 'thuraiyur', 'tilda neora', 'thindivanam', 'tinsukia', 'tiptur', 'tiruchendur', 'tirukoilur', 'tirumakudalu narasipura', 'tirunelveli', 'tirupati', 'tirupattur', 'tirupur', 'tirur', 
    'tiruvallur', 'tiruvannamalai', 'tiruvarur', 'tiruvuru', 'titagarh', 'titlagarh', 'tittakudi', 'tonk', 'toopran', 'trichy', 'trivandrum', 'tumakuru(tumkur)', 'tumsar', 'turputallu', 'turuvekere', 
// U
    'udaipur', 'udaynarayanpur', 'udgir', 'udhampur', 'udumalpet', 'udupi', 'ujhani', 'ujjain', 'uikkal', 'uluberia', 'ulundurpet', 'umaria', 'umbergaon', 'umbraj', 'umerkote', 
    'umred', 'una', 'una(gujarat)', 'undavalli', 'unnao', 'uppada', 'uthamapalayam', 'uthangarai', 'uthiramerur', 'uthukottai','utraula', 'uttara kannada', 'uttarkashi',
// V
    'vadakara', 'vadakkencherry', 'vadalur', 'vadanappally', 'vadodara', 'vaduj', 'valaparla', 'valigonda', 'valluru', 'valsad', 'vaniyambadi', 'vapi', 'varadaiahpalem', 'varadiyam',
    'varanasi', 'varkala', 'vasind', 'vatsavai', 'vazhapadi', 'vedasandur', 'veeraghattam', 'velangi', 'velanja', 'velanthavalam', 'vellakoil', 'vellore', 'velugodu', 'vempalli', 'vemulawada',
    'vengurla', 'venkatapuram', 'veraval', 'vetapalem','vettaikaranpudur', 'vettavalem', 'vidisha', 'vijapur', 'vijayapura(bengaluru rural)',' vijayapura(bijapur)', 'vijayarai', 
    'viyayawada', 'vikarabad', 'vikasnagar', 'vikravandi', 'villupuram', 'vinukonda', 'viralimalai', 'virudhachalam', 'virudhunagar', 'visnagar', 'vissannapeta', 'vita', 'vithlapur', 'vizag(visakhapatnam)',
    'vizianagaram', 'vrindavan', 'vuyyuru', 'vyara', 
// W
   'wadakkancherry', 'wai', 'waluj', 'wanaparthy', 'wani', 'warangal', 'wardha', 'warorawashim', 'wayanad', 'west kameng','wyra', 
// Y
   'yadagirigutta', 'yamunanagar', 'yanam', 'yangon', 'yavatmal', 'yelagiri', 'yelburga', 'yeleswaram', 
   'yellamanchili', 'yellandu', 'yellareddy', 'yellareddypet', 'yemmiganur', 'yeola', 'yerragondapalem', 'yerraguntla', 'yewat', 'yuksom',
// Z
   'zaheerabad', 'zarap', 'ziro',
   

];

function ViewAllCities ({ onCitySelect }) {
    return(
        <>
            <ul className="other-cities-ul">
                {/* map over the list of all city names */}
                {allCityNames.map(city => (
                    <li key={city} className="other-cities-li" onClick={() => onCitySelect(city)}>
                        {/* An onClick event handler is added to each list item, which calls the onCitySelect function passed as a prop,
                         passing the selected city as an argument. */}
                        <div className="other-cities">
                            {city}
                        </div>
                    </li>
                ))}
            </ul>    
        </>
    );
}
export {allCityNames}
export default ViewAllCities