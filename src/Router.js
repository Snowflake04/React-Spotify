// export default async function getCurated() {
//   let apiResponse = await fetch(
//     'https://corsproxy.io/?https://api-v2.soundcloud.com/mixed-selections?variant_ids=2641&client_id=9SCsw04RccufR0pJteXBlpGP02DsHpjR&limit=10&offset=0&linked_partitioning=1&app_version=1700743850&app_locale=en'
//   );
//   apiResponse = await apiResponse.json()
//   return apiResponse.collection
// }


// // //get splash data
// // //https://api-v2.soundcloud.com/mixed-selections?meOrAnonymousUserUrn=soundcloud%3Ausers%3Aanonymous&app_locale=en&client_id=iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX&stage=



/// Route for system-playlist (required auth)
//https://api-v2.soundcloud.com/system-playlists/soundcloud:system-playlists:your-moods:982792804:1?client_id=jBPiLumRQRTRlRQqMrRbqeRkg0r6uc1n&app_version=1701340246&app_locale=en


//Get normal playlist
//https://api-v2.soundcloud.com/playlists/1712756046?representation=full&client_id=Hd4akujkPoaPv8SOUw6sqAySNno8EM7b&app_version=1701429092&app_locale=en

//Get multiple tracks (use %2C to sepreate each track)
//https://api-v2.soundcloud.com/tracks?ids=1351028188%2C1360477507%2C1464676342%2C1499849842%2C1512758497%2C1554700048%2C1567369465%2C1568571277%2C1571212189%2C1578166642%2C1602131010%2C1622515269&client_id=Hd4akujkPoaPv8SOUw6sqAySNno8EM7b&%5Bobject%20Object%5D=&app_version=1701429092&app_locale=en 