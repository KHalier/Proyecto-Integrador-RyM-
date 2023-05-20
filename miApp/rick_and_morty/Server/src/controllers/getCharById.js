// const axios = require('axios')


// const getCharById= async (req, res)=>{
//     let {id} = req.params;
//     let url= `https://rickandmortyapi.com/api/character/${id}`
//     try {
//         const response=await axios.get(url);

//         if(response.data.name){
//             const{id, name, gender, species, origin, image, status}=response.data
//         return res.status(200).json({id, name, gender, species, origin, image, status})
//         }else res.status(404).send('Not found.')
//     } catch (error) {
//         console.log("ASAaaaaaaaaaaaaaaaaaaaaaaasasasasasASAS")
//     }
// }
// module.exports = getCharById;

const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharacterById = async (req, res) => {
  const { id } = req.params;
  try {
    await axios.get(URL + id).then(({ data }) => {
      const { id, name, species, gender, origin, status, image } = data;
      if (name) {
        const character = {
          id,
          name,
          species,
          origin,
          image,
          status,
          gender,
        };
        return res.status(200).json(character);
      }
      return res.status(404).send("Not found");
    });
  } catch {
    (error) => res.status(500).send(error.message);
  }
};
module.exports = { getCharacterById };
