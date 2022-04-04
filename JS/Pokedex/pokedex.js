const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        console.log(res)
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/pokemonSad.png","./img/pokemonSad.png")
            pokeNames("Error")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeImg_right = data.sprites.front_shiny;
            let pokeTex = data.species.name;
            let pokeAtributes = data.stats;
            let pokemonID = data.id;
            let pokeH = data.height;
            let pokeW = data.weight;
            let pokType = data.types;
            pokeImage(pokeImg,pokeImg_right);
            pokeNames(pokeTex);
            pokeStats(pokeAtributes);
            generation(pokemonID);
            pokemID(pokemonID);
            pokeHeight(pokeH);
            pokeWeight(pokeW);
            pokeType(pokType);
            console.log(pokeImg);
            console.log(pokeTex);
            console.log(pokeAtributes)
        }
    });
}

const pokemID = (url) =>{
    document.getElementById("pokemID").innerHTML = url;
}
const pokeHeight = (url) =>{
    document.getElementById("pokeHeight").innerHTML = url;
}
const pokeWeight = (url) =>{
    document.getElementById("pokeWeight").innerHTML = url;
}

const generation = (url) =>{
    if(url <= '151'){
        document.getElementById("generation").innerHTML = '1st';
    }
    else if(url > '151' && url <= 251){
        document.getElementById("generation").innerHTML = '2nd';
    }
    else if(url > '251' && url <= 386){
        document.getElementById("generation").innerHTML = '3rd';
    }
    else if(url > '386' && url <= 493){
        document.getElementById("generation").innerHTML = '4th';
    }
    else if(url > '493' && url <= 649){
        document.getElementById("generation").innerHTML = '5th';
    }
    else if(url > '649' && url <= 721){
        document.getElementById("generation").innerHTML = '6th';
    }
    else if(url > '721' && url <= 809){
        document.getElementById("generation").innerHTML = '7th';
    }
    else if(url > '809' && url <= 898){
        document.getElementById("generation").innerHTML = '8th';
    }
}

const pokeImage = (url,url_right) => {
    const pokePhoto = document.getElementById("pokeImg");
    const pokePhoto_right = document.getElementById("pokeImg_right");
    pokePhoto.src = url;
    pokePhoto_right.src = url_right;
}

const pokeNames = (url) => {
    document.getElementById("name").innerHTML = `${url.toUpperCase()}`;
}

const pokeStats = (url) => {
    document.getElementById("hp").innerHTML = `${url[0].base_stat}`;
    document.getElementById("attack").innerHTML = `${url[1].base_stat}`;
    document.getElementById("defense").innerHTML = `${url[2].base_stat}`;
    document.getElementById("special-attack").innerHTML = `${url[3].base_stat}`;
    document.getElementById("special-defense").innerHTML = `${url[4].base_stat}`;
    document.getElementById("speed").innerHTML = `${url[5].base_stat}`;
}

const pokeType = (url) => {
    if (url[1] != null){
        document.getElementById("type1").innerHTML = `${url[0].type.name.toUpperCase()}`;
        document.getElementById("type2").innerHTML = `${url[1].type.name.toUpperCase()}`;
    }
    else{
        document.getElementById("type1").innerHTML = `${url[0].type.name.toUpperCase()}`;
        document.getElementById("type2").innerHTML = `None`;
    }
}

const colors = {
    fire: '#FFA05D',
	grass: '#8FD594',
	electric: '#FFE43B',
	water: '#7E97C0',
	ground: '#CAAC4D',
	rock: '#90642D',
	poison: '#9D5B9B',
	bug: '#EAFD71',
	dragon: '#97b3e6',
	psychic: '#FF96B5',
	flying: '#CDCDCD',
	fighting: '#FF5D5D',
	normal: '#FFFFFF'
}

