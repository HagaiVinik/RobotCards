const urls = {
    getRobots: 'https://jsonplaceholder.typicode.com/users',
    getImageUrl: (id) => `https://robohash.org/${id}tesfwedcds?200x200`
};

let robots;

export const getRobots = async (useCache = true) => {
    if (useCache && robots) {
        return robots;
    }

    robots = await fetch(urls.getRobots, {
        headers: {'Access-Control-Allow-Origin': '*'}
    }).then(response => response.json());

    robots.forEach((robot) => {
        robot.imageUrl = urls.getImageUrl(robot.id);
    });

    return robots;
};

export const searchRobots = (query) => {
    if (!robots) {
        return [];
    }

    if(query === '') {
        return robots;
    }

    query = query.toLowerCase();
    return robots.filter(({name}) => name.toLowerCase().includes(query));
};
