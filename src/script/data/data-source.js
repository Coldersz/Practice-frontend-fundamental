// import clubs from './clubs.js';

const baseUrl = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t="

class DataSource {
	// static searchClub(keyword) {
	// 	return new Promise((resolve, reject) => {
	// 		const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

	// 		if (filteredClubs.length) {
	//         	resolve(filteredClubs);
	// 	    } else {
	// 	        reject(`${keyword} is not found`);
	// 	    }
	// 	})
	// }

	static async searchClub(keyword) {
		try {
			const response = await fetch(`${baseUrl}${keyword}`);
			const responseJson = await response.json();

			if (responseJson.teams) {
				return Promise.resolve(responseJson.teams);
			} else {
				return Promise.reject(`${keyword} is not found`)
			}
		} catch (error) {
			console.error(error);
		}
	}
}

export default DataSource;