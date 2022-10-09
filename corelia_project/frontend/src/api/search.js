export async function searchAll(query, path) {
    if (query === '') {
        return [];
    }

    // Getting the results
    const composers = await searchComposers(query);
    composers.type = 'composers';
    const compositions = await searchCompositions(query);
    compositions.type = 'compositions';
    const publishers = await searchPublishers(query);
    publishers.type = 'publishers';

    // Filtering the results
    let results = [];
    results.push(composers);
    results.push(compositions);
    results.push(publishers);

    // Sorting the results
    results.sort((a, b) => {
        a.count - b.count;
    });

    // Putting thwe results in the right order
    path = path.split('/')[1];
    if (path === 'discover-composers') {
        path = 'composers';
    } else if (path === 'repertoire-library') {
        path = 'compositions';
    } else if (path === 'blog') {
        path = 'blogs';
    } else {
        path = null;
    }

    const index = results.findIndex((search) => {
        return search.type === path;
    });

    if (index !== -1) {
        const mainSearch = results.splice(index, 1);
        results.unshift(mainSearch[0]);
    }

    return results;
}

async function searchComposers(query) {
    const response = await fetch(
        `http://localhost:8000/api/search-composers/${query}`
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

async function searchCompositions(query) {
    const response = await fetch(
        `http://localhost:8000/api/search-compositions/${query}`
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

async function searchPublishers(query) {
    const response = await fetch(
        `http://localhost:8000/api/search-publishers/${query}`
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}
