
export async function getMockData() {
        const response = await fetch('https://course-api.com/react-tours-project')
    const tours = await response.json()
    console.log(tours)
        return tours
    }
