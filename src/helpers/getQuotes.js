
export const getQuotes = async () => {

    try {

        const response = await fetch("https://api.quotable.io/random");

        if (!response.ok) {

            throw new Error("Error al obtener las citas");
        
        }

        const data = await response.json();
        
        return data;

    } catch (error) {
        
        console.error("Error:", error);
    }
};