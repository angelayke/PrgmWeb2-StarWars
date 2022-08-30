class VehiclesService {
    constructor() { }

    url = "https://swapi.dev/api/vehicles/";

    async getVehicles() {
        try {
            const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.status);

			return (await response.json()).results;/**/
		} catch (e) {
			console.error(e);

			return [];
		}
        }

        async getVehiclesWithReturnedUrl(url) {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(response.statusText);
                return await response.json();
            } catch (e) {
                console.error(e);
    
                return {};
            }
        }
    
        async getVehiclesById(id) {
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

export default VehiclesService;