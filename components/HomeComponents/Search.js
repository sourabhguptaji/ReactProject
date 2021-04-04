import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
            placeholder="What do you want to repair!!!"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    );
};

export default Search;
