class StarshipsService {
    constructor() { }

    url = "https://swapi.dev/api/starships/";

    async getStarships() {
        try {
            const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.status);

			return (await response.json()).results;/**/
		} catch (e) {
			console.error(e);

			return [];
		}
        }

        async getStarshipsWithReturnedUrl(url) {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(response.statusText);
                return await response.json();
            } catch (e) {
                console.error(e);
    
                return {};
            }
        }
    
        async getStarshipsById(id) {
            try {
                const response = await fetch(`${this.url}/${id}`);
                if (!response.ok) throw new Error(response.status);
                return (await response.json());/**/
            } catch (e) {
                console.error(e);
    
                return {};
            }
        }
}

export default StarshipsService;