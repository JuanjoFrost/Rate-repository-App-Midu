import React, { useEffect , useState} from 'react';
import {Text, FlatList, Alert} from 'react-native';
import RepositoryItem from './RepositoryItem.jsx';


/** Sacando los datos de un array desde un script 
const RepositoryList = () => {
    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
               <RepositoryItem {...repo}/>
            )}
        />
    )
}

/** Sacando los datos desde una api NO FUNCIONA API*/
const RepositoryList = () => {
    const [repositories, setRepositories] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const GITHUB_CLIENT_ID='920679028cbade113196';
    const GITHUB_CLIENT_SECRET='6439607a4addd585e4e5c28f30535d2a0fafcd7a';
    const JWT_SECRET='nDnBppCaGL0C-lsL8AZzNVnz0_dJWD_Jn';

    const fetchRespositories = async () => {
        const response = await globalThis.fetch('http://localhost:5000/api/repositories',{
            headers: {
              Authorization: `Bearer ${JWT_SECRET}`
            },
            method: 'GET'
            
        }).catch(error => {console.log(error)});
        const json = await response.json();

        setRepositories(json)
    };
  
    useEffect(() => {
      fetchRespositories();
    }, []);
  
    const repositoriesNodes = repositories ? repositories.results.map(resultado => resultado.name) : [];
  
    return (
      <FlatList
        data={repositoriesNodes}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
      />
    );
  };


export default RepositoryList;