$curl = curl_init();
$auth_data = array(
	'client_id' 		=> 'XBnKaywRCrj05mM-XXX-6DXuZ3FFkUgiw45',
	'client_secret' 	=> 'btHTWVNMUATHEnF-XXX-2nQabKcKVo3VXtU',
	'grant_type' 		=> 'client_credentials'
);

curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $auth_data);
curl_setopt($curl, CURLOPT_URL, 'https://api-site.com/oauth/token');
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

$result = curl_exec($curl);
if(!$result){die("Connection Failure");}
curl_close($curl);
echo $result;